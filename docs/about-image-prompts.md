# About — image prompts

**Read `docs/photography-direction.md` first** for the house style. Two
images for the About page. Both **4:3**. Generate one at a time.

## Current state

| Slot | Status |
|---|---|
| `about-approach.jpg` | **Interim** — currently reusing the WizERP growth photo so the page ships with a real image. Replace with an About-original using prompt 1 below. |
| `about-office.jpg` | **Placeholder** — the page shows a documented slot until this is generated (prompt 2). |

Both live in `public/images/about/`. To swap in a new file, save it with the
name above; for the office shot, also add `file`/`alt`/`w`/`h` to the
`office` entry in `src/data/about.ts` (the `approach` entry already points at
its file).

---

## 1. `about-approach.jpg` — how we work together

Replaces the interim reused image. This is the centre of the page, opposite
the "who we are" narrative, so it should read as senior peers working
something out — not a posed team.

```
Bright, warm corporate photograph, 50mm lens, f/2.5, abundant daylight through large windows. Three or four experienced professionals around a table in a modern, well-appointed Nairobi office, in genuine working discussion — one making a point with an open hand, another leaning in, a third nodding. A mix of Black African and South Asian men and women, mid-30s to mid-50s, smart business dress with some colour. Faces visible and engaged with each other, nobody looking at the camera. On the table: notebooks, a printed document showing structure but no legible words, water glasses, a closed laptop. Warm vivid grade, rich skin tones, clean whites, shallow depth of field. The feeling of a good decision being worked out together.

Avoid: everyone grinning at the camera, posed line-ups, handshakes, thumbs up, presenting at a whiteboard, anyone standing over a seated group, legible text on documents, readable screens, glass-tower skyline, identical dark suits, logos or wall slogans, dark or grey light, desaturated grade, over-smoothed skin, extra fingers.
```

---

## 2. `about-office.jpg` — where we are

Sits next to the Nairobi address. Grounds WIZAG as a real, physical
operation. A clean modern workplace interior is safer and more on-brand than
an exterior street scene (which risks catching real neighbouring signage).

```
Bright, warm architectural photograph, 35mm lens, f/4, generous natural daylight. The interior of a modern, well-appointed professional office in Nairobi — clean lines, good furniture, glass-walled meeting rooms, plants, warm timber and light surfaces. Either empty or with one or two people at work softly out of focus in the distance. Calm, orderly, successful. Warm vivid grade, clean whites, a sense of space and light.

Avoid: company names, logos, wall slogans or signage of any kind; any legible screens or documents; brand names on neighbouring buildings; cluttered or dated decor; dark or grey light; desaturated grade; empty derelict space; obvious stock-photo staging; wide-angle distortion.
```

---

## Dropping them in

Save to `public/images/about/`, then for the office image add to the
`office` entry in `src/data/about.ts`:

```ts
office: {
  file: 'about-office.jpg',
  alt: 'The interior of a modern, light-filled Nairobi office with glass meeting rooms and plants.',
  w: 1160,
  h: 870,
  brief: '…',    // keep the brief/purpose
  purpose: '…',
},
```

The `approach` entry already has a `file`; replacing the interim image is
just saving the new file over `public/images/about/about-approach.jpg`.

Write a real `alt` describing what is in the frame. Confirm nothing is left
behind before launch with:

```
Get-ChildItem -Path src -Recurse -Include *.astro | Select-String -Pattern "ImageSlot"
```
