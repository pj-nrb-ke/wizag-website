// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// WIZAG corporate site.
// Static output for phase 1 (marketing pages). The contact endpoint will be
// added later as a Cloudflare Pages Function via the Cloudflare adapter — kept
// out of the base build so the marketing site stays fully pre-rendered.
export default defineConfig({
  site: 'https://wizag.biz',
  vite: {
    // Cast: Astro's bundled Vite and Tailwind's peer Vite ship slightly
    // different Plugin types. Runtime is fine; this silences the skew.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
