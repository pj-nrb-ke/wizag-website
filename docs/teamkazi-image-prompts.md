# TeamKazi — image generation prompts

Four images for `/business-applications/teamkazi`, replacing the
`<ImageSlot>` placeholders on that page.

**These must match the WizCRM set.** Same photographer, same grade, same
week. If the two product pages look like they came from different agencies,
both lose credibility. See `docs/image-prompts.md` — the art direction below
is deliberately identical.

---

## Art direction — apply to all four

| | |
|---|---|
| **Style** | Documentary editorial photography. A business magazine feature, not a stock library. |
| **Camera** | 35mm lens, f/2.8, shot at eye level. Natural available light only. |
| **Light** | Overcast midday or the hour after sunrise. Soft, directional, never flat. |
| **Grade** | Slightly desaturated, warm highlights, deep neutral shadows. Muted navy and warm ochre sit naturally in frame — that is the WIZAG palette. |
| **Mood** | Competent and unglamorous. Work being done, not work being performed. |

### The three rules that matter most

**1. No identifiable faces.** Every shot is over the shoulder, from behind,
in profile, at distance, or with the face turned away. AI-generated faces are
the single most reliable "this is fake" tell, and a synthetic face that
happens to resemble a real person is a genuine risk.

**2. No readable screens.** A generated screenshot of a project management
tool will not survive scrutiny by the exact buyer we are targeting — they use
these tools all day. Screens stay dim, angled away, or softly out of focus.

**3. The setting is a professional services firm, not a startup.** TeamKazi
sells to firms that bill for their people's time: architects, engineers,
consultants, surveyors, accountants. Rolled drawings, printed schedules,
site folders and scale rules do more work here than laptops do. Avoid
open-plan tech-office signifiers entirely — exposed brick, neon, beanbags,
multiple monitors, standing desks.

---

## Image 1 — Know your margin

**Ratio:** 4:3 · **Filename:** `teamkazi-margin.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft daylight from a
> window to the left. A principal at a consulting or engineering practice sits
> at a plain desk reviewing figures on a laptop, one hand resting near a
> printed spreadsheet. Shot from behind and slightly to one side — the back of
> the head and one shoulder visible, the face not. On the desk: a rolled set
> of drawings, a scale rule, a mug, a marked-up printout with pen annotations.
> A small Nairobi office, plain painted wall, a window with soft light. The
> laptop screen is dim and indistinct. Muted palette, warm window light
> against cool interior shadow. Negative space upper right.
>
> Avoid: visible faces, readable screen content, charts or dashboards on
> screen, open-plan startup offices, exposed brick, multiple monitors, suits
> and ties, stock-photo smiling, glowing interfaces, holograms, text, logos.

**Why this shot:** margin is a judgement someone makes at a desk on a Tuesday
afternoon. Show the judgement, not the software.

---

## Image 2 — Let the AI do the setup

**Ratio:** 4:3 · **Filename:** `teamkazi-scope-document.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft overhead daylight.
> Close on a desk: two hands flattening a thick printed scope document,
> a pen resting across the page, an open laptop just behind it and slightly
> out of focus. Shot from above at a slight angle. No face in frame — hands
> and forearms only, plain rolled shirtsleeves. Beside the document: a
> notebook, a highlighter, a paper clip. Plain wooden desk, neutral tones,
> soft shadows. The printed page carries visible paragraph structure but no
> legible words.
>
> Avoid: visible faces, legible text on the document, readable screens,
> contracts with signatures, stacks of money, handshakes, glowing interfaces,
> holograms, logos, watermarks.

**Why this shot:** the document *is* the input. This is the one image that
shows where the plan comes from, so the AI claim lands as a workflow rather
than a buzzword.

---

## Image 3 — Numbers you can take to a client meeting

**Ratio:** 4:3 · **Filename:** `teamkazi-client-meeting.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft indoor daylight.
> Two people sit across a plain meeting table, a printed report open between
> them, one hand resting on the page mid-discussion. Shot from the side at
> roughly table height — both faces are out of frame or turned away. Plain
> shirts, no jackets or ties. A small meeting room in Nairobi: plain wall, a
> window to one side, two glasses of water, a closed laptop pushed aside. The
> mood is a number being questioned and answered, not a presentation being
> given. Muted neutral palette, shallow depth of field.
>
> Avoid: visible faces, legible report content, conference-room stock imagery,
> suits and ties, handshakes, glass towers, projector screens, whiteboards
> covered in charts, pointing at graphs, glowing data visualisations, text,
> logos.

**Why this shot:** the whole "no flattering defaults" argument only matters at
this exact moment — when someone else is looking at your numbers.

---

## Image 4 — If you bill for time

**Ratio:** 3:2 · **Filename:** `teamkazi-timesheets.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, late afternoon light
> raking low across a desk. An unoccupied desk at the end of a working week:
> an open laptop angled away from camera, a notebook with a week's worth of
> handwritten notes, a cooling cup of coffee, a pen, a small stack of folders.
> Warm low sun through a window casting long soft shadows across the surface.
> Nobody in frame, or at most a pair of hands at the edge. A quiet Nairobi
> office after most people have gone. Warm amber light against cool shadow,
> muted and calm. Generous negative space on the left.
>
> Avoid: people in frame, visible faces, readable screens, timesheet or
> spreadsheet UI on screen, clocks or hourglasses as symbols, calendars with
> legible dates, tidy staged flat-lays, overhead knolling, glowing screens,
> text, logos.

**Why this shot:** the weekly ritual TeamKazi replaces. Every buyer recognises
this desk, and an empty one carries the Friday-evening feeling better than a
person would.

---

## Generating and checking

**Ask for 4:3 or 3:2 explicitly** — the layout is sized for those ratios and
a square crop will letterbox badly.

**Generate several of each and pick for consistency**, not for whichever
single frame is prettiest. Four images that share a grade beat four good
images that do not — and these also have to sit alongside the four WizCRM
images without looking like a different shoot.

**Check every output before use:**

- Hands. Count fingers. Image 2 is mostly hands, so it needs the most passes.
- Any incidental text — generators produce convincing gibberish. On the
  printed document in image 2, paragraph *shapes* are fine; readable words
  are not.
- Faces. If one crept into frame, regenerate rather than crop.
- Repetition. If two images share an identical background element, redo one.
- Screens. If any screen shows a plausible UI, regenerate — a fake project
  tool in a project tool advert is the worst possible detail to get caught on.

**Do not add any WIZAG, TeamKazi or client branding** to a generated image.

---

## Dropping them in

Save to `public/images/teamkazi/`, then in
`src/pages/business-applications/teamkazi.astro` replace each block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/teamkazi/teamkazi-margin.jpg"
  alt="A principal at a desk reviewing project figures, rolled drawings beside them."
  width="760"
  height="504"
  loading="lazy"
  decoding="async"
  class="w-full rounded-[var(--radius-md)] object-cover"
/>
```

Write a real `alt` for each — describe what is in the frame, not the
marketing intent. Then remove the now-unused `ImageSlot` import.

Supply them at roughly **1600px on the long edge**. Confirm nothing is left
behind with:

```
Get-ChildItem -Path src -Recurse -Include *.astro | Select-String -Pattern "<ImageSlot"
```
