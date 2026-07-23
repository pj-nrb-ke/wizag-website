# WIZAG photography direction

**One house style for every page on the site.** Each product's prompt file
holds only its shot list; the direction lives here, so changing the look is
one edit rather than six.

> **This supersedes the muted documentary style used until 2026-07-23.**
> The earlier direction specified "competent and unglamorous", "no smiling"
> and a desaturated grade, and banned faces outright. It produced tired,
> joyless offices — the client's words: *"like a government office: depressed,
> demoralized, nothing new is happening."* Everything below is a deliberate
> reversal.

---

## The register

| | |
|---|---|
| **Style** | Bright, aspirational corporate photography. The kind of image a successful company uses in its own annual report. |
| **Camera** | 35mm or 50mm, f/2.5–f/2.8, eye level. |
| **Light** | **Abundant warm daylight.** Big windows, sun coming in, bright bounce. Golden and generous — never grey, never flat. |
| **Grade** | **Warm and vivid.** Rich skin tones, clean whites, a little saturation. NOT desaturated, NOT muted, NOT moody. |
| **Setting** | Modern, well-appointed, visibly successful Kenyan workplaces. Good furniture, plants, glass, light. |
| **Mood** | **Energy, optimism, momentum.** People enjoying good work and winning at it. |

## The people

**A mix of Black African and South Asian professionals, men and women** —
what a Nairobi workplace actually looks like.

Specify all four every time; generators default badly on each:

- **Mid-30s to mid-50s.** Left alone you get a room of twenty-five-year-olds,
  which reads as a startup rather than an established business.
- **Ordinary professional builds and faces, not fashion models.** The default
  is catalogue-symmetrical and turns uncanny with more than two people in
  frame.
- **Smart business dress with some colour.** Not a wall of dark suits, not
  hoodies.
- **Warm, genuinely happy expressions.** Real smiles, animated conversation,
  someone mid-laugh, leaning in, gesturing with energy.

## The line between confident and cheesy

This is the whole craft. Be specific about both sides in every prompt.

**Yes — authentic success**
- Smiles that reach the eyes, arising from the conversation
- Animated gesture, leaning in, movement, people talking over each other
- Bright sunlight, warm colour, open modern space
- One person clearly making a point the others are enjoying

**No — stock-photo cheese**
- Everybody lined up grinning straight at the camera
- Thumbs up, high fives, fists in the air, applause
- Confetti, champagne, trophies, cash, rising-arrow props
- Arms folded in a row, "power pose" line-ups
- Handshakes as the subject of the photo

**The principle: the happiness comes from what they are doing, not from being
photographed.**

## Three rules that always apply

**1. No readable screens.** Every one of these pages sells software to people
who use that kind of software daily. A plausible-but-fake ledger, dashboard or
CRM is the fastest way to lose them. Screens stay dim, angled away, or softly
out of focus.

**2. No branding of any kind.** No logos on walls, laptops, mugs, lanyards or
notebooks. No tax-authority marks. No wall slogans or motivational posters.

**3. No real people.** Never name or describe an actual person, public figure
or client. These are fictional professionals.

---

## Check every background surface

One Sage 200 image had to be cropped before use because a background banner
read **"Make an impact that matters"** — Deloitte's actual global tagline, and
they have a large Nairobi practice. It would have been recognised instantly.

Generators reproduce real corporate slogans and near-miss logos from training
data, and place them exactly where a real office would: wall banners, pull-up
stands, glass partitions, laptop lids, mugs, lanyards, monitor bezels.

**Open-plan and lobby scenes are the highest risk.** Check them hardest.

## Checking before use

- **Hands.** Count fingers on everyone, including anyone at frame edge.
  Gesturing hands are the highest-risk element in this register.
- **Teeth.** Real smiles make this the most likely failure. Generators fuse,
  multiply and misalign teeth.
- **Eyes.** Same direction, same size, catchlights on the same side.
- **Ears, glasses arms, collars, buttons.**
- **Every background surface**, per the note above.
- **Any incidental text.** Column and paragraph *shapes* are fine; readable
  words are not.
- **Screens.** Regenerate if any shows a plausible interface.

If a frame is right in every way except one hand or one smile, **regenerate
rather than retouch**.

## If results come back flat

Two adjustments usually fix it, in this order:

1. **Push the light.** Add *"golden hour sunlight streaming through large
   windows, bright and airy, high-key lighting"* to the front of the prompt.
   Dull light is what makes an office look like a waiting room.
2. **Name the moment, not the expression.** Instead of "smiling", write what
   causes it: *"laughing at something a colleague just said"*, *"delighted by
   a result on the page"*. Generators render a described moment far better
   than a described expression.

## Generating

**Generate each image on its own, not as a 2×2 grid.** A single 1536px image
gives roughly double the usable resolution of one panel of a grid, and needs
no cropping. Earlier sets came from grids and one had to be width-capped on
the page to avoid visible softening.

**Ask for the ratio explicitly** — the layouts are sized for the ratios named
in each shot list.

**Generate several of each and pick for consistency**, not for whichever
single frame is prettiest.

---

## The full shot list

Filenames are stable. **To replace an existing image, save the new file over
the old one with the same name** — no code changes needed.

### Priority 1 — still in the old muted style

| Page | File | Ratio | Shots |
|---|---|---|---|
| TeamKazi | `teamkazi-timesheets.jpg` | 3:2 | 1 |
| Sage Business Cloud | `sage-*.jpg` | 4:3 / 16:9 | 3 |

Four left of the original eleven. `teamkazi-timesheets.jpg` is an empty desk
at dusk with no people in it at all — the single flattest image on the site.

### Priority 2 — not yet generated

| Page | File | Ratio | Shots |
|---|---|---|---|
| Services (6 practice pages) | `services-*.jpg` | 4:3 | 6 |

These sell people and judgement rather than software, so every frame is a
working conversation between peers. See `docs/services-image-prompts.md` —
three of them carry a specific cliché to avoid (AI robots, fabricated
dashboards, dark network-operations rooms).

### Done

| Page | Note |
|---|---|
| WizERP | Both images generated and placed 2026-07-23. They set this register. |
| WizCRM | All four replaced 2026-07-23. |
| TeamKazi | Three of four replaced 2026-07-23 — margin, scope document, client meeting. |

**Resolution note on the WizCRM and TeamKazi set.** These came back as two
1536×1024 sheets of six panels each, so every panel was only ~510px wide
before cropping — *less* than the 760px images they replaced. They are placed
at 504×336 and the browser scales them up slightly on a large screen. They
hold together because the compositions are clean, but they are the softest
photographs on the site and a per-image regeneration would roughly triple the
detail. See **Generating** above: one image at a time, every time.

### Already close — refresh only if you want perfect consistency

| Page | Note |
|---|---|
| Sage 200 | Three supplied images, already corporate with faces and reasonable light. The eight-person boardroom shot is the one stock cliché on the site — everyone grinning at camera — and is the strongest candidate for replacement. |
| AscendBooks | One supplied image, corporate with faces, but composed and serious rather than warm. Borderline. |

**Total to bring fully into the new register: 13 images**, or 17 if the Sage
200 and AscendBooks sets are refreshed too.

---

## Per-product shot lists

- `docs/image-prompts.md` — WizCRM
- `docs/teamkazi-image-prompts.md` — TeamKazi
- `docs/sage-business-cloud-image-prompts.md` — Sage Business Cloud
- `docs/sage-200-image-prompts.md` — Sage 200
- `docs/ascendbooks-image-prompts.md` — AscendBooks
- `docs/wizerp-image-prompts.md` — WizERP

## Dropping them in

Save to `public/images/<product>/`, then in the page replace each block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/wizerp/wizerp-growth.jpg"
  alt="Three colleagues in animated discussion around a table in a sunlit office."
  width="1160"
  height="870"
  loading="lazy"
  decoding="async"
  class="w-full rounded-[var(--radius-md)] object-cover"
/>
```

Write a real `alt` for each — describe what is in the frame, not the
marketing intent. Then remove any now-unused `ImageSlot` import.

Confirm nothing is left behind with:

```
Get-ChildItem -Path src -Recurse -Include *.astro | Select-String -Pattern "<ImageSlot"
```
