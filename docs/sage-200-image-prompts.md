# Sage 200 — image generation prompts

Two images for `/erp/sage-200`, replacing the `<ImageSlot>` placeholders on
that page.

**These must match the WizCRM, TeamKazi and Sage Business Cloud sets.** Same
photographer, same grade, same week. See `docs/image-prompts.md`,
`docs/teamkazi-image-prompts.md` and `docs/sage-business-cloud-image-prompts.md`
— the art direction below is deliberately identical.

---

## Art direction — apply to both

| | |
|---|---|
| **Style** | Documentary editorial photography. A business magazine feature, not a stock library. |
| **Camera** | 35mm lens, f/2.8, shot at eye level. Natural available light only. |
| **Light** | Overcast midday or the hour after sunrise. Soft, directional, never flat. |
| **Grade** | Slightly desaturated, warm highlights, deep neutral shadows. Muted navy and warm ochre sit naturally in frame — that is the WIZAG palette. |
| **Mood** | Competent and unglamorous. Work being done, not work being performed. |

### The rules that matter most here

**1. No identifiable faces.** Over the shoulder, from behind, in profile, at
distance, or turned away.

**2. No readable screens, and no accounting UI.** This page sells an ERP to
people who look at one all day. A generated ledger screen will be spotted
instantly.

**3. No tax-authority branding of any kind.** No KRA, no SARS, no logos,
crests, stamps or official letterheads. Paperwork in frame must be plainly
generic. This applies with particular force to image 2, which is *about*
compliance.

**4. Mid-sized Kenyan businesses.** A distributor, a light manufacturer, a
contractor, a wholesaler. Sage 200 suits roughly 5 to 200 employees — so
neither a one-person office nor a corporate tower.

---

## Image 1 — One team, one set of numbers

**Ratio:** 4:3 · **Filename:** `sage-200-team.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft daylight from a
> window to one side. Two or three colleagues gathered at a shared desk in a
> modest Nairobi office, one holding a printed ledger report and pointing at
> a line on it while another leans in. Shot from behind and slightly to the
> side — no face is visible or identifiable. Plain shirts, no jackets or
> ties. On the desk: an open laptop angled away, a mug, a stack of manila
> folders, a desk calendar. Plain painted wall behind, a window with soft
> light and greenery outside. Muted palette, warm window light against cool
> interior shadow. Negative space upper right.
>
> Avoid: visible faces, readable screen content, spreadsheets or dashboards
> on screen, legible figures on paper, corporate boardrooms, suits and ties,
> handshakes, glass towers, stock-photo smiling, whiteboards covered in
> charts, glowing interfaces, holograms, text, logos.

**Why this shot:** an ERP is bought by a team and argued over by a team. The
"one set of numbers" claim lands better shown than stated — two people
looking at the *same* piece of paper is the whole argument.

---

## Image 2 — Compliance, handled

**Ratio:** 4:3 · **Filename:** `sage-200-statutory.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft overhead daylight.
> Close on a plain wooden desk: a neat stack of statutory paperwork in an
> unmarked buff folder, squared up beside a closed laptop, with a pen and a
> pair of reading glasses alongside. Shot from above at a slight angle.
> Nobody in frame, or hands and forearms only. The papers show ruled columns
> and paragraph structure but no legible words, and carry no letterhead,
> crest, stamp, watermark or logo of any kind. Neutral tones, soft shadows,
> quiet and orderly.
>
> Avoid: visible faces, legible text or figures, letterheads, official
> stamps, crests or seals, any revenue-authority branding (KRA, SARS or
> otherwise), currency notes, calculators as hero props, messy-desk clichés,
> readable screens, text, logos.

**Why this shot:** the section says plainly that Kenyan statutory setup is
scoped rather than assumed. The image should read as *in order* — calm,
squared-up, unremarkable — rather than as bureaucracy or anxiety.

---

## Generating and checking

**Ask for 4:3 explicitly** — the layout is sized for it.

**Generate each image on its own, not as a grid.** A single 1536px image
gives roughly double the usable resolution of one panel of a 2×2 and needs no
cropping. The earlier sets came from grids and one of them had to be
width-capped on the page to avoid visible softening.

**Check every output before use:**

- Hands. Count fingers.
- Any incidental text. Column and paragraph *shapes* are fine; readable words
  are not.
- **Anything resembling an official document, stamp, seal or authority logo.**
  Regenerate rather than crop it out.
- Faces. If one crept into frame, regenerate.
- Screens. If any screen shows a plausible accounting or ERP interface,
  regenerate.

**Do not add WIZAG, Sage or client branding.** In particular, do not generate
a Sage logo — the real partner artwork must come from Sage.

---

## Dropping them in

Save to `public/images/sage-200/`, then in `src/pages/erp/sage-200.astro`
replace each block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/sage-200/sage-200-team.jpg"
  alt="Two colleagues at a shared desk reviewing a printed ledger report together."
  width="760"
  height="570"
  loading="lazy"
  decoding="async"
  class="w-full rounded-[var(--radius-md)] object-cover"
/>
```

Write a real `alt` for each — describe what is in the frame, not the
marketing intent. Then remove the now-unused `ImageSlot` import.

Confirm nothing is left behind with:

```
Get-ChildItem -Path src -Recurse -Include *.astro | Select-String -Pattern "<ImageSlot"
```
