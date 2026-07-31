/**
 * Insights content source — the WIZAG blog is authored in the self-hosted
 * Payload CMS (https://wizag.biz/cms) and pulled into this static site at
 * BUILD TIME. There is no client-side fetching: `getPosts()` runs on the
 * server while `astro build` renders, so the published HTML is fully static
 * and the CMS is never in the visitor's critical path.
 *
 * Why fetch the API instead of reading Payload's Postgres tables directly:
 * the rich-text body is stored as Lexical JSON and the table schema is
 * internal/version-dependent. The REST API is the stable, public contract —
 * this matches Astro's official Payload guide. Rendering of that Lexical JSON
 * to HTML lives in ./lexical.ts.
 *
 * A published post appears on the site when the site is next built. If the
 * CMS is unreachable at build time we fail SOFT — the Insights section renders
 * empty rather than breaking the whole marketing build.
 */

/** Base URL of the Payload app, including its `/cms` base path. Overridable
 *  for a future staging CMS via a PUBLIC_PAYLOAD_URL env var; defaults to the
 *  live instance so a plain `npm run build` (or `npm run dev`) just works. */
const CMS = (import.meta.env.PUBLIC_PAYLOAD_URL ?? 'https://wizag.biz/cms').replace(/\/+$/, '');

/** Origin only (no /cms) — media URLs from the API are already root-absolute
 *  and include the /cms prefix, so they only need the scheme+host prepended. */
const ORIGIN = new URL(CMS).origin;

export interface PayloadMedia {
  id: number;
  alt: string | null;
  /** Root-absolute path served by Payload, e.g. /cms/api/media/file/hero.png */
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  width: number | null;
  height: number | null;
}

export interface PayloadCategory {
  id: number;
  title: string;
}

export interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  [key: string]: unknown;
}

export interface PayloadPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  heroImage: PayloadMedia | null;
  category: PayloadCategory | null;
  tags: string[] | null;
  publishedDate: string | null;
  content: { root: LexicalNode } | null;
  author: string | null;
  createdAt: string;
  updatedAt: string;
  _status?: string;
}

interface PostsResponse {
  docs: PayloadPost[];
}

/** Turn a Payload media object into an absolute, browser-usable image URL. */
export function mediaUrl(media: PayloadMedia | null | undefined): string | null {
  if (!media?.url) return null;
  return new URL(media.url, ORIGIN).href;
}

/**
 * Every published post, newest first. Runs at build time only.
 *
 * With drafts enabled on the collection, the public API returns only the
 * published version of each post — unpublished drafts stay invisible on the
 * live site until the author hits Publish. That is the intended behaviour, so
 * no explicit status filter is needed.
 */
export async function getPosts(): Promise<PayloadPost[]> {
  const endpoint = `${CMS}/api/posts?depth=2&limit=200&sort=-publishedDate`;
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.warn(`[insights] Payload returned ${res.status} for ${endpoint} — Insights will be empty.`);
      return [];
    }
    const data = (await res.json()) as PostsResponse;
    return (data.docs ?? []).filter((p) => p.slug && p.title);
  } catch (err) {
    console.warn(`[insights] Could not reach Payload at ${endpoint} — Insights will be empty.`, err);
    return [];
  }
}

/** Format a post date for display, e.g. "31 July 2026". Falls back to the
 *  created date, then to an empty string if neither parses. */
export function formatPostDate(post: Pick<PayloadPost, 'publishedDate' | 'createdAt'>): string {
  const raw = post.publishedDate ?? post.createdAt;
  if (!raw) return '';
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

/** Plain-text of a Lexical subtree — used for excerpts and reading time. */
function plainText(node: LexicalNode | undefined): string {
  if (!node) return '';
  if (node.type === 'text') return String(node.text ?? '');
  if (node.type === 'linebreak') return ' ';
  const kids = node.children ?? [];
  return kids.map(plainText).join(node.type === 'paragraph' || node.type === 'heading' ? '' : '');
}

/** A short summary for cards and meta description: the author's excerpt if
 *  they wrote one, otherwise the opening of the first paragraph. */
export function postExcerpt(post: PayloadPost, max = 180): string {
  const authored = post.excerpt?.trim();
  if (authored) return authored;

  const root = post.content?.root;
  const firstPara = root?.children?.find((n) => n.type === 'paragraph' && plainText(n).trim().length > 0);
  const text = plainText(firstPara).replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

/** Rough reading time in whole minutes (>= 1), from the body word count. */
export function readingMinutes(post: PayloadPost): number {
  const text = plainText(post.content?.root).replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.round(words / 200));
}
