# WizFlow — photography briefs

> **STATUS (2026-08-02): DONE.** All three photographs and the logo were
> supplied by the client and are placed — `public/images/wizflow/*.jpg`
> (compressed from ~1.9 MB hi-res to ~90–115 KB each) and
> `public/brand/wizflow-logo.png` (flow icon cropped from the hi-res lockup).
> The `ImageSlot` placeholders on the page have been replaced with real `<img>`.
> The briefs below are kept for reference / any future re-shoot.

Three photographs are used on the WizFlow product page
(`src/pages/business-applications/wizflow.astro`), in these exact positions.

House style: see `docs/photography-direction.md`. Bright, natural, authentically
Kenyan/East-African office settings — real people mid-task, not stock
"diverse team at laptops". Warm daylight, restrained, senior. No screens showing
fabricated software UI.

When the assets land, place them in `public/images/wizflow/` and replace each
`<ImageSlot .../>` with an `<img>` (see the WizCRM page for the exact markup,
`loading="lazy" decoding="async"`, `width`/`height` at the 4/3 ratio).

---

## Photo 1 — Submitting a request (the calm "before")
- **File:** `public/images/wizflow/wizflow-submit.jpg`
- **Ratio:** 4/3 (e.g. 504×378 or larger, same aspect)
- **Shot:** An office employee at a laptop, calmly submitting a request —
  relaxed and unhurried, no pile of paper forms, no phone pressed to the ear.
- **Why:** Section "How it works". Humanises the originator's side — structured
  submission replacing the email-and-spreadsheet scramble.

## Photo 2 — Reviewing the numbers (oversight)
- **File:** `public/images/wizflow/wizflow-insight.jpg`
- **Ratio:** 4/3
- **Shot:** A manager or director reviewing dashboards on a monitor, ideally
  leaning in with a colleague to read a chart together. Engaged, not posed.
- **Why:** Section "Reporting & analytics". Grounds the KPI story in a real
  management moment — someone acting on the numbers WizFlow surfaces.

## Photo 3 — Approving from anywhere (the mobile moment)
- **File:** `public/images/wizflow/wizflow-approve.jpg`
- **Ratio:** 4/3
- **Shot:** An approver acting on their phone away from a desk — a manager
  approving a request in a corridor or between meetings, at ease.
- **Why:** Section "Approve from anywhere". Proves the mobile + one-click-email
  approval story: decisions happen wherever the approver is.

---

## Also needed (optional but ideal): the WizFlow logo
- **File:** `public/brand/wizflow-logo.svg` — a light-ground (true-colour) SVG
  mark, like `public/brand/wizcrm-logo.svg`.
- **Where it plugs in:** the Business Applications menu (add `logo:` to the
  WizFlow entry in `src/data/navigation.ts`) and the page hero (mirror the
  WizCRM hero's `<img>` mark). Without it the page and menu render cleanly —
  the name simply carries as text — so this is a polish item, not a blocker.
