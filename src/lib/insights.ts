import { getCollection, type CollectionEntry } from 'astro:content';

/* -------------------------------------------------------------------------
   INSIGHTS — shared query + formatting helpers.

   One source of truth for how posts are fetched, ordered, sliced and grouped,
   used by the index, pagination, taxonomy pages and the RSS feed so none of
   them drift. Draft posts are included only in `npm run dev` and excluded from
   the production build (brief §8.12 — nothing unfinished ships).
   ------------------------------------------------------------------------- */

export type Post = CollectionEntry<'insights'>;

/** Posts per page on the index and pagination routes. */
export const PAGE_SIZE = 6;

/** URL-safe slug. "AI & Automation" -> "ai-and-automation". */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** All publishable posts, newest first. Drafts only in dev. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'insights',
    ({ data }) => import.meta.env.DEV || !data.draft
  );
  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

/** Rough reading time in minutes from the raw markdown body (~200 wpm). */
export function readingMinutes(body?: string): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

export interface Term {
  /** Display name as authored, e.g. "AI & Automation". */
  name: string;
  /** URL slug, e.g. "ai-and-automation". */
  slug: string;
  /** How many posts carry it. */
  count: number;
}

/** Distinct categories or tags across the given posts, most-used first. */
export function collectTerms(posts: Post[], key: 'category' | 'tags'): Term[] {
  const map = new Map<string, Term>();
  for (const post of posts) {
    const values = key === 'category' ? [post.data.category] : post.data.tags;
    for (const value of values) {
      const slug = slugify(value);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { name: value, slug, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/** Up to `n` posts most related to `post` — shared category weighted above
    shared tags, then newest. */
export function relatedPosts(post: Post, all: Post[], n = 3): Post[] {
  const tags = new Set(post.data.tags);
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => {
      let score = p.data.category === post.data.category ? 2 : 0;
      score += p.data.tags.filter((t) => tags.has(t)).length;
      return { post: p, score };
    })
    .filter((x) => x.score > 0)
    .sort(
      (a, b) => b.score - a.score || b.post.data.publishDate.valueOf() - a.post.data.publishDate.valueOf()
    )
    .slice(0, n)
    .map((x) => x.post);
}
