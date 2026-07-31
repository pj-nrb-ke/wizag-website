/**
 * Lexical → HTML for the Insights blog body.
 *
 * Payload stores rich text as Lexical JSON (a tree of nodes). This is a small,
 * dependency-free renderer for exactly the node types the WIZAG editor can
 * produce: headings, paragraphs, lists, quotes, links, inline formatting,
 * line breaks, images (upload nodes) and horizontal rules. Anything unknown
 * falls back to rendering its children, so new node types degrade to their
 * text rather than disappearing.
 *
 * Output is a trusted string built here from CMS data and set via Astro's
 * `set:html`. All author text is HTML-escaped; only the tags this file emits
 * are literal.
 */
import type { LexicalNode } from './payload';
import { mediaUrl, type PayloadMedia } from './payload';

/* Lexical stores inline styling as a bitmask on each text node. */
const FORMAT = {
  BOLD: 1,
  ITALIC: 2,
  STRIKETHROUGH: 4,
  UNDERLINE: 8,
  CODE: 16,
  SUBSCRIPT: 32,
  SUPERSCRIPT: 64,
} as const;

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Only allow safe URL schemes — blocks javascript: and data: links. */
function safeHref(url: unknown): string {
  const raw = String(url ?? '').trim();
  if (!raw) return '#';
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(raw)) return esc(raw);
  return '#';
}

function renderText(node: LexicalNode): string {
  let text = esc(String(node.text ?? ''));
  if (!text) return '';
  const f = Number(node.format ?? 0);
  if (f & FORMAT.CODE) text = `<code>${text}</code>`;
  if (f & FORMAT.BOLD) text = `<strong>${text}</strong>`;
  if (f & FORMAT.ITALIC) text = `<em>${text}</em>`;
  if (f & FORMAT.UNDERLINE) text = `<u>${text}</u>`;
  if (f & FORMAT.STRIKETHROUGH) text = `<s>${text}</s>`;
  if (f & FORMAT.SUBSCRIPT) text = `<sub>${text}</sub>`;
  if (f & FORMAT.SUPERSCRIPT) text = `<sup>${text}</sup>`;
  return text;
}

function renderChildren(node: LexicalNode): string {
  return (node.children ?? []).map(renderNode).join('');
}

function renderNode(node: LexicalNode): string {
  switch (node.type) {
    case 'text':
      return renderText(node);

    case 'linebreak':
      return '<br />';

    case 'paragraph': {
      const inner = renderChildren(node);
      return `<p>${inner}</p>`;
    }

    case 'heading': {
      /* The post title is the page's single <h1>. Demote any in-body h1 to h2
         so the document keeps one top-level heading (accessibility + SEO). */
      const raw = String(node.tag ?? 'h2');
      const tag = raw === 'h1' ? 'h2' : /^h[2-6]$/.test(raw) ? raw : 'h2';
      return `<${tag}>${renderChildren(node)}</${tag}>`;
    }

    case 'quote':
      return `<blockquote>${renderChildren(node)}</blockquote>`;

    case 'list': {
      const tag = node.listType === 'number' ? 'ol' : 'ul';
      const cls = node.listType === 'check' ? ' class="checklist"' : '';
      return `<${tag}${cls}>${renderChildren(node)}</${tag}>`;
    }

    case 'listitem':
      return `<li>${renderChildren(node)}</li>`;

    case 'link':
    case 'autolink': {
      const fields = (node.fields ?? {}) as { url?: string; newTab?: boolean };
      const href = safeHref(fields.url);
      const target = fields.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${href}"${target}>${renderChildren(node)}</a>`;
    }

    case 'upload': {
      /* Inline image. With depth>=1 the media doc is populated as an object. */
      const value = node.value as PayloadMedia | number | undefined;
      if (!value || typeof value !== 'object') return '';
      const src = mediaUrl(value);
      if (!src) return '';
      const alt = esc(value.alt ?? '');
      const dims = value.width && value.height ? ` width="${value.width}" height="${value.height}"` : '';
      const caption = value.alt ? `<figcaption>${esc(value.alt)}</figcaption>` : '';
      return `<figure><img src="${esc(src)}" alt="${alt}"${dims} loading="lazy" decoding="async" />${caption}</figure>`;
    }

    case 'horizontalrule':
      return '<hr />';

    default:
      /* Unknown container node — render its children rather than dropping. */
      return renderChildren(node);
  }
}

/** Normalise a heading/title for duplicate detection (case/punctuation-insensitive). */
function normalise(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function headingText(node: LexicalNode): string {
  return (node.children ?? []).map((c) => (c.type === 'text' ? String(c.text ?? '') : '')).join('');
}

export interface RenderOptions {
  /** If the body opens with a heading that repeats this title, drop it — the
   *  page already renders the title as its <h1>, so keeping it duplicates. */
  stripLeadingTitle?: string;
}

/** Render a Payload richText `content` value to an HTML string. */
export function lexicalToHtml(
  content: { root: LexicalNode } | null | undefined,
  options: RenderOptions = {}
): string {
  const root = content?.root;
  if (!root) return '';

  let children = root.children ?? [];

  if (options.stripLeadingTitle) {
    const wanted = normalise(options.stripLeadingTitle);
    const firstIdx = children.findIndex((n) => plainish(n).trim().length > 0);
    const first = firstIdx >= 0 ? children[firstIdx] : undefined;
    if (first && first.type === 'heading' && normalise(headingText(first)) === wanted) {
      children = children.filter((_, i) => i !== firstIdx);
    }
  }

  return children.map(renderNode).join('');
}

/** Cheap "does this node carry visible text" check for leading-title stripping. */
function plainish(node: LexicalNode): string {
  if (node.type === 'text') return String(node.text ?? '');
  return (node.children ?? []).map(plainish).join('');
}
