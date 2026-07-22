# WizCRM — image generation prompts

Four images for `/business-applications/wizcrm`, replacing the `<ImageSlot>`
placeholders at lines 182, 189, 196 and 263 of
`src/pages/business-applications/wizcrm.astro`.

Generated rather than photographed: staff photographs are personal data under
the Kenya Data Protection Act, requiring documented consent and review when
people leave. Generated imagery carries none of that.

---

## Art direction — apply to all four

These must read as **one shoot by one photographer**, not four unrelated
images. The shared grade below is what does that.

| | |
|---|---|
| **Style** | Documentary editorial photography. Think a business magazine feature, not a stock library. |
| **Camera** | 35mm lens, f/2.8, shot at eye level. Natural available light only. |
| **Light** | Overcast midday or the hour after sunrise. Soft, directional, never flat. |
| **Grade** | Slightly desaturated, warm highlights, deep neutral shadows. Muted navy and warm ochre sit naturally in frame — that is the WIZAG palette. |
| **Mood** | Competent and unglamorous. Work being done, not work being performed. |

### Two rules that matter more than the rest

**1. No identifiable faces.** Every shot is framed over the shoulder, from
behind, in profile, at distance, or with the face turned away or softly out
of focus. This kills two problems at once: AI-generated faces are the single
most reliable "this is fake" tell, and a synthetic face that happens to
resemble a real person is a genuine risk.

**2. Environment does the work.** These read as Kenyan because of the street,
the shopfront, the light and the vehicles — not because of the people. That
is also what stops them collapsing into generic "African business" imagery.

---

## Image 1 — AI Visit Capture *(optional — no slot on the page)*

> **Superseded.** This position now holds the animated Visit Capture demo:
> the report assembling itself proves the claim better than a photograph of
> someone holding a phone. The prompt is kept because the shot is still
> useful for the brochure, LinkedIn or a future case study.

**Ratio:** 4:3 · **Filename:** `wizcrm-visit-capture.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, natural overcast
> daylight. A sales representative stands just outside a small hardware and
> building-supplies shop in the Nairobi industrial area, holding a smartphone
> close to their mouth and speaking into it, mid-sentence. Shot from three
> quarters behind, over the left shoulder — the face is turned away from
> camera and not visible. They wear a plain short-sleeved shirt, a lanyard,
> and carry a slim folder under one arm. Behind them the shop front is
> stacked with paint tins and coiled hosepipe, hand-painted signage slightly
> faded. Warm ochre and dusty grey tones, soft directional light, shallow
> depth of field with the shopfront falling gently out of focus. Candid, in
> the middle of a working day. Negative space on the left third.
>
> Avoid: visible faces, direct eye contact, studio lighting, glossy corporate
> stock look, over-smooth skin, glowing or visible phone screen, floating UI
> or holograms, text overlays, logos, crowds, poverty imagery, safari or
> wildlife motifs.

**Why this shot:** it shows the twenty-second habit actually happening, in
the environment the buyer recognises as their own patch.

---

## Image 2 — Wanjiru, the virtual sales manager

**Slot:** line 189 · **Ratio:** 4:3 · **Filename:** `wizcrm-morning-brief.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, early morning light
> through a window. A sales manager sits at a plain desk in a small Nairobi
> office, reading a laptop screen, one hand resting near a cup of tea. Shot
> from behind and slightly to the side — the back of the head and one
> shoulder are visible, the face is not. The room is quiet and uncluttered: a
> whiteboard with faint marker ghosting, a stack of folders, a window with
> soft morning light and the edge of a jacaranda tree outside. Calm and
> unhurried, before the day starts. Muted palette, warm window light against
> cool interior shadow. The laptop screen is dim and indistinct, not glowing.
> Negative space upper right.
>
> Avoid: visible faces, readable screen content, open-plan startup offices,
> exposed brick, neon, multiple monitors, headsets, stock-photo smiling,
> people pointing at charts, glowing interfaces, holograms, text, logos.

**Why this shot:** Wanjiru replaces the morning status-chase. Show the calm it
produces, not the technology producing it.

---

## Image 3 — AI-assisted prospecting

**Slot:** line 196 · **Ratio:** 4:3 · **Filename:** `wizcrm-prospecting.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, soft indoor daylight.
> Two colleagues stand at a desk looking at a laptop together, one leaning in
> with a hand half-raised toward the screen mid-conversation. Shot from
> behind both, over their shoulders — neither face is visible. Plain shirts,
> no jackets. A small meeting room in Nairobi: plain wall, a window to one
> side, a notebook and two pens on the desk. The screen is turned away or
> softly out of focus so no content is legible. The moment is a decision
> being weighed, not a presentation. Muted neutral palette, warm daylight,
> shallow depth of field.
>
> Avoid: visible faces, readable screens, charts or dashboards on screen,
> conference-room stock imagery, suits and ties, handshakes, glass towers,
> glowing data visualisations, holograms, text, logos.

**Why this shot:** prospecting is a judgement, not a feed. The human weighing
the AI's scoring is the whole point of "explainable, no black box".

---

## Image 4 — Built for the field

**Slot:** line 263 · **Ratio:** 3:2 · **Filename:** `wizcrm-in-the-field.jpg`

> Documentary editorial photograph, 35mm lens, f/2.8, late afternoon
> Kenyan light. A sales representative stands beside a dusty white pickup
> truck parked at the roadside, checking a phone between calls, a folder
> tucked under one arm. Shot in profile from the far side, face turned down
> toward the phone and not identifiable. Behind: a tarmac road, roadside
> shops with hand-painted signage, an acacia in the middle distance, red
> dust on the vehicle's lower panels. Late golden light raking across the
> scene, long soft shadows. Unposed, a pause between two customer visits.
> Warm dust tones against cool sky. Wide composition with generous negative
> space on the right.
>
> Avoid: visible faces, staged posing, brand-new vehicles, safari or wildlife,
> poverty or hardship framing, tourist imagery, sunset silhouettes, drone or
> aerial views, glowing phone screens, holograms, text, logos.

**Why this shot:** the most differentiating image on the page. It says "built
for how you actually sell" more convincingly than any headline can.

---

## Generating and checking

**Ask for 4:3 or 3:2 explicitly** — the layout is sized for those ratios and
a square crop will letterbox badly.

**Generate several of each and pick for consistency**, not for whichever
single frame is prettiest. Four images that share a grade beat four good
images that do not.

**Check every output before use:**

- Hands. Count fingers. This is still where generators fail most often.
- Signage and any incidental text — generators produce convincing gibberish.
- Faces. If one crept into frame, regenerate rather than crop.
- Repetition. If two images share an identical background element, redo one.

**Do not add any WIZAG or client branding** to a generated image. A
synthesised logo on a synthesised shopfront is the kind of detail that
undermines trust when noticed.

---

## Dropping them in

Save to `public/images/wizcrm/`, then in
`src/pages/business-applications/wizcrm.astro` replace each block:

```astro
<!-- before -->
<ImageSlot ratio="4/3" brief="..." purpose="..." />

<!-- after -->
<img
  src="/images/wizcrm/wizcrm-visit-capture.jpg"
  alt="A sales representative outside a hardware shop, recording a visit note on their phone."
  width="1200"
  height="900"
  loading="lazy"
  decoding="async"
  class="w-full rounded-[var(--radius-md)] object-cover"
/>
```

Write a real `alt` for each — describe what is in the frame, not the
marketing intent. Then remove the now-unused `ImageSlot` import.

Supply them at roughly **1600px on the long edge**; the build pipeline
handles compression. Confirm nothing is left behind with:

```
Get-ChildItem -Path src -Recurse -Include *.astro | Select-String -Pattern "<ImageSlot"
```
