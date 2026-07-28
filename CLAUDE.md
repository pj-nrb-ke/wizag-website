# WIZAG Website — Project Guide & Handover

> This file is auto-loaded by Claude Code. It is the primary onboarding doc for
> continuing development, written as a handover so a fresh session (e.g. on a
> different machine under the same account) understands the project without the
> prior chat history. It lives in the repo so it travels with the code via git —
> the per-machine `~/.claude/.../memory/` notes do **not** sync between laptops.
>
> Last updated: 2026-07-28.

---

## 1. What this is

The corporate website for **Wise & Agile Solutions Ltd (WIZAG)** — a Nairobi-based
**enterprise transformation and technology services** company, operating since 2013.

Positioning is deliberate and load-bearing: WIZAG is a **services** firm, **not a
software vendor, ERP reseller, or AI startup**. The whole site is written to that
stance ("we start with the operating problem, not the software"). Tagline:
**Connected Intelligence**. Brand: navy + restrained orange, editorial, senior,
generous whitespace ("Concept 3").

## 2. Stack & commands

- **Astro 5** (`^5.13.0`) + **TypeScript**, `output: 'static'`. `site: 'https://wizag.biz'` in `astro.config.mjs`.
- **Tailwind CSS v4** (via `@tailwindcss/vite`) + **CSS custom properties** as design tokens. No CDN; fonts self-hosted & subset.
- **Zero client-side framework.** The only JS shipped is a couple of tiny inline `<script>`s (reveal observer, back-to-top, nav). Keep it that way.
- Content is **typed TS in `src/data/`** (phase-1). Hosted Sanity at `studio.wizag.biz` is a *future* phase — not wired yet.

```bash
npm install
npm run dev        # astro dev → http://localhost:4321
npm run build      # astro build → ./dist  (static)
npm run preview    # serve ./dist
npm run check      # astro check (type/diagnostics)
```

The Browser-preview dev-server config is `.claude/launch.json` → name **`wizag-dev`**, port **4321**. Use the preview tools to launch/verify; never run the dev server via a raw shell.

## 3. How the site is structured

```
src/
  pages/          Astro routes. Data-driven: getStaticPaths() reads from src/data.
  components/
    home/         Homepage sections (Hero, CoreServices, WhyWizag, …).
    layout/       BaseLayout is the shell; Section/Container/Header/Footer/PageHero.
    navigation/   DesktopNav, MobileNav, NavDropdown (all read src/data/navigation.ts).
    diagrams/     Self-contained animated SVG/CSS diagrams (see §5).
    ui/           Button, Icon, SectionHeading, ImageSlot, LogoSprite, BackToTop…
  data/           Typed content — ONE source of truth per section. Edit content here.
  styles/         global.css (base+motion), tokens.css (design tokens), fonts.css.
  layouts/        BaseLayout.astro (<head>, chrome, reveal observer).
docs/             *-image-prompts.md (paste-ready ChatGPT prompts), photography-direction.md.
public/           Static assets, incl. images referenced by ImageSlot / data files.
```

**Routing conventions:**
- Content lives in `src/data/*.ts` and pages render it. To change copy, edit the data file, not the template.
- **Named routes beat dynamic ones.** e.g. `about/partners.astro` is a real page, so `about/[slug].astro`'s `getStaticPaths()` must *exclude* `/about/partners` (and `/about`) or the build collides. Same pattern for `business-applications`, `erp`, `industries`, `services`.
- Removing an entry from `src/data/navigation.ts` **also removes its generated page** where `[slug].astro` derives paths from that array. Re-add to bring it back.
- Thin/unfinished pages pass `noindex` to `BaseLayout` and carry `stub: true` in navigation.

## 4. Design system (`src/styles/tokens.css` is the single source of truth)

Tailwind v4 emits every token as **both** a CSS var and a utility, so `var(--color-navy-700)` ≡ `text-navy-700`.

- **Navy** `--color-navy-700 #1b306c` (brand, from the logo). Tints/shades for depth.
- **Orange** `--color-orange-500 #f79d07` (brand). **⚠ CONTRAST RULE — non-negotiable:**
  - white on orange-500 = 2.15:1 ✗ — **this is why buttons are navy, never orange.**
  - orange-500 on navy = 5.8:1 ✓ (may carry text on navy bands).
  - `--color-orange-700 #b85c00` is the **only** orange that may carry text on white (4.6:1).
  - On light grounds, brand orange is **for graphics only** (rules, icons, diagram strokes, logo).
- **Type:** serif (`Source Serif 4`) for headings only; sans (`IBM Plex Sans`) for everything else. Fluid scale `--text-2xs … --text-6xl` (clamped 375↔1440px). Body 16px. Don't inflate the display end — the scale was deliberately brought down.
- **Radius:** three only (`--radius-sm/md/lg`). **Shadow:** three only (`--shadow-card/panel/header`). Don't invent more.
- **`Section` tones:** `paper` (white), `warm` (`#f7f6f3`), `deep` (navy). On `deep`, wrap in `.on-deep` so focus rings flip to white.

## 5. ⭐ Motion & animation — READ THIS

Two distinct systems. Both are **opt-in, progressively enhanced, and fully collapse
to a finished state under `prefers-reduced-motion: reduce`.** Motion is meaning,
never decoration (brief §14).

### 5a. Scroll reveal — the "scrolling columns" that fade/slide in on scroll

This is the effect you see on nearly every page: section headings, cards, and the
**columns of a grid** rise + fade in as they scroll into view, often **staggered**
left-to-right. It is driven by **two attributes** and a **single shared observer**.

**The moving parts:**
1. **`src/styles/global.css` (MOTION section):**
   - `[data-reveal] { opacity: 1 }` — the **default is visible**. No-JS and reduced-motion visitors always see full content; the hidden start state is only ever *added*, never assumed.
   - Only when `html.js` **and** `@media (prefers-reduced-motion: no-preference)`:
     `[data-reveal]` starts at `opacity:0; translateY(12px)` and transitions `opacity, transform` over `--duration-slow` (350ms) `--ease-out`.
   - `[data-reveal].is-revealed` → `opacity:1; transform:none`.
2. **`src/layouts/BaseLayout.astro`:**
   - An **inline `<head>` script** adds `.js` to `<html>` *before first paint*. This is the anti-flash guard: the hidden start state can't apply unless JS is confirmed running, so content never gets stuck invisible if a script fails.
   - A **module `<script>` at end of `<body>`** runs one `IntersectionObserver`
     (`rootMargin: '0px 0px -10% 0px'`, `threshold: 0.1`). On first intersection it
     reads `data-reveal-delay` (ms), `setTimeout`s the `.is-revealed` class, then
     `unobserve`s — **fires once per element**. If motion is unwelcome or
     `IntersectionObserver` is missing, every `[data-reveal]` is revealed immediately.

**The stagger (this is the "columns" cascade):** give each item in a row/grid an
incrementing `data-reveal-delay` in **milliseconds**. Cap it so long lists don't lag.

```astro
<!-- A row of columns that reveal in sequence as it scrolls in -->
<div class="grid gap-8 lg:grid-cols-3">
  {items.map((item, i) => (
    <article data-reveal data-reveal-delay={String(Math.min(i, 3) * 70)}>
      …
    </article>
  ))}
</div>
```

**Usage rules / gotchas:**
- Put `data-reveal` on any element you want to animate in. `SectionHeading.astro`
  forwards any `data-*` prop onto its wrapper, so `<SectionHeading data-reveal … />` works.
- Keep delays small (≈60–100ms steps) and **cap them** (`Math.min(i, 3)`), or the
  last card in a long grid arrives uncomfortably late.
- Never rely on the reveal to *hide* something meaningful — the content must be
  correct and legible in its final (revealed) state, because that is what
  reduced-motion and no-JS users get from the first frame.
- Don't add a competing scroll library. This one system covers the whole site.

### 5b. Diagram animations (`src/components/diagrams/*.astro`)

Each diagram is a **self-contained `.astro` component with a scoped `<style>`**
(e.g. `IndustryFlow`, `IndustryModel`, `ServiceEcosystem`, `PracticeShift`,
`StepFlow`, `ModuleMap`, `CapabilityHub`, `SystemsMesh`, the product demos). Convention:

- **CSS `@keyframes`, gated entirely behind `@media (prefers-reduced-motion: no-preference)`.** Nothing animates for reduced-motion users.
- **The diagram must be complete and readable when static** — every node lit, every
  label resolved. Motion is "staging only." (See the long rationale comment atop
  `IndustryFlow.astro`.)
- Timing is passed in via **inline CSS custom properties** from props
  (`--cycle`, `--stagger`, `--i`, `--n`) so one component animates any number of stages.
- **Accessibility:** a `.sr-only` `<figcaption>` narrates the diagram; decorative
  nodes are `aria-hidden`.
- **Responsive:** typically horizontal spine on desktop / vertical on mobile via
  `@media (min-width: 60rem)` and `grid-template-columns: repeat(var(--n), …)`.

**⚠ Astro scoped-style boundary:** a parent's scoped styles compile to
`.class[data-astro-cid-…]` and **do not reach a child component's markup/SVG**. To
style across the boundary use `:global(...)`, or let the child inherit via `color` /
`currentColor`. This bites when a page tries to colour an imported diagram/icon.

## 6. Content rules & anti-fabrication — CRITICAL, DO NOT VIOLATE

The brief (§3.2 / §8.12) forbids invented content, and several product/name rules
come from the client directly. **Never reintroduce any of the following:**

**Never name these products anywhere on the site:**
- **WizPOS, RestPOS, CloudHR** — removed by client instruction; must not appear.
- **TimeTrax, MobiSales, CrownEHR** — these belong to a **different company**
  (they exist on some `wizag.co.ke` subdomains but are not WIZAG's). Never list or market them.
- **SAP Business One** — an old, unverified partnership claim. It appears nowhere on
  the site and must not be added. **Sage is the only platform partnership stated.**

**Never invent:** client names, logos, testimonials, case studies, headcount,
number of clients/projects, revenue/turnover, certifications, awards, ISO numbers,
Sage partner **tier** (no Gold/Platinum badge until a real asset + permitted wording
arrive), leadership names/titles/bios, or any partnership beyond Sage.

**Specific wording constraints:**
- **WizERP** is WIZAG's own product — never describe it as open-source, free, or zero-licence.
- **No monetary amounts or turnover bands** on Sage 200 (or elsewhere).
- **No telephone number** is published (brief §8.14). Contact is `info@wizag.biz`.
- Use **"founded/since 2013"** (client-confirmed), never a running "N years" count.
  Some public directories say 2003 — that's wrong.

**Verified facts you may use:** legal name *Wise & Agile Solutions Ltd*; **founded
2013**; address **Valley View Office Park, Tower A, 4th Floor, Off Limuru Road,
Parklands, Nairobi**; `info@wizag.biz`; **Sage business partner** (Sage 200 & Sage
Business Cloud); WIZAG's own products: **WizERP, AscendBooks, WizCRM, TeamKazi**
(and **WizSales**, currently a stub). Any Kenyan regulatory facts already in
`src/data/services.ts` were WebSearch-verified with dated re-check notes — re-verify before extending.

## 7. Images & photography

- Real images live in `public/` and are referenced from data files (`file`, `w`, `h`, `alt`).
- Where a photo doesn't exist yet, use **`ImageSlot.astro`** — it renders a
  documented placeholder rather than a broken image, and the matching prompt lives in
  **`docs/*-image-prompts.md`** (paste-ready for ChatGPT image gen). House style is in
  `docs/photography-direction.md`.
- Images are produced externally (ChatGPT), placed via PowerShell `System.Drawing`
  (crop/resize/quality). Keep aspect ratios and never upscale past native resolution.
- **Outstanding:** several industry sector photos, an About office shot, some Sage
  Business Cloud shots, `teamkazi-timesheets` — prompts already written in `docs/`.

## 8. SEO (current conventions & known gaps)

Handled in `BaseLayout.astro`: self-referencing **canonical** (from `Astro.site`),
per-page `title`/`description`, **`noindex`** prop for stubs, **Open Graph** +
`twitter:card`, font preload, theme-color, favicon.

**Known gaps (not yet done):** `sitemap.xml` (no `@astrojs/sitemap` installed),
`robots.txt`, Organization/LocalBusiness **JSON-LD**, and an `og:image`. These are
the agreed pre-launch quick wins.

## 9. Build & verify workflow

Before committing content changes, sanity-check the build:
1. `npm run build` → `./dist`.
2. **Grep `dist/` for banned terms** (WizPOS, RestPOS, CloudHR, TimeTrax, MobiSales,
   CrownEHR, "SAP Business One") — must return nothing.
3. Check internal links resolve and geometry holds at 1440px and 375px.
4. For anything visible in the browser, use the preview tools (launch `wizag-dev`,
   read console/network, screenshot) — verify, don't ask the user to check manually.

## 10. Current status (2026-07-28)

**Built & substantive:** Home (all `components/home/*`), Services (index + 6 practice
pages), WETO, ERP (index + `sage-200`, `sage-business-cloud`, `wizerp`, `ascendbooks`),
Business Applications (index + `wizcrm`, `teamkazi`; `wizsales` stub), Industries
(index + 9 sectors, Manufacturing featured), About (Company Overview + Partners),
Contact, Privacy, Terms, 404.

**Pending:**
- **Leadership** (`/about/leadership`) and **Careers** (`/about/careers`) are
  `noindex` shells — they need **real** people/roles/bios and real openings from the
  client. Do **not** fake them.
- Outstanding images (see §7) and the SEO quick wins (see §8).

**Deployment reality (important):** the new build is **not deployed**. It exists only
on localhost + this git repo. **`wizag.biz` currently serves an OLD, different site**
(a product-vendor page that still lists WizPOS) — so any live audit today reports on
the old site, not this build. A migration to a **new VPS `169.58.11.173`** is in
progress (see §12).

## 11. Environment & gotchas (Windows / PowerShell)

- Dev is on **Windows + PowerShell**. Prefer the dedicated file/search tools; use the
  Browser-preview tools (not raw shells) for the dev server.
- **Git commit messages:** write the message to a file and use `git commit -F <file>`.
  PowerShell here-strings with `git -m "…"` break on parentheses/newlines.
- `git push` prints to stderr, which PowerShell surfaces as a `NativeCommandError`
  even on success — confirm success by the `main -> main` line, not the absence of stderr.
- Commit trailer in use: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
- Remote: `github.com/pj-nrb-ke/wizag-website`, branch `main`.

## 12. Related context (separate from website dev)

- **This machine has file-based memory** at `~/.claude/projects/…/memory/` (index in
  `MEMORY.md`) capturing rebuild decisions, the DNS inventory, and the infra-compromise
  note. It is **machine-local** — it will not be on the other laptop, which is why the
  durable rules above are duplicated here.
- **DNS cleanup is an ongoing, separate workstream** (not part of building pages).
  `wizag.biz` DNS is at Contabo; the zone is a large legacy graveyard (old shared-cPanel
  wildcard, retired self-hosted-mail subdomains, a live Brevo email setup). Mail = Zoho;
  transactional/marketing = Brevo (DKIM `brevo1`/`brevo2` are the live keys). If asked to
  touch DNS, tread carefully and confirm live/third-party services before deleting.
