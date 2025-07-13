import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  loader: file("src/content/reviews.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      stars: z.string(),
      company: z.string(),
      description: z.string(),
      isFeatured: z.boolean(),
    }),
});

const heroCards = defineCollection({
  loader: file("src/content/heroCards.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      isFeatured: z.boolean(),
    }),
});

export const collections = { reviews, heroCards };
