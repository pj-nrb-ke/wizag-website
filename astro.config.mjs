// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// WIZAG corporate site.
// Static output for phase 1 (marketing pages). The contact endpoint will be
// added later as a Cloudflare Pages Function via the Cloudflare adapter — kept
// out of the base build so the marketing site stays fully pre-rendered.

/* Pages carried noindex (stub:true in src/data/navigation.ts) stay OUT of the
   sitemap — advertising a noindex URL is a mixed signal to crawlers. Keep this
   list in sync with the nav stubs, plus the 404. */
const NOINDEX = [
  '/about/leadership',
  '/about/careers',
  /* WizDBA — noindex until its e-commerce checkout is wired and screenshots
     land; drop this line when the page goes live. */
  '/business-applications/wizdba',
  '/404',
];

export default defineConfig({
  site: 'https://wizag.biz',

  // Insights blog images come from the Payload CMS. Authorising that host lets
  // Astro's build-time image service (Sharp) FETCH each one, downscale huge
  // uploads and re-encode them to WebP, baking the right-sized result into the
  // static build. A 1.8 MB / 1672px CMS upload becomes a right-sized image
  // automatically — and because the optimised file is baked in, the CMS is no
  // longer needed at view time (it only has to be up during the build).
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'wizag.biz' }],
  },

  // Generates /sitemap-index.xml (+ /sitemap-0.xml) at build. robots.txt in
  // public/ points crawlers at it.
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.includes(new URL(page).pathname.replace(/\/$/, '')),
    }),
  ],

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
