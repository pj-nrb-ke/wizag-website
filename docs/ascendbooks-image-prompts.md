# AscendBooks — image generation prompts

One image for `/erp/ascendbooks`, replacing the `<ImageSlot>` placeholder in
the "What your firm gains" section.

**Who this page sells to matters more than usual.** AscendBooks is not sold
to businesses — it is sold to **accounting practices**, who then run their own
SME clients on it. The image has to read as *two principals deciding to take
something on*, not as staff using software. Get that wrong and the page
looks like it is aimed at the wrong reader.

---

## Art direction

Same register as the Sage 200 set — corporate, real people, boardroom. The
three images generated for that page landed well; this prompt is written in
the same shape deliberately, so the two pages sit together.

| | |
|---|---|
| **Style** | Corporate editorial photography. Annual-report quality. |
| **Camera** | 50mm lens, f/2.5, eye level. |
| **Light** | Large windows, soft daylight, bright and clean. |
| **Grade** | Neutral and clean with warm skin tones. |
| **Setting** | A well-appointed Nairobi meeting room or partner's office. |
| **Mood** | Two senior people weighing a decision. Considered, not celebratory. |

**People:** a mix of Black African and South Asian professionals, men and
women. Ask for **mid-30s to mid-50s** and **ordinary professional builds and
faces, not fashion models** — generators default to twenty-somethings with
catalogue symmetry, and both read wrong for practice owners.

---

## The image — Two principals, one decision

**Ratio:** 4:3 · **Filename:** `ascendbooks-partners.jpg`

> Corporate editorial photograph, 50mm lens, f/2.5, soft daylight from a
> large window. Two senior professionals — partners in an accounting practice
> — seated at the corner of a meeting table in a Nairobi office, in
> conversation. One, a Black African woman in her forties in a tailored
> jacket, is holding a tablet angled between them and making a point; the
> other, a South Asian man in his fifties in an open-collar shirt, is
> listening and considering, one hand resting near a notepad. Ordinary
> professional builds and faces, not fashion models. Natural, engaged
> expressions — this is a decision being weighed, not a deal being
> celebrated. No smiling at camera. On the table: the tablet with a dim
> indistinct screen, a notepad with a pen, two coffee cups, a closed laptop.
> Behind them a plain wall and a window with soft daylight and green foliage
> outside. Clean neutral grade, warm skin tones, shallow depth of field.
> Negative space upper right.
>
> Avoid: posed smiles at camera, handshakes, thumbs up, laughing at a screen,
> pointing at the viewer, arms folded in a row, everyone in identical dark
> suits, glass skyscrapers, open-plan startup offices, readable screen
> content, dashboards or spreadsheets legible on screen, legible figures on
> paper, logos or branding of any kind on walls, laptops, mugs, notebooks or
> lanyards, motivational slogans or posters on walls, plastic stock-photo
> lighting, over-smoothed skin, extra fingers.

**Why this shot:** everything else on the page is a diagram or a list. The
one photograph should carry the thing diagrams cannot — that this is a
commercial decision made by two people who own the firm.

---

## What went wrong last time, and how to avoid it

One of the three Sage 200 images had to be cropped before use: a background
banner read **"Make an impact that matters"**, which is Deloitte's actual
global tagline. Deloitte has a large Nairobi practice, so that would have
been recognised immediately.

Generators reproduce real corporate slogans and near-miss logos from their
training data, and they place them exactly where a real office would — on
wall banners, glass partitions, lanyards and monitor bezels.

**So: check every surface in the background before accepting a frame.**
Wall art, banners, pull-up stands, glass panels, laptop lids, mugs, notebooks,
badges. The prompt above bans them, but bans are not guarantees.

---

## Checking before use

- **Hands.** Count fingers on both people.
- **Eyes.** Same direction, same size, catchlights on the same side.
- **Ears, glasses arms, collars, buttons** — the small symmetrical things.
- **Every background surface**, per the note above.
- **Any incidental text.** Paragraph and column *shapes* are fine; readable
  words are not.
- **Screens.** If the tablet shows a plausible accounting interface,
  regenerate — this page's readers use those interfaces daily.

If a frame is right in every way except one hand, regenerate rather than
retouch.

**Generate it on its own, not as part of a 2×2 grid.** A single 1536px image
gives roughly double the usable resolution of one panel, and needs no
cropping.

---

## Dropping it in

Save to `public/images/ascendbooks/`, then in
`src/pages/erp/ascendbooks.astro` replace the block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/ascendbooks/ascendbooks-partners.jpg"
  alt="Two partners of an accounting practice in conversation at a meeting table, one holding a tablet between them."
  width="1160"
  height="870"
  loading="lazy"
  decoding="async"
  class="w-full rounded-[var(--radius-md)] object-cover"
  data-reveal
  data-reveal-delay="120"
/>
```

Then remove the now-unused `ImageSlot` import.

Confirm nothing is left behind with:

```
Get-ChildItem -Path src -Recurse -Include *.astro | Select-String -Pattern "<ImageSlot"
```
