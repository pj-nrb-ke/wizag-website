# Sage 200 — image generation prompts

Two images for `/erp/sage-200`, replacing the `<ImageSlot>` placeholders on
that page.

> **This page uses a different art direction from the product pages.**
> WizCRM, TeamKazi and Sage Business Cloud are shot documentary-style with no
> faces — reps in the field, storerooms, desks. Sage 200 is a boardroom-level
> purchase, so it gets boardroom imagery: real people, smartly dressed, in a
> corporate setting. See the note at the end about bringing the other pages
> into line.

---

## Art direction — apply to both

| | |
|---|---|
| **Style** | Corporate editorial photography. Annual-report quality, not stock-library gloss. |
| **Camera** | 50mm lens, f/2.5, eye level, shot from the end of the table. |
| **Light** | Large windows, soft daylight, gentle fill. Bright but not flat. |
| **Grade** | Clean and neutral with warm skin tones. Muted navy and warm ochre sit naturally in frame — that is the WIZAG palette. |
| **Setting** | A well-appointed but real Nairobi boardroom. Timber table, upholstered chairs, a wall screen, a window with city greenery. Not a glass tower, not a co-working loft. |
| **Mood** | Senior people doing serious work. Engaged, composed, mid-discussion. |

### The people

**A mix of Black African and South Asian professionals, men and women** —
which is what a Nairobi boardroom actually looks like, not a diversity
quota applied to a Western stock photo.

Specify these every time, because generators default badly on all four:

- **Age range mid-30s to mid-50s.** Left alone, you get a room of
  twenty-five-year-olds, which reads as a startup rather than a business with
  a general ledger worth migrating.
- **Realistic builds and faces.** Ask explicitly for "ordinary professional
  people, not fashion models". Generators produce symmetrical, catalogue-
  perfect faces by default and the effect is uncanny at scale.
- **Smart business dress, Nairobi weight.** Open-collar shirts, blouses,
  tailored jackets, a few without jackets. Not three-piece suits, not silicon
  valley hoodies.
- **Natural expressions.** Listening, considering, one person mid-sentence.
  **No posed smiles at camera**, no laughing at a laptop, no arms folded in a
  row. The single most recognisable stock cliché is a group beaming at a
  screen nobody is reading.

### Three rules that still apply

**1. No readable screens.** The buyer for this page looks at an ERP all day.
A plausible-but-fake ledger or dashboard is the fastest way to lose them.
Screens stay dim, angled away, or softly out of focus.

**2. No branding of any kind.** No logos on walls, laptops, mugs, lanyards or
notebooks. No tax-authority marks. Generators produce convincing near-miss
logos that look like a licensing problem.

**3. No real people.** Do not name or describe an actual person, public
figure or client. These are fictional professionals.

---

## Image 1 — One team, one set of numbers

**Ratio:** 4:3 · **Filename:** `sage-200-team.jpg`

> Corporate editorial photograph, 50mm lens, f/2.5, soft daylight from a
> large window to the left. Four professionals seated around one end of a
> timber boardroom table in a Nairobi office, mid-discussion over a printed
> financial report laid open between them. A mix of Black African and South
> Asian men and women, aged mid-30s to mid-50s, ordinary professional
> builds and faces rather than fashion models. Smart business dress:
> open-collar shirts, a blouse, two tailored jackets. One person is speaking
> and gesturing lightly at a figure on the page; the others are listening,
> one making a note. Natural, unposed expressions — engaged and serious, no
> smiling at camera. On the table: the open report, two notebooks, a laptop
> angled away with a dim screen, water glasses, a pen. Behind them a plain
> wall, a window with soft daylight and green foliage outside. Clean neutral
> grade, warm skin tones, shallow depth of field falling off behind the
> group. Negative space upper right.
>
> Avoid: posed smiles at camera, laughing at a laptop, arms folded in a row,
> thumbs up, handshakes, everyone in identical suits, glass skyscrapers,
> readable screen content, charts or dashboards on screen, legible figures on
> paper, logos or branding of any kind on walls, laptops, mugs or lanyards,
> plastic stock-photo lighting, over-smoothed skin, extra fingers.

**Why this shot:** an ERP is bought by a committee and argued over by a
committee. The "one set of numbers" claim lands harder when four people are
visibly looking at the *same* piece of paper.

---

## Image 2 — Compliance, handled

**Ratio:** 4:3 · **Filename:** `sage-200-statutory.jpg`

> Corporate editorial photograph, 50mm lens, f/2.5, soft daylight. Two
> professionals at the corner of a boardroom table in a Nairobi office — a
> Black African woman in her forties in a tailored jacket, and a South Asian
> man in his fifties in an open-collar shirt — reviewing a bound statutory
> document together. She is turning a page and explaining something; he is
> following along with a pen resting on a notepad. Composed, attentive, an
> ordinary working conversation rather than a presentation. Natural
> expressions, no smiling at camera. On the table: the bound document with
> ruled columns but no legible words, a notepad, a closed laptop, a glass of
> water. Plain wall behind, window light from the side. Clean neutral grade,
> warm skin tones, calm and orderly. Negative space on the left.
>
> Avoid: posed smiles, handshakes, pointing at camera, stacks of currency,
> calculators as hero props, legible text or figures on any document,
> letterheads, official stamps, seals or crests, any revenue-authority
> branding (KRA, SARS or otherwise), readable screens, logos on anything,
> over-smoothed skin, extra fingers.

**Why this shot:** the section says plainly that Kenyan statutory setup is
scoped rather than assumed. Two competent people working through a document
together *is* that promise — an advisor and a client, not a filing cabinet.

---

## Making the two read as one shoot

They should look like the same afternoon in the same room. In practice:

- **Generate image 1 first**, pick the frame you like, then describe that
  room in image 2's prompt — same table, same wall, same window position.
- **Keep the light direction consistent.** Both prompts say daylight from one
  side; don't let one come out backlit.
- **Reuse two of the four people** from image 1 in image 2 if the generator
  supports references. If it doesn't, don't force it — different people in
  the same room is fine, the same people rendered slightly differently is not.

---

## Generating and checking

**Ask for 4:3 explicitly.** Generate **each image on its own, not as a grid** —
a single 1536px image gives roughly double the usable resolution of one panel
of a 2×2 and needs no cropping. The earlier sets came from grids and one had
to be width-capped on the page to avoid visible softening.

**Generate several and pick for consistency**, not for whichever single frame
is prettiest.

Faces raise the stakes on checking. Work through this every time:

- **Hands.** Count fingers, on everyone, including the ones at the edge of
  frame. Still the most common failure.
- **Eyes.** Both looking the same direction, both the same size, catchlights
  on the same side.
- **Teeth**, if any are visible. Generators fuse and multiply them.
- **Ears, glasses arms, collars, buttons** — the small symmetrical things
  that go subtly wrong.
- **Background people.** If anyone is visible through a doorway or window,
  check they are not warped. Crop them out rather than accept a smeared face.
- **Any incidental text.** Column and paragraph *shapes* are fine; readable
  words are not.
- **Anything resembling a logo, stamp, seal or authority mark.** Regenerate
  rather than crop.
- **Screens.** If any shows a plausible accounting or ERP interface,
  regenerate.

If a frame is right in every way except one hand, regenerate rather than
retouch. A six-fingered executive is the kind of detail that gets screenshotted.

---

## A note on the other pages

WizCRM, TeamKazi and Sage Business Cloud currently use the documentary,
no-faces direction. Sage 200 now uses this one. Sage 200 and Sage Business
Cloud sit next to each other in the same menu, so the difference will be
visible.

That is worth a deliberate decision rather than drift:

- **Keep both**, treating boardroom imagery as the register for ERP and
  documentary for the product pages. Defensible — the audiences genuinely
  differ — but it needs to look intentional, which means both sets staying
  internally consistent.
- **Move everything to this direction.** Warmer and more human throughout,
  and the ERP pages set the tone. Means regenerating eight images.

Say which and the other prompt files get rewritten to match.

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
  alt="Four colleagues around a boardroom table reviewing a printed financial report together."
  width="1200"
  height="900"
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
