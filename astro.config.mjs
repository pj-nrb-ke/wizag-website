// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// WIZAG corporate site.
// Static output for phase 1 (marketing pages). The contact endpoint will be
// added later as a Cloudflare Pages Function via the Cloudflare adapter — kept
// out of the base build so the marketing site stays fully pre-rendered.
export default defineConfig({
  site: 'https://wizag.biz',

  // Astro's dev toolbar — the floating pill at the bottom of the screen in
  // `npm run dev`. It never appears in the production build, but it sits over
  // the page during review, so it is off.
  //
  // To bring it back, set enabled: true. Its Audit panel is the useful part:
  // it flags accessibility and performance problems per page as you browse.
  devToolbar: { enabled: false },
  vite: {
    // Cast: Astro's bundled Vite and Tailwind's peer Vite ship slightly
    // different Plugin types. Runtime is fine; this silences the skew.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
