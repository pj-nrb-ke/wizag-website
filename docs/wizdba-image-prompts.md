# WizDBA — screenshots & logo brief

> **STATUS (2026-08-04): VISUALS DONE — no screenshots needed.** The logo is
> placed (`public/brand/wizdba-logo.png`, from the client's transparent mark).
> The three UI shots are **NOT screenshots**: they are faithful HTML/CSS
> reproductions of the app in `src/components/wizdba/` (`AppWindow`, `AiPanel`,
> `ResultsPanel`) populated with invented demo data. This was a deliberate
> switch — the client's real screenshots carried a real client database name
> ("BMC") and an empty/disconnected state, so reproducing the UI keeps it
> accurate, always populated, and safe to publish. The brief below is kept only
> for reference if real screenshots are ever wanted instead.

## Capture guidance (applies to all three)
- **Save to** `public/images/wizdba/`. Send PNGs; I'll compress + re-encode
  (WebP/JPEG) on placement, same as the other product images.
- **Resolution:** capture at a high DPI / large window — **≥ 1600 px wide** so
  the UI stays crisp when scaled. Don't upscale a small window.
- **No real data or secrets:** use a demo/sample database. Make sure no real
  server names, client data, passwords or **Anthropic API key** are visible on
  screen (mask or use a throwaway key). The site must not leak anything.
- **Theme:** if WizDBA has a light theme, prefer it (it sits better against the
  site's light sections); otherwise the default is fine — just be consistent
  across the three.
- **Clean chrome:** no unrelated desktop, notifications or taskbar in frame —
  crop to the WizDBA window.

---

## Screenshot 1 — the whole app (hero)
- **File:** `public/images/wizdba/wizdba-app.png`
- **Aspect:** ~16/10 landscape (a normal app window).
- **Placement:** hero, top of the page.
- **Show:** the full WizDBA window — left object panel (a connection + some
  tables/views), the SQL editor with a readable query, and a results grid below
  it. This is the "at a glance, here's the product" shot, so make it look busy
  but tidy.

## Screenshot 2 — the AI Query Builder
- **File:** `public/images/wizdba/wizdba-ai.png`
- **Aspect:** ~4/3 (portrait-ish is fine — it sits in a narrower column).
- **Placement:** "AI, powered by Claude" section.
- **Show:** the AI chat window with a plain-English request typed in (e.g.
  *"top 10 customers by revenue this year"*) and the **generated SQL** returned.
  If the glossary is easy to show, even better — otherwise the prompt→SQL
  exchange is the point.

## Screenshot 3 — results & export
- **File:** `public/images/wizdba/wizdba-results.png`
- **Aspect:** ~16/9 landscape.
- **Placement:** "Built for the everyday work" section.
- **Show:** a batch query with **multiple result tabs** (Result 1, Result 2…)
  and the **export menu open** showing Excel / CSV / Markdown. Conveys "run,
  read, export" in one frame.

---

## The WizDBA logo mark (please supply — don't generate)
- **File:** `public/brand/wizdba-logo.png` — transparent background, light-ground
  (true-colour) mark, sized like the other product marks. An **SVG is ideal**.
- **Where it plugs in (two one-line edits once the file exists):**
  1. Hero: uncomment the `<img src="/brand/wizdba-logo.png" …>` line in
     `src/pages/business-applications/wizdba.astro`.
  2. Menu: add `logo: '/brand/wizdba-logo.png'` to the WizDBA entry in
     `src/data/navigation.ts`.
- Without it the page and menu still render cleanly — the name carries as text.

---

### Summary — what to send
| # | Asset | File | How |
|---|-------|------|-----|
| 1 | Whole app (hero) | `wizdba-app.png` | Screenshot |
| 2 | AI Query Builder | `wizdba-ai.png` | Screenshot |
| 3 | Results & export | `wizdba-results.png` | Screenshot |
| 4 | WizDBA logo mark | `wizdba-logo.png` | Supply existing mark (SVG best) |

*Also still needed for launch (e-commerce phase): the **price**, the **free-trial
terms** (length / any limits), the **download URL**, and the **payment gateway**
details.*
