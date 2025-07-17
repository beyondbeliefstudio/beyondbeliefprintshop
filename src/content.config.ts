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

const aboutFAQ = defineCollection({
  loader: file("src/data/aboutFAQ.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    tag: z.string(),
  }),
});

const team = defineCollection({
  loader: file("src/data/team.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const popularProducts = defineCollection({
  loader: file("src/data/popularProducts.json"),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      itemNumber: z.string(),
      itemDescription: z.string(),
      itemImage: z.string().url(),
      itemPrice: z.number(),
      itemCategory: z.string(),
      itemQuality: z.string(),
      itemURL: z.string().optional(),
    }),
});

export const collections = {
  reviews,
  heroCards,
  orderingProcess,
  servicesFAQ,
  team,
  aboutFAQ,
  popularProducts,
};
