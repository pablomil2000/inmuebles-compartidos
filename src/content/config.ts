import { defineCollection, z } from 'astro:content';

const properties = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    location: z.string(),
    mainImage: z.string(),
    gallery: z.array(z.string()),
    features: z.object({
      bedrooms: z.number(),
      bathrooms: z.number(),
      garage: z.boolean().default(false),
      garden: z.boolean().default(false),
      pool: z.boolean().default(false),
      airConditioning: z.boolean().default(false),
      heating: z.boolean().default(false),
      furnished: z.boolean().default(false),
    }),
    squareMeters: z.number(),
    available: z.boolean().default(true),
    featured: z.boolean().default(false),
    publishDate: z.date(),
  }),
});

const rooms = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    location: z.string(),
    mainImage: z.string(),
    gallery: z.array(z.string()),
    features: z.object({
      type: z.enum(['individual', 'doble', 'suite']),
      bathroom: z.enum(['privado', 'compartido']),
      furnished: z.boolean().default(true),
      desk: z.boolean().default(false),
      tv: z.boolean().default(false),
      wifi: z.boolean().default(true),
      airConditioning: z.boolean().default(false),
      heating: z.boolean().default(false),
    }),
    squareMeters: z.number(),
    available: z.boolean().default(true),
    featured: z.boolean().default(false),
    publishDate: z.date(),
  }),
});

export const collections = {
  properties: properties,
  rooms: rooms,
};
