/**
 * WIZAG enquiry handler — a tiny, zero-dependency Node service.
 *
 * Runs on 127.0.0.1:PORT behind Caddy (`handle /api/*` on the wizag.biz block).
 * Deployed to /srv/wizag/enquiry/ on the VPS via systemd `wizag-enquiry`.
 * NOT part of the static Astro build — this file is the versioned source of
 * truth; deploy it by copying to the server (see server/enquiry/README.md).
 *
 * Routes:
 *   POST /api/enquiry        Contact-form submissions -> Brevo -> info@wizag.biz
 *   GET  /api/setup/:token   One-time page to paste the Brevo API key (phone-friendly)
 *   POST /api/setup/:token   Stores the key (chmod 600), then disables itself
 *   GET  /api/health         { ok, configured }
 *
 * The Brevo key is NEVER in this file or in git. It is written to
 * ./brevo.key (mode 600) only via the one-time setup page, and read at send
 * time. The setup link is single-use and time-limited (see setup.json).
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = dirname(fileURLToPath(import.meta.url));
const KEY_FILE = join(DIR, 'brevo.key');
const SETUP_FILE = join(DIR, 'setup.json');

const PORT = Number(process.env.PORT || 3010);
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'no-reply@wizag.biz';
const SENDER_NAME = process.env.SENDER_NAME || 'WIZAG Website';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@wizag.biz';
const MAX_BODY = 24 * 1024;

const readKey = () => {
  try { return readFileSync(KEY_FILE, 'utf8').trim(); } catch { return ''; }
};
const readSetup = () => {
  try { return JSON.parse(readFileSync(SETUP_FILE, 'utf8')); } catch { return null; }
};
const isEmail = (s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const esc = (s = '') =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function readBody(req) {
  return new Promise((resolve, reject) => {
    let n = 0;
    const chunks = [];
    req.on('data', (c) => {
      n += c.length;
      if (n > MAX_BODY) { reject(new Error('too large')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function parseBody(req, raw) {
  const ct = (req.headers['content-type'] || '').toLowerCase();
  if (ct.includes('application/json')) {
    try { return JSON.parse(raw); } catch { return {}; }
  }
  const out = {};
  for (const [k, v] of new URLSearchParams(raw)) out[k] = v;
  return out;
}

const wantsJson = (req) =>
  (req.headers['accept'] || '').includes('application/json') ||
  (req.headers['x-requested-with'] || '') === 'fetch' ||
  (req.headers['content-type'] || '').includes('application/json');

function sendJson(res, status, obj) {
  const b = JSON.stringify(obj);
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'content-length': Buffer.byteLength(b) });
  res.end(b);
}
function sendHtml(res, status, body) {
  res.writeHead(status, { 'content-type': 'text/html; charset=utf-8' });
  res.end(body);
}

/* Respond to an enquiry POST: JSON for fetch, a full HTML page for no-JS. */
function respondEnquiry(req, res, status, obj) {
  if (wantsJson(req)) return sendJson(res, status, obj);
  const ok = status === 200 && obj.ok;
  return sendHtml(res, status, page(
    ok ? 'Thank you' : 'Something went wrong',
    ok
      ? `<h1>Thank you — we've got it.</h1><p>Your enquiry is on its way to the WIZAG team. We'll be in touch, usually within one business day.</p><p><a href="/">Back to wizag.biz</a></p>`
      : `<h1>Sorry — that didn't send.</h1><p>${esc(obj.error || 'Please try again.')}</p><p>You can also email us directly at <a href="mailto:info@wizag.biz">info@wizag.biz</a>.</p><p><a href="/contact">Back to the form</a></p>`
  ));
}

/* ---- Brevo transactional send ---- */
async function sendViaBrevo({ name, email, company, message }) {
  const key = readKey();
  if (!key) return { ok: false, code: 503, error: 'not configured' };
  const text =
    `New enquiry from the wizag.biz "Book an Assessment" form:\n\n` +
    `Name:    ${name}\n` +
    `Email:   ${email}\n` +
    `Company: ${company || '—'}\n\n` +
    `Message:\n${message}\n`;
  let res;
  try {
    res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { email: SENDER_EMAIL, name: SENDER_NAME },
        to: [{ email: RECIPIENT_EMAIL }],
        replyTo: { email, name: name || email },
        subject: `Website enquiry — ${name}`,
        textContent: text,
      }),
    });
  } catch (e) {
    return { ok: false, code: 502, error: 'network: ' + e.message };
  }
  if (res.status === 201 || res.ok) {
    console.log('[wizag-enquiry] sent to', RECIPIENT_EMAIL, 'from', SENDER_EMAIL);
    return { ok: true };
  }
  const detail = await res.text().catch(() => '');
  console.error('[wizag-enquiry] Brevo rejected:', res.status, detail.slice(0, 300));
  return { ok: false, code: 502, error: `brevo ${res.status}`, detail: detail.slice(0, 300) };
}

/* ---- minimal HTML shell for the setup + no-JS pages (mobile-friendly) ---- */
function page(title, inner) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)} · WIZAG</title>
<style>
  :root{--navy:#1b306c;--ink:#364152;--soft:#5a6472;--orange:#b85c00;--line:#e7e9ed;--warm:#f7f6f3}
  *{box-sizing:border-box} body{margin:0;background:var(--warm);color:var(--ink);
    font:16px/1.6 ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}
  .wrap{max-width:34rem;margin:0 auto;padding:2.5rem 1.25rem}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.75rem}
  h1{color:var(--navy);font-size:1.35rem;margin:0 0 .6rem} p{margin:.6rem 0}
  label{display:block;font-weight:600;color:var(--navy);margin:1.2rem 0 .4rem}
  input,textarea{width:100%;padding:.75rem .9rem;border:1px solid #cad0d9;border-radius:10px;
    font:inherit;color:var(--ink)} input:focus,textarea:focus{outline:2px solid var(--orange);border-color:var(--navy)}
  button{margin-top:1.4rem;background:var(--navy);color:#fff;border:0;border-radius:8px;
    padding:.8rem 1.4rem;font:inherit;font-weight:600;cursor:pointer}
  .muted{color:var(--soft);font-size:.9rem} a{color:var(--navy)} code{background:var(--warm);padding:.1rem .3rem;border-radius:4px}
</style></head><body><div class="wrap"><div class="card">${inner}</div></div></body></html>`;
}

const setupFormPage = (token, error) => page(
  'Connect Brevo',
  `<h1>Connect Brevo</h1>
   <p>Paste your Brevo API key below. It is sent straight to the WIZAG server over HTTPS,
      stored securely, and this page then disables itself. It is never shown again.</p>
   ${error ? `<p style="color:#b3261e;font-weight:600">${esc(error)}</p>` : ''}
   <form method="post" action="/api/setup/${esc(token)}">
     <label for="k">Brevo API key</label>
     <input id="k" name="key" type="password" autocomplete="off" autocapitalize="off"
            autocorrect="off" spellcheck="false" placeholder="xkeysib-…" required>
     <button type="submit">Save &amp; connect</button>
   </form>
   <p class="muted" style="margin-top:1.2rem">Only paste a key you generated in Brevo → SMTP &amp; API → API Keys.</p>`
);

const setupDonePage = () => page(
  'Connected',
  `<h1>✓ Brevo is connected.</h1>
   <p>Your key is stored securely on the server and this setup link is now closed.</p>
   <p>Tell Claude it's done and it will run a test enquiry to confirm mail reaches
      <code>info@wizag.biz</code>.</p>`
);

const setupClosedPage = (configured) => page(
  'Setup closed',
  configured
    ? `<h1>Already connected.</h1><p>Brevo is already set up. This link is closed. If you need to
        change the key, ask Claude to issue a fresh setup link.</p>`
    : `<h1>This link is not valid.</h1><p>It may have expired or already been used. Ask Claude for a
        fresh setup link.</p>`
);

/* ---------------------------------------------------------------- */
const server = createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;

  try {
    if (req.method === 'GET' && path === '/api/health') {
      return sendJson(res, 200, { ok: true, configured: !!readKey() });
    }

    if (path.startsWith('/api/setup/')) {
      const token = decodeURIComponent(path.slice('/api/setup/'.length));
      const setup = readSetup();
      const configured = !!readKey();
      const valid =
        !!setup && !!setup.token && token === setup.token && !setup.used && Date.now() < setup.expiresAt;

      if (req.method === 'GET') {
        if (configured || !valid) return sendHtml(res, valid ? 200 : 410, setupClosedPage(configured));
        return sendHtml(res, 200, setupFormPage(token));
      }
      if (req.method === 'POST') {
        if (configured || !valid) return sendHtml(res, 403, setupClosedPage(configured));
        const data = parseBody(req, await readBody(req));
        const apiKey = (data.key || '').trim();
        if (apiKey.length < 20) return sendHtml(res, 400, setupFormPage(token, 'That does not look like a full Brevo API key.'));
        writeFileSync(KEY_FILE, apiKey + '\n', { mode: 0o600 });
        writeFileSync(SETUP_FILE, JSON.stringify({ ...setup, used: true }), { mode: 0o600 });
        return sendHtml(res, 200, setupDonePage());
      }
      return sendJson(res, 405, { ok: false, error: 'method not allowed' });
    }

    if (req.method === 'POST' && path === '/api/enquiry') {
      const data = parseBody(req, await readBody(req));
      if ((data.website || '').trim()) return respondEnquiry(req, res, 200, { ok: true }); // honeypot
      const name = (data.name || '').trim();
      const email = (data.email || '').trim();
      const company = (data.company || '').trim();
      const message = (data.message || '').trim();
      if (!name || !isEmail(email) || !message) {
        return respondEnquiry(req, res, 400, { ok: false, error: 'Please add your name, a valid email, and a message.' });
      }
      if (name.length > 200 || email.length > 254 || company.length > 200 || message.length > 5000) {
        return respondEnquiry(req, res, 400, { ok: false, error: 'That is a little long — please shorten it.' });
      }
      const r = await sendViaBrevo({ name, email, company, message });
      if (r.ok) return respondEnquiry(req, res, 200, { ok: true });
      return respondEnquiry(req, res, r.code || 500, {
        ok: false,
        error: 'We could not send your enquiry just now. Please email info@wizag.biz directly.',
      });
    }

    return sendJson(res, 404, { ok: false, error: 'not found' });
  } catch (e) {
    return sendJson(res, 400, { ok: false, error: 'bad request' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[wizag-enquiry] listening on 127.0.0.1:${PORT} (configured=${!!readKey()})`);
});
