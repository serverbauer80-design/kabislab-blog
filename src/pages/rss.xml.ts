import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

const siteUrl = "https://blog.kabislab.com";

const formatPost = (post: CollectionEntry<"posts">) => {
  const url = `${siteUrl}/posts/${post.slug}`;
  const pubDate = new Date(post.data.pubDate).toUTCString();
  return `<item>
    <title>${post.data.title}</title>
    <link>${url}</link>
    <description>${post.data.description}</description>
    <pubDate>${pubDate}</pubDate>
  </item>`;
};

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");
  const sorted = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const items = sorted.map(formatPost).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>KabisLab Blog</title>
    <link>${siteUrl}</link>
    <description>Engineering and product stories from KabisLab.</description>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml"
    }
  });
};
