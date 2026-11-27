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
    platform: z.enum(["mobile", "web", "desktop", "cli"]).default("mobile"),
    videoUrl: z.string().optional(),
    previewImage: z.string().optional(),
    githubUrl: z.string(),
    apkUrl: z.string().optional(),
    binaryUrl: z.string().optional(),
    binaryLabel: z.string().optional(),
    accentColor: z.string(),
    problem: z.string(),
    solution: z.string(),
    keyFeatures: z.array(z.string()),
  }),
});

export const collections = { projects };
