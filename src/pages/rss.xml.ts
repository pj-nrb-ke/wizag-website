import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/insights';

/**
 * Insights RSS feed at /rss.xml. In production it lists only published posts,
 * so it is an empty feed until the section goes live — which is correct: an
 * empty feed is valid, and it means the URL exists for readers from day one.
 */
export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: 'WIZAG Insights',
    description:
      'Perspectives on enterprise transformation, ERP, AI and operational excellence from Wise & Agile Solutions.',
    site: context.site ?? 'https://wizag.biz',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/insights/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>en-gb</language>',
  });
}
