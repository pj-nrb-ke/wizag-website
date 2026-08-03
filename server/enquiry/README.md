# WIZAG enquiry handler

A tiny zero-dependency Node service that powers the **contact / "Book an
Assessment"** form. It receives submissions and sends them through **Brevo** to
`info@wizag.biz`. It is **not** part of the Astro static build — this folder is
the versioned source of truth; the running copy lives on the VPS.

## Where it runs (VPS `169.58.11.173`, alias `signaldesk-vps`)

- Code: **`/srv/wizag/enquiry/server.mjs`** (copy of this file).
- Service: systemd **`wizag-enquiry`**, listening on **`127.0.0.1:3010`**.
- Caddy: the `wizag.biz` block has **`handle /api/* { reverse_proxy 127.0.0.1:3010 }`**
  (added after the `/cms/*` handle; a timestamped `Caddyfile.bak-*` sits alongside).
- The Brevo API key is in **`/srv/wizag/enquiry/brevo.key`** (mode 600) — written
  only via the one-time setup page, never in git.
- Config via the systemd unit env: `SENDER_EMAIL=vsm@wizag.co.ke`,
  `RECIPIENT_EMAIL=info@wizag.biz`, `SENDER_NAME`, `PORT`.

## Routes

| Route | Purpose |
|---|---|
| `POST /api/enquiry` | Form submit → validate (+ honeypot `website`) → Brevo → `info@wizag.biz`. JSON for fetch, a thank-you HTML page for no-JS. |
| `GET/POST /api/setup/:token` | **One-time** page to paste the Brevo key from a phone (HTTPS, single-use, expiring; write-only, never displays the key). |
| `GET /api/health` | `{ ok, configured }`. |

## Deploy / update the handler

```bash
scp -i ~/.ssh/signaldesk_vps server/enquiry/server.mjs root@169.58.11.173:/srv/wizag/enquiry/server.mjs
ssh -i ~/.ssh/signaldesk_vps root@169.58.11.173 'systemctl restart wizag-enquiry && curl -s http://127.0.0.1:3010/api/health'
```

## Re-issue a setup link (to (re)set the Brevo key)

```bash
# on the VPS
cd /srv/wizag/enquiry
T=$(openssl rand -hex 24); printf '{"token":"%s","expiresAt":%s,"used":false}\n' "$T" "$(( ($(date +%s)+86400)*1000 ))" > setup.json
chmod 600 setup.json; systemctl restart wizag-enquiry
echo "https://wizag.biz/api/setup/$T"     # give this to PJ; delete brevo.key first if replacing the key
```

## Deliverability note

**Sender must be validated in the Brevo account whose key is installed.** As of
2026-08-03 that account's valid senders are `info@emailnotifications.co.ke`,
`vsm@wizag.co.ke`, `admin@teamkazi.com` — **no `@wizag.biz` sender**. Sending from
`no-reply@wizag.biz` was **rejected** ("sender not valid / authenticate your domain"),
so `SENDER_EMAIL` is set to the validated **`vsm@wizag.co.ke`**. Delivery to `@wizag.biz`
(Zoho) works — a test to pj@wizag.biz `delivered` to the Inbox. To send from
`no-reply@wizag.biz`, first authenticate the **wizag.biz** domain (or verify that sender)
in that Brevo account, then switch `SENDER_EMAIL` back. Check delivery in Brevo →
Transactional → Logs, or the API `GET /v3/smtp/statistics/events?email=…`. Watch Zoho Junk.

## Hardening backlog (v1 runs as root, loopback-only)

Move to a dedicated non-root user; add basic per-IP rate limiting; consider a
Turnstile/hCaptcha token on the form.
