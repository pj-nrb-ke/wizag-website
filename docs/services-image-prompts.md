# Services — image prompts

**Read `docs/photography-direction.md` first** for the house style. Prompts
below are in plain code blocks, ready to paste.

Six images, one per practice page. All **4:3**.

## What makes this set different

The product pages sell software, so their images show software being used.
These sell **people and judgement**, so every frame is a working
conversation — and the six should look like six moments from the same
consultancy, not six unrelated stock scenes.

**One rule with extra force here:** these are consultants working with
clients. Nobody presents *at* anybody, nobody stands over a seated group, and
there are no handshakes. Peers solving something together.

---

## 1. `services-executive-technology.jpg`

For `/services/executive-technology-services`

```
Bright, warm corporate photograph, 50mm lens, f/2.5, abundant daylight through a wall of windows. Three senior people around one end of a light boardroom table in a modern Nairobi office — a technology advisor mid-explanation with an open confident gesture, two directors listening closely, one nodding and smiling. A South Asian man in his fifties, a Black African woman in her fifties, and a Black African man in his forties; ordinary professional builds, smart business dress with some colour. Faces visible, engaged with each other, nobody looking at camera. On the table: a printed roadmap document showing structure but no legible words, notepads, water glasses, a closed laptop. Warm vivid grade, rich skin tones, clean whites, shallow depth of field. The feeling of a good decision being reached. Negative space upper right.

Avoid: grinning at camera, handshakes, thumbs up, anyone standing over a seated group, presenting at a whiteboard, legible text on documents, readable screens, dark or grey light, desaturated grade, glass skyscrapers, identical dark suits, logos or branding, wall slogans, over-smoothed skin, extra fingers.
```

---

## 2. `services-erp-systems.jpg`

For `/services/erp-business-systems`

```
Bright, warm corporate photograph, 50mm lens, f/2.5, strong daylight from a large window. Three colleagues gathered at a desk in a modern Nairobi office reviewing a printed operations report together, one pointing at a figure with evident satisfaction, another leaning in, the third smiling — the numbers finally agree. A Black African woman in her forties, a South Asian man in his forties and a Black African man in his thirties; ordinary professional builds, smart shirts with colour. Faces visible, none looking at camera. An open laptop angled away with a dim indistinct screen, folders, mugs. Bright office with plants and glass behind. Warm vivid grade, rich skin tones, clean whites.

Avoid: grinning at camera, thumbs up, legible figures on paper, readable screens, spreadsheets or dashboards on screen, dark or grey light, desaturated grade, server rooms, cables, dated offices, logos or branding, over-smoothed skin, extra fingers.
```

---

## 3. `services-ai-automation.jpg`

For `/services/ai-intelligent-automation`

```
Bright, warm corporate photograph, 50mm lens, f/2.5, generous daylight. Two colleagues side by side at a bright desk in a modern Nairobi office, both looking at a laptop and reacting with genuine pleasure — something that used to take hours has just finished on its own. One is half out of her chair with an open delighted gesture; the other is laughing. A Black African woman in her thirties and a South Asian man in his forties, ordinary professional builds, smart shirts with colour. Faces visible, neither looking at camera. The laptop screen is angled away and indistinct. Plants, glass and sunlight behind. Warm vivid grade, rich skin tones, clean bright whites.

Avoid: readable screen content, any visible interface or dashboard, robots, glowing brains, circuit-board motifs, holograms, floating UI, blue-tinted "tech" lighting, grinning at camera, thumbs up, high fives, dark or grey light, desaturated grade, logos or branding, over-smoothed skin, extra fingers.
```

⚠ **The AI clichés are the risk here.** No robots, no glowing neural
networks, no blue holographic interfaces. The subject is two people pleased
that something worked.

---

## 4. `services-process-excellence.jpg`

For `/services/process-operational-excellence`

```
Bright, warm corporate photograph, 35mm lens, f/2.8, sunlight flooding a bright modern Nairobi office. Four colleagues standing at a large glass wall covered in coloured sticky notes, mapping a process together — one reaching up to place a note, another gesturing along the flow explaining a step, the other two watching and one laughing. A mix of Black African and South Asian men and women, mid-30s to mid-50s, ordinary professional builds, smart business dress with some colour, sleeves rolled. Faces visible, all engaged with the wall and each other, nobody looking at camera. The sticky notes carry marks and shapes but no legible words. Warm vivid grade, rich skin tones, clean bright whites. Collaborative and energetic.

Avoid: legible text on the sticky notes, grinning at camera, thumbs up, high fives, applause, anyone presenting at the group, dark or grey light, desaturated grade, exposed-brick startup clichés, logos or branding, motivational wall slogans, over-smoothed skin, extra fingers.
```

**This is the best shot in the set** — the only practice with a genuinely
photogenic physical activity. Worth extra attempts.

---

## 5. `services-data-analytics.jpg`

For `/services/data-analytics-business-intelligence`

```
Bright, warm corporate photograph, 50mm lens, f/2.5, strong daylight from a large window. Two colleagues side by side at a bright desk in a modern Nairobi office — an analyst turning a laptop toward a manager, the manager reacting with clear recognition and a smile, as though a question that had been bothering her has just been answered. A South Asian man in his thirties and a Black African woman in her forties, ordinary professional builds, smart business dress with colour. Faces visible, neither looking at camera. The laptop screen is angled away and indistinct. A printed report and a notepad on the desk. Plants and glass behind. Warm vivid grade, rich skin tones, clean whites.

Avoid: readable screen content, any visible chart, graph or dashboard, glowing data visualisations, holographic displays, blue-tinted "data" lighting, walls of monitors, grinning at camera, thumbs up, dark or grey light, desaturated grade, logos or branding, over-smoothed skin, extra fingers.
```

⚠ **Do not show a dashboard.** The temptation is enormous and it would be a
fabricated interface on a page selling real ones. The product of analytics is
a person understanding something — photograph the understanding.

---

## 6. `services-managed-services.jpg`

For `/services/managed-technology-services`

```
Bright, warm corporate photograph, 50mm lens, f/2.5, generous natural daylight. Two support engineers at a tidy, well-kept operations desk in a modern Nairobi office with two or three monitors, relaxed and clearly in control — one turning to say something to the other, both smiling easily. Nothing is urgent. A Black African man in his forties and a South Asian woman in her thirties, ordinary professional builds, smart shirts with colour. Faces visible, neither looking at camera. Monitors are angled away and their screens indistinct. Daylight, a plant, a mug, an orderly desk. Warm vivid grade, rich skin tones, clean bright whites.

Avoid: readable screen content, dashboards, graphs, alert screens, red warning colours, dark "network operations centre" rooms, banks of screens, blue or green monitor glow, server racks, cables, headsets, anyone looking stressed, grinning at camera, dark or grey light, desaturated grade, logos or branding, over-smoothed skin, extra fingers.
```

⚠ **The dark NOC cliché is the risk.** Rows of glowing screens in a dim room
says "something is going wrong". Managed services sells the opposite:
daylight, order, nothing on fire.

---

## Dropping them in

Save to `public/images/services/`, then in
`src/pages/services/[slug].astro` replace the `<ImageSlot>` block with:

```astro
<img
  src={`/images/services/${image.file}`}
  alt={image.alt}
  width="1160"
  height="870"
  loading="lazy"
  decoding="async"
  class="w-full rounded-[var(--radius-md)] object-cover"
  data-reveal
  data-reveal-delay="120"
/>
```

The page reads its brief from `practiceImage` in `src/data/services.ts` — add
`file` and `alt` to each entry there and the template picks them up for all
six pages at once.
