# Sage Business Cloud — image generation prompts

Three images for `/erp/sage-business-cloud`, replacing the `<ImageSlot>`
placeholders on that page.

**These must match the WizCRM and TeamKazi sets.** Same photographer, same
grade, same week. See `docs/image-prompts.md` and
`docs/teamkazi-image-prompts.md` — the art direction below is deliberately
identical, because three product pages shot three different ways reads as
three different companies.

---

## Art direction — apply to all three

| | |
|---|---|
| **Style** | Documentary editorial photography. A business magazine feature, not a stock library. |
| **Camera** | 35mm lens, f/2.8, shot at eye level. Natural available light only. |
| **Light** | Overcast midday or the hour after sunrise. Soft, directional, never flat. |
| **Grade** | Slightly desaturated, warm highlights, deep neutral shadows. Muted navy and warm ochre sit naturally in frame — that is the WIZAG palette. |
| **Mood** | Competent and unglamorous. Work being done, not work being performed. |

### The rules that matter most here

**1. No identifiable faces.** Over the shoulder, from behind, in profile, at
distance, or turned away. A synthetic face is the most reliable tell that an
image is generated.

**2. No readable screens, and no accounting UI.** This is a page about
accounting software. A generated screenshot of a fake ledger will be spotted
instantly by the exact buyer we want — a finance manager who looks at the
real thing every day. Screens stay dim, angled away, or out of focus.

**3. No tax-authority branding of any kind.** No KRA, no SARS, no logos, no
official-looking letterheads or stamps. Generated documents that imitate a
revenue authority are a genuine problem, not a stylistic one. Paperwork in
frame must be plainly generic.

**4. The businesses are small and Kenyan.** A hardware distributor, a
wholesaler, a light manufacturer, an accounting practice. Not a corporate
tower, not a startup loft.

---

## Image 1 — Reporting

**Ratio:** 4:3 · **Filename:** `sage-reporting.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft morning daylight
> from a window. A business owner sits at a plain desk in a small Nairobi
> office, one hand on a printed report, an open laptop beside it. Shot from
> behind and slightly to the side — the back of the head and one shoulder
> visible, the face not. On the desk: a mug, a pocket calculator, a stack of
> manila folders, a spike file. The room is modest and lived-in: painted wall,
> a wall calendar, a window with soft light and greenery outside. The laptop
> screen is dim and indistinct. Muted palette, warm window light against cool
> interior shadow. Negative space upper right.
>
> Avoid: visible faces, readable screen content, spreadsheets or dashboards
> on screen, charts or graphs legible on paper, corporate boardrooms, suits
> and ties, glass towers, stock-photo smiling, glowing interfaces, holograms,
> text, logos, any tax-authority branding.

**Why this shot:** the reports are for one person making a decision on a
Tuesday. Show that person, not the software.

---

## Image 2 — Inventory

**Ratio:** 21:9 (letterbox band) · **Filename:** `sage-inventory.jpg`

> ⚠ This one is a wide band across the section, not a portrait slot. Ask for
> **21:9** or crop a 16:9 frame down — composition needs to survive losing
> the top and bottom, so keep the subject central and give it room either
> side.

> Documentary editorial photograph, 35mm lens, f/2.8, natural light from a
> roller door. Inside a small wholesale storeroom in the Nairobi industrial
> area: metal racking stacked with plain cardboard cartons and sacks, a
> concrete floor, a hand trolley to one side. A stock controller stands
> mid-aisle checking a phone against the shelves, shot from behind at a
> distance so the face is not visible. Plain work shirt. Dust in the light
> from the doorway. Warm ochre and grey tones, deep shadow at the back of the
> aisle, shallow depth of field. Negative space on the left.
>
> Avoid: visible faces, branded packaging or product logos, readable labels,
> pristine automated warehouses, forklifts in motion, high-vis fashion
> shoots, poverty framing, glowing phone screens, text, logos.

**Why this shot:** inventory is the module that decides whether the software
fits. A real storeroom says "we understand your business" better than a
render of a warehouse.

---

## Image 3 — Records and VAT

**Ratio:** 4:3 · **Filename:** `sage-records.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft overhead daylight.
> Close on a desk: an open lever-arch box file of neatly filed receipts and
> slips, a laptop just behind it and slightly out of focus, a pen and a small
> stapler alongside. Shot from above at a slight angle. No face in frame —
> hands and forearms only, or nobody at all. The papers show visible
> structure and columns but no legible words, and carry no letterhead,
> stamp, crest or logo of any kind. Plain wooden desk, neutral tones, soft
> shadows.
>
> Avoid: visible faces, legible text or figures on any document, letterheads,
> official stamps or crests, any revenue-authority branding (KRA, SARS or
> otherwise), currency notes, calculators as hero props, messy-desk clichés,
> readable screens, text, logos.

**Why this shot:** "audit-ready" is an abstraction. A box file that is
actually in order is what it looks like.

---

## Generating and checking

**Ask for 4:3 explicitly** — the layout is sized for it.

**Generate each image on its own, not four in one grid.** A single 1536px
image gives roughly double the usable resolution of one quadrant of a 2×2,
and needs no cropping. The WizCRM and TeamKazi sets came from grids and are
slightly soft on high-DPI screens as a result.

**Check every output before use:**

- Hands. Count fingers. Image 3 is mostly hands.
- Any incidental text. Paragraph and column *shapes* are fine; readable words
  are not.
- **Anything resembling an official document, stamp or authority logo.**
  Regenerate rather than crop it out.
- Faces. If one crept into frame, regenerate.
- Screens. If any screen shows a plausible accounting UI, regenerate.

**Do not add WIZAG, Sage or client branding** to a generated image. In
particular, do not generate a Sage logo — the real one must come from Sage's
partner pack.

---

## Dropping them in

Save to `public/images/sage/`, then in
`src/pages/erp/sage-business-cloud.astro` replace each block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/sage/sage-reporting.jpg"
  alt="A business owner at a desk reviewing a printed report beside an open laptop."
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
