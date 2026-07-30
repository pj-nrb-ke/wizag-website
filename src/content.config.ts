import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* -------------------------------------------------------------------------
   INSIGHTS — the articles/blog collection (the brief's "Insights" section).

   Authored as MD/MDX in src/content/insights and loaded via the Astro 5
   content layer (glob loader), so the whole section is typed at build time.
   When Sanity is wired in a later phase this collection becomes the fallback
   and the page templates do not change.

   ⚠ CONTENT RULES (brief §8.12 + project anti-fabrication rules):
   - No invented clients, statistics, testimonials or case studies in a post.
   - `author` defaults to "WIZAG" — do NOT invent a person's byline. Real named
     authors only once real bios exist.
   - `draft: true` posts render in `npm run dev` but are EXCLUDED from the
     production build (see the filter in the Insights pages), so unfinished or
     placeholder content can never reach the live site.
   ------------------------------------------------------------------------- */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    /** Shown as the H1 and the <title>. Keep it under ~70 chars for SERPs. */
    title: z.string().max(90),
    /** Meta description + card summary. One or two sentences. */
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    /** Set when a post is materially revised, so the page can show "Updated". */
    updatedDate: z.coerce.date().optional(),
    /** Single primary category (drives the /insights/category/* pages later). */
    category: z.string(),
    tags: z.array(z.string()).default([]),
    /** Byline. Defaults to the company until real author profiles exist. */
    author: z.string().default('WIZAG'),
    /** Public path to a hero image, e.g. /images/insights/my-post.jpg. */
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    /** Dev-only until ready; excluded from the production build. */
    draft: z.boolean().default(false),
    /** Optionally pin one post to the top of the index. */
    featured: z.boolean().default(false),
  }),
});

export const collections = { insights };
