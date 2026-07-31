# WIZAG — Handover Tasks for a New Session

> Written 2026-07-31 for a fresh Claude Code session (e.g. on a new laptop that
> received this folder). **Read `CLAUDE.md` first** — especially §13 (the Insights
> blog + deployment + auto-publish) and §6 (content/anti-fabrication rules).
> This file is the outstanding to-do list; prune items as they are completed.
>
> Reporting preference (PJ): reply in **four short plain sections** — what you did,
> what you need from PJ, what you're aiming for, and any blocker — **no technical
> jargon** in chat.

---

## A. Get set up on this machine (do these first)

1. **Confirm the repo is linked + in sync.** This folder should already be a Git repo
   pointing at `github.com/pj-nrb-ke/wizag-website`. Run `git status`, `git fetch`,
   `git pull` — expect "up to date" (this laptop was the only committer).
2. **`npm install`** (Node 22 to match the server; Sharp must build for image work).
3. **Dev preview:** launch `.claude/launch.json` → `wizag-dev` (port 4321) via the
   preview tools (never a raw shell). Confirm the site and the **Insights blog**
   (`/insights`, `/insights/AI_CRM`) render with no console errors.
4. **`npm run build`** — must succeed. It fetches published posts from the live CMS
   (`https://wizag.biz/cms/api`) and optimises images at build. Then grep `dist/` for
   the banned terms (CLAUDE.md §9) — must be empty.
5. **Server access (SSH).** Confirm `ssh signaldesk-vps` reaches the VPS
   (`169.58.11.173`, root). If this machine uses a fresh key, make sure its public key
   is in the VPS `~/.ssh/authorized_keys`. Re-read CLAUDE.md §13 for the deploy model:
   **blog content auto-publishes; CODE changes must be pushed to `/srv/wizag/build`
   then `rebuild.sh`** (a plain dist-swap alone gets reverted by the next auto-rebuild).
6. **Prove the deploy loop once:** make one trivial code change, deploy it via the
   build-dir path, confirm it went live, and confirm `https://signal.wizloop.app/`
   still returns 307 (shared box — never disturb the neighbours).

## B. Outstanding website work (roughly by priority)

7. **E-commerce — sell WIZAG software directly (M-Pesa + cards).** Discussed, not built.
   Blocked on PJ: (a) which products, (b) one-time price vs subscription, (c) Kenya-only
   vs international, and (d) PJ opening a payment-gateway account (IntaSend / Pesapal /
   Flutterwave). Then build: a Products/Pricing page (catalogue can live in the existing
   Payload CMS), "Buy/Subscribe" buttons → the gateway's **hosted** checkout, and order
   capture + fulfilment (gateway webhook → Payload order record → license/credentials).
   **Never handle card details in code** — the hosted gateway does that.
8. **Leadership** (`/about/leadership`) and **Careers** (`/about/careers`) — currently
   `noindex` shells. Need **real** people/roles/bios and real openings from the client.
   Do NOT fabricate (brief §8.12 / CLAUDE.md §6).
9. **Outstanding images** — prompts already written in `docs/*-image-prompts.md`:
   several industry-sector photos, an About office shot, some Sage Business Cloud shots,
   and `teamkazi-timesheets`. Generate + place via the ImageSlot workflow (CLAUDE.md §7).
10. **Blog** — help PJ publish more Insights posts. Nudge PJ to fill each image's
    **alt/description** field in the CMS (the hero currently falls back to the title).
    Optional: give the first post a descriptive URL (its slug is `AI_CRM`).

## C. Security & infrastructure follow-ups

11. **Optional CSP hardening.** The site is Mozilla Observatory **B+**; the one ding is
    the CSP's `'unsafe-inline'` (needed for the inline scripts/styles). A hash/nonce CSP
    would reach A. Headers live in the VPS Caddyfile (CLAUDE.md §8/§13) — keep the
    existing header set on any edit.
12. **DNS cleanup** (separate workstream — tread carefully, live Zoho mail + Brevo).
    The wildcard `*.wizag.biz` still points to the OLD/compromised IP `195.26.245.217`
    — remove or repoint. Broader Contabo legacy-zone tidy-up.

## D. Housekeeping

13. If a **fresh SSH key** was created for this machine, retire the OLD laptop's key
    from the VPS `~/.ssh/authorized_keys` once this machine is confirmed working.
14. **Commit + push to GitHub as you go** — it is both the backup and the point the
    live server's build directory should be kept in step with.
