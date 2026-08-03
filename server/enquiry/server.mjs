/**
 * WIZAG enquiry handler — a tiny, zero-dependency Node service.
 *
 * Runs on 127.0.0.1:PORT behind Caddy (`handle /api/*` on the wizag.biz block).
 * Deployed to /srv/wizag/enquiry/ on the VPS via systemd `wizag-enquiry`.
 * NOT part of the static Astro build — this file is the versioned source of
 * truth; deploy it by copying to the server (see server/enquiry/README.md).
 *
 * Routes:
 *   POST /api/enquiry        Form submits -> reCAPTCHA check -> Brevo -> info@wizag.biz
 *   GET  /api/config         { recaptcha: { siteKey } | null }  (public — for the form)
 *   GET  /api/setup/:token   One-time page to paste secrets (Brevo key, or reCAPTCHA keys)
 *   POST /api/setup/:token   Stores them, then disables itself
 *   GET  /api/health         { ok, brevo, recaptcha }
 *
 * Secrets are NEVER in this file or in git:
 *   ./brevo.key         (600)  Brevo API key
 *   ./recaptcha.secret  (600)  Google reCAPTCHA secret key
 *   ./recaptcha.json    (644)  { siteKey }  — public, served to the form via /api/config
 * They are written only via the one-time /api/setup/:token page. setup.json carries the
 * one-time token, its expiry, a `used` flag, and a `purpose` (brevo | recaptcha).
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = dirname(fileURLToPath(import.meta.url));
const KEY_FILE = join(DIR, 'brevo.key');
const RECAPTCHA_SECRET_FILE = join(DIR, 'recaptcha.secret');
const RECAPTCHA_CFG_FILE = join(DIR, 'recaptcha.json');
const SETUP_FILE = join(DIR, 'setup.json');

const PORT = Number(process.env.PORT || 3010);
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'vsm@wizag.co.ke';
const SENDER_NAME = process.env.SENDER_NAME || 'WIZAG Website';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@wizag.biz';
const MAX_BODY = 24 * 1024;

const readFileTrim = (p) => {
  try { return readFileSync(p, 'utf8').trim(); } catch { return ''; }
};
const readKey = () => readFileTrim(KEY_FILE);
const readRecaptchaSecret = () => readFileTrim(RECAPTCHA_SECRET_FILE);
const readRecaptchaSite = () => {
  try { return JSON.parse(readFileSync(RECAPTCHA_CFG_FILE, 'utf8')).siteKey || ''; } catch { return ''; }
};
const readSetup = () => {
  try { return JSON.parse(readFileSync(SETUP_FILE, 'utf8')); } catch { return null; }
};
const isEmail = (s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const esc = (s = '') =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clientIp = (req) =>
  ((req.headers['x-forwarded-for'] || '').split(',')[0] || '').trim() || req.socket.remoteAddress || '';

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
  if (ct.includes('application/json')) { try { return JSON.parse(raw); } catch { return {}; } }
  const out = {};
  for (const [k, v] of new URLSearchParams(raw)) out[k] = v;
  return out;
}
const wantsJson = (req) =>
  (req.headers['accept'] || '').includes('application/json') ||
  (req.headers['content-type'] || '').includes('application/json');

function sendJson(res, status, obj) {
  const b = JSON.stringify(obj);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(b),
    'cache-control': 'no-store',
  });
  res.end(b);
}
function sendHtml(res, status, body) {
  res.writeHead(status, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
  res.end(body);
}
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

/* ---- Google reCAPTCHA v2 verification (skips cleanly if not configured) ---- */
async function verifyRecaptcha(token, ip) {
  const secret = readRecaptchaSecret();
  if (!secret) return { ok: true, skipped: true }; // CAPTCHA not set up yet
  if (!token) return { ok: false, error: 'captcha-missing' };
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body,
    });
    const out = await res.json().catch(() => ({}));
    if (out.success) return { ok: true };
    console.error('[wizag-enquiry] reCAPTCHA failed:', out['error-codes']);
    return { ok: false, error: 'captcha-failed' };
  } catch (e) {
    console.error('[wizag-enquiry] reCAPTCHA check error:', e.message);
    return { ok: false, error: 'captcha-error' };
  }
}

/* ---- Brevo transactional send ---- */
async function sendViaBrevo({ name, email, company, message }) {
  const key = readKey();
  if (!key) return { ok: false, code: 503, error: 'not configured' };
  const text =
    `New enquiry from the wizag.biz "Book an Assessment" form:\n\n` +
    `Name:    ${name}\nEmail:   ${email}\nCompany: ${company || '—'}\n\nMessage:\n${message}\n`;
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
  return { ok: false, code: 502, error: `brevo ${res.status}` };
}

/* ---- minimal HTML shell for the setup / no-JS pages (mobile-friendly) ---- */
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
  input{width:100%;padding:.75rem .9rem;border:1px solid #cad0d9;border-radius:10px;font:inherit;color:var(--ink)}
  input:focus{outline:2px solid var(--orange);border-color:var(--navy)}
  button{margin-top:1.4rem;background:var(--navy);color:#fff;border:0;border-radius:8px;
    padding:.8rem 1.4rem;font:inherit;font-weight:600;cursor:pointer}
  .muted{color:var(--soft);font-size:.9rem} a{color:var(--navy)} code{background:var(--warm);padding:.1rem .3rem;border-radius:4px}
</style></head><body><div class="wrap"><div class="card">${inner}</div></div></body></html>`;
}
const setupFormPage = (token, purpose, error) => {
  const err = error ? `<p style="color:#b3261e;font-weight:600">${esc(error)}</p>` : '';
  if (purpose === 'recaptcha') {
    return page('Connect reCAPTCHA', `
      <h1>Connect Google reCAPTCHA</h1>
      <p>Paste both keys from your reCAPTCHA admin console. They go straight to the WIZAG
         server over HTTPS; this page then disables itself.</p>${err}
      <form method="post" action="/api/setup/${esc(token)}">
        <label for="site">Site Key <span class="muted">(public)</span></label>
        <input id="site" name="siteKey" type="text" autocomplete="off" autocapitalize="off"
               autocorrect="off" spellcheck="false" placeholder="6L…" required>
        <label for="secret">Secret Key</label>
        <input id="secret" name="secretKey" type="password" autocomplete="off" autocapitalize="off"
               autocorrect="off" spellcheck="false" placeholder="6L…" required>
        <button type="submit">Save &amp; connect</button>
      </form>
      <p class="muted" style="margin-top:1.2rem">From google.com/recaptcha/admin — reCAPTCHA v2, "I'm not a robot".</p>`);
  }
  return page('Connect Brevo', `
    <h1>Connect Brevo</h1>
    <p>Paste your Brevo API key below. It is sent straight to the WIZAG server over HTTPS,
       stored securely, and this page then disables itself.</p>${err}
    <form method="post" action="/api/setup/${esc(token)}">
      <label for="k">Brevo API key</label>
      <input id="k" name="key" type="password" autocomplete="off" autocapitalize="off"
             autocorrect="off" spellcheck="false" placeholder="xkeysib-…" required>
      <button type="submit">Save &amp; connect</button>
    </form>`);
};
const setupDonePage = (purpose) => page('Connected', `
  <h1>✓ ${purpose === 'recaptcha' ? 'reCAPTCHA' : 'Brevo'} is connected.</h1>
  <p>Your ${purpose === 'recaptcha' ? 'keys are' : 'key is'} stored securely on the server and
     this setup link is now closed.</p>
  <p>Tell Claude it's done and it will verify everything is live.</p>`);
const setupClosedPage = () => page('Setup closed', `
  <h1>This link is not valid.</h1>
  <p>It may have expired or already been used. Ask Claude for a fresh setup link.</p>`);

/* ---------------------------------------------------------------- */
const server = createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  try {
    if (req.method === 'GET' && path === '/api/health') {
      return sendJson(res, 200, { ok: true, brevo: !!readKey(), recaptcha: !!readRecaptchaSecret() });
    }
    if (req.method === 'GET' && path === '/api/config') {
      const siteKey = readRecaptchaSite();
      return sendJson(res, 200, { recaptcha: siteKey ? { siteKey } : null });
    }

    if (path.startsWith('/api/setup/')) {
      const token = decodeURIComponent(path.slice('/api/setup/'.length));
      const setup = readSetup();
      const valid = !!setup && !!setup.token && token === setup.token && !setup.used && Date.now() < setup.expiresAt;
      const purpose = (setup && setup.purpose) || 'brevo';

      if (req.method === 'GET') {
        return valid ? sendHtml(res, 200, setupFormPage(token, purpose)) : sendHtml(res, 410, setupClosedPage());
      }
      if (req.method === 'POST') {
        if (!valid) return sendHtml(res, 403, setupClosedPage());
        const data = parseBody(req, await readBody(req));
        if (purpose === 'recaptcha') {
          const siteKey = (data.siteKey || '').trim();
          const secretKey = (data.secretKey || '').trim();
          if (siteKey.length < 20 || secretKey.length < 20) {
            return sendHtml(res, 400, setupFormPage(token, purpose, 'Both keys are required (they look like "6L…").'));
          }
          writeFileSync(RECAPTCHA_CFG_FILE, JSON.stringify({ siteKey }), { mode: 0o644 });
          writeFileSync(RECAPTCHA_SECRET_FILE, secretKey + '\n', { mode: 0o600 });
        } else {
          const apiKey = (data.key || '').trim();
          if (apiKey.length < 20) return sendHtml(res, 400, setupFormPage(token, purpose, 'That does not look like a full key.'));
          writeFileSync(KEY_FILE, apiKey + '\n', { mode: 0o600 });
        }
        writeFileSync(SETUP_FILE, JSON.stringify({ ...setup, used: true }), { mode: 0o600 });
        return sendHtml(res, 200, setupDonePage(purpose));
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
      const cap = await verifyRecaptcha((data['g-recaptcha-response'] || data.captcha || '').trim(), clientIp(req));
      if (!cap.ok) {
        return respondEnquiry(req, res, 400, { ok: false, error: 'Please complete the "I\'m not a robot" check and try again.' });
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
  console.log(`[wizag-enquiry] listening on 127.0.0.1:${PORT} (brevo=${!!readKey()} recaptcha=${!!readRecaptchaSecret()})`);
});
