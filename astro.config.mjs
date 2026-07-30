// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// WIZAG corporate site.
// Static output for phase 1 (marketing pages). The contact endpoint will be
// added later as a Cloudflare Pages Function via the Cloudflare adapter — kept
// out of the base build so the marketing site stays fully pre-rendered.

/* Pages carried noindex (stub:true in src/data/navigation.ts) stay OUT of the
   sitemap — advertising a noindex URL is a mixed signal to crawlers. Keep this
   list in sync with the nav stubs, plus the 404. */
/* '/insights' stays here while the section is DORMANT: it ships noindex and out
   of the sitemap until real articles exist (brief §8.12). Individual posts are
   `draft` and excluded from the production build, so no post URLs appear either.
   To launch Insights: remove '/insights' below and flip the posts to draft:false. */
const NOINDEX = [
  '/about/leadership',
  '/about/careers',
  '/business-applications/wizsales',
  '/insights',
  '/404',
];

export default defineConfig({
  site: 'https://wizag.biz',

  // Generates /sitemap-index.xml (+ /sitemap-0.xml) at build. robots.txt in
  // public/ points crawlers at it.
  integrations: [
    // MDX powers the Insights articles — a post can embed the site's own
    // diagram components, and content stays typed via the collection schema.
    mdx(),
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
