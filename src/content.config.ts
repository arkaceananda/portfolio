import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.json" }),
  schema: z.object({
    title: z.string(),
    briefDescription: z.string(),
    longDescription: z.string(),
    techStack: z.array(z.string()),
    videoUrl: z.string(),
    githubUrl: z.string(),
    apkUrl: z.string(),
    accentColor: z.string(),
    problem: z.string(),
    solution: z.string(),
    keyFeatures: z.array(z.string()),
  }),
});

export const collections = { projects };
