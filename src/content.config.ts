import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content"

const mods = defineCollection({
    loader: glob({ base: "./src/content/mods", pattern: '**/*.mdx' }),
    schema: () => z.object({
        title: z.string(),
        desc: z.string(),
        banner: z.string(),
        icon: z.string(),
        curseforge: z.string().optional(),
        modrinth: z.string().optional(),
        wiki: z.string().optional()
    })
})

export const collections = { mods };