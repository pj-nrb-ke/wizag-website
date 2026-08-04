# WizLane — photography briefs & image prompts

> **STATUS (2026-08-04): DONE.** All three photographs and the logo were supplied
> by the client and are placed — `public/images/wizlane/*.jpg` (compressed from
> ~2 MB PNG to ~90–105 KB JPEG, 1080×810) and `public/brand/wizlane-logo.png` (the
> truck mark, knocked out of the supplied cream-ground lockup to a transparent PNG;
> the full lockup is kept alongside as `wizlane-logo-full.png`). The `ImageSlot`
> placeholders and the hero-logo comment have been replaced with real markup. The
> briefs below are kept for reference / any future re-shoot.

The WizLane page needs **three photographs + one logo mark** — four assets in
total. The three photographs can be generated in ChatGPT with the prompts below;
the logo should be the **existing WizLane brand mark** (please supply it, don't
generate a new one).

House style: see `docs/photography-direction.md`. Bright, natural, authentically
Kenyan / East-African settings — real people mid-task, not stock "diverse team at
laptops". Warm daylight, restrained, editorial. **No screens showing fabricated
software UI** (keep any on-screen content abstract or indistinct).

When the assets land: place the photos in `public/images/wizlane/` and replace
each `<ImageSlot .../>` in the page with an `<img loading="lazy" decoding="async"
width=… height=…>` at the 4/3 ratio (copy the exact markup from the WizFlow page,
`src/pages/business-applications/wizflow.astro`).

---

## Photo 1 — On the corridor (job lifecycle)
- **File:** `public/images/wizlane/wizlane-corridor.jpg`
- **Ratio:** 4/3 (e.g. 1080×810)
- **Placement:** "How it works — one job, booking to invoice".
- **ChatGPT prompt:**
  > A photorealistic landscape photograph of a loaded long-haul cargo truck (a
  > rigid truck or semi-trailer) travelling on the Mombasa–Nairobi highway (A109)
  > in Kenya, mid-corridor, at golden hour. Warm natural daylight, open savannah
  > with acacia trees beside the road and distant hills. The truck is clean and
  > modern with no visible branding or logos. Documentary, editorial feel — not
  > an advertisement. Natural, restrained colours. 4:3 aspect ratio. No text, no
  > watermarks.

## Photo 2 — In the driver's hands (driver app / ePOD)
- **File:** `public/images/wizlane/wizlane-driver.jpg`
- **Ratio:** 4/3
- **Placement:** "On the road — the whole job, in the driver's pocket".
- **ChatGPT prompt:**
  > A photorealistic candid photograph of a Kenyan truck driver in a hi-vis
  > safety vest standing at the back of his truck, using a smartphone to capture
  > a delivery — looking down at the phone, pallets and crates visible behind him
  > in the cargo area. Bright natural daylight, authentic and mid-task, not posed.
  > Documentary editorial style. The phone screen is angled away or indistinct —
  > no app interface visible. No visible brand logos. 4:3 aspect ratio. No text,
  > no watermarks.

## Photo 3 — Reviewing the numbers (reporting & analytics)
- **File:** `public/images/wizlane/wizlane-reporting.jpg`
- **Ratio:** 4/3
- **Placement:** "Reporting & analytics — run the fleet on numbers".
- **ChatGPT prompt:**
  > A photorealistic photograph of a fleet or operations manager in a bright
  > Nairobi office reviewing a dashboard on a large desktop monitor, leaning in
  > and pointing at a figure on screen with a pen. Warm natural daylight, senior
  > and calm, an authentically East-African workplace. The on-screen content is
  > generic, slightly out-of-focus charts and graphs — no specific software or
  > product interface. No brand logos. 4:3 aspect ratio. No text, no watermarks.

---

## The WizLane logo mark (please supply — don't generate)
- **File:** `public/brand/wizlane-logo.png` — a transparent-background, light-ground
  (true-colour) mark, sized like `public/brand/wizflow-logo.png`. An SVG is even
  better if you have it.
- **Source:** WizLane already has a brand mark (the app icon is a truck silhouette
  on a blue ground) — a clean, transparent version of that mark is ideal.
- **Where it plugs in (two one-line edits once the file exists):**
  1. Hero: uncomment the `<img src="/brand/wizlane-logo.png" …>` line in
     `src/pages/business-applications/wizlane.astro`.
  2. Menu: add `logo: '/brand/wizlane-logo.png'` to the WizLane entry in
     `src/data/navigation.ts`.
- Without it, the page and menu still render cleanly — the name carries as text —
  so the logo is polish, not a blocker.

---

### Summary — what to generate / supply
| # | Asset | How |
|---|-------|-----|
| 1 | `wizlane-corridor.jpg` | ChatGPT (prompt above) |
| 2 | `wizlane-driver.jpg` | ChatGPT (prompt above) |
| 3 | `wizlane-reporting.jpg` | ChatGPT (prompt above) |
| 4 | `wizlane-logo.png` | Supply the existing WizLane brand mark |
