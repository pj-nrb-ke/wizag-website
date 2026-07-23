# WizERP — image generation prompts

Two images for `/erp/wizerp`.

**This page is deliberately diagram-heavy.** The hero dashboard, the module
map and the quote-to-cash flow do the persuading; the photographs are there
to break the run of panels and put people in the room. Two is the right
number — more would dilute the technical credibility the diagrams build.

Same art direction as the Sage 200 and AscendBooks sets. Those worked; this
is written in the same shape so all four ERP pages read as one company.

---

## Art direction — apply to both

| | |
|---|---|
| **Style** | Corporate editorial photography. Annual-report quality. |
| **Camera** | 50mm lens, f/2.5, eye level. |
| **Light** | Large windows, soft daylight, bright and clean. |
| **Grade** | Neutral and clean with warm skin tones. |
| **Setting** | A real Nairobi office — a meeting room and a working floor. Not a glass tower, not a co-working loft. |
| **Mood** | Competent people mid-task. Considered, not celebratory. |

**People:** a mix of Black African and South Asian professionals, men and
women. Specify **mid-30s to mid-50s** and **ordinary professional builds and
faces, not fashion models** — generators default to twenty-somethings with
catalogue symmetry, and both read wrong for an ERP buyer.

**Expressions:** listening, considering, one person mid-sentence. **No posed
smiles at camera**, no laughing at a laptop, no folded arms in a row.

---

## Image 1 — Scoping the requirements

**Ratio:** 4:3 · **Filename:** `wizerp-scoping.jpg`

Sits beside the Kenyan-compliance section, which says statutory setup is
scoped with you rather than assumed.

> Corporate editorial photograph, 50mm lens, f/2.5, soft daylight from a
> large window. Two professionals seated across the corner of a boardroom
> table in a Nairobi office, working through a printed requirements document
> together. A Black African man in his fifties in an open-collar shirt is
> turning a page and pointing at a line item; a South Asian woman in her
> forties in a tailored jacket is following along, pen resting on a notepad.
> Ordinary professional builds and faces, not fashion models. Natural,
> attentive expressions — a working conversation, no smiling at camera. On
> the table: the printed document showing ruled columns and paragraph
> structure but no legible words, a notepad, a closed laptop, two coffee
> cups. Plain wall behind, window with soft daylight and green foliage
> outside. Clean neutral grade, warm skin tones, shallow depth of field.
> Negative space upper right.
>
> Avoid: posed smiles at camera, handshakes, thumbs up, pointing at the
> viewer, everyone in identical dark suits, glass skyscrapers, readable
> screen content, spreadsheets or dashboards legible on screen, legible
> figures on paper, letterheads, official stamps or crests, any
> revenue-authority branding, logos on walls, laptops, mugs or notebooks,
> motivational posters or wall slogans, plastic stock-photo lighting,
> over-smoothed skin, extra fingers.

---

## Image 2 — The implementation team

**Ratio:** 21:9 (wide letterbox band) · **Filename:** `wizerp-team.jpg`

⚠ **This one is a wide band across the section, not a portrait slot.** Ask
for **21:9**, or generate 16:9 and crop — composition must survive losing the
top and bottom, so keep the group central with room either side.

> Corporate editorial photograph, 50mm lens, f/2.5, soft daylight from
> windows along one side. Four colleagues of a software implementation team
> gathered around a desk in a Nairobi office, mid-discussion over an open
> laptop and a large printed process flow diagram spread beside it. One is
> standing and gesturing at the printed diagram; the others are seated and
> following. A mix of Black African and South Asian men and women, mid-30s to
> mid-50s, ordinary professional builds. Smart business dress — open-collar
> shirts, a blouse, one jacket, no ties. Natural working expressions, nobody
> looking at camera. The desk carries notebooks, a couple of mugs, pens. Plain
> office behind with soft daylight. Clean neutral grade, warm skin tones,
> wide composition with generous space either side of the group.
>
> Avoid: posed group shots, smiling at camera, handshakes, high fives,
> celebration poses, everyone in identical dark suits, open-plan startup
> clichés (exposed brick, neon, beanbags), readable screen content, legible
> text on the printed diagram, logos or branding on walls, laptops, mugs,
> lanyards or notebooks, wall banners or pull-up stands of any kind,
> over-smoothed skin, extra fingers.

**Why this shot:** the section's argument is that the licence is free and the
people are the product. This is the only place on the page where those people
appear, so it has to look like competent delivery rather than a team photo.

---

## Check every background surface

One of the Sage 200 images had to be cropped because a background banner read
**"Make an impact that matters"** — Deloitte's actual global tagline, and they
have a large Nairobi practice.

Generators reproduce real corporate slogans and near-miss logos from training
data, and they place them exactly where a real office would: wall banners,
pull-up stands, glass partitions, laptop lids, mugs, lanyards, monitor bezels.

**Image 2 is the higher risk**, because a working-floor scene invites exactly
that kind of background dressing. Check it carefully.

---

## Checking before use

- **Hands.** Count fingers on everyone, including anyone at the edge of frame.
- **Eyes.** Same direction, same size, catchlights on the same side.
- **Teeth**, if visible — generators fuse and multiply them.
- **Ears, glasses arms, collars, buttons.**
- **Every background surface**, per the note above.
- **Any incidental text.** Column and paragraph *shapes* are fine; readable
  words are not.
- **Screens.** If any screen shows a plausible ERP or accounting interface,
  regenerate. This page's readers use those interfaces daily.

If a frame is right in every way except one hand, regenerate rather than
retouch.

**Generate each image on its own, not as a 2×2 grid.** A single 1536px image
gives roughly double the usable resolution of one panel and needs no cropping.

---

## Dropping them in

Save to `public/images/wizerp/`, then in `src/pages/erp/wizerp.astro` replace
each block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/wizerp/wizerp-scoping.jpg"
  alt="Two colleagues working through a printed requirements document across a boardroom table."
  width="1160"
  height="870"
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
