import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  loader: file("src/data/reviews.json"),
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
  loader: file("src/data/heroCards.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      isFeatured: z.boolean(),
    }),
});

const orderingProcess = defineCollection({
  loader: file("src/data/orderingProcess.json"),
  schema: ({ image }) =>
    z.object({
      data: z.string(),
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      active: z.string(),
    }),
});

const servicesFAQ = defineCollection({
  loader: file("src/data/servicesFAQ.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    tag: z.string(),
  }),
});

export const collections = { reviews, heroCards, orderingProcess, servicesFAQ };
