import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().default('KabisLab'),
    ogImage: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  posts
};
