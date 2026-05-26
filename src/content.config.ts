import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum(['Writing', 'Coding', 'Design', 'Productivity', 'Trading', 'Video', 'Audio', 'Business', 'Research', 'Other']),
    pricing: z.object({
      free: z.boolean(),
      freeTier: z.string().optional(),
      startingPrice: z.string().optional(),
    }),
    rating: z.number().min(1).max(5),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    affiliateLink: z.string().url().optional(),
    affiliateCommission: z.string().optional(),
    websiteUrl: z.string().url(),
    logoUrl: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    addedDate: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = { tools };
