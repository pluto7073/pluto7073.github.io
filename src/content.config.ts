import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content"
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { DocInfo } from "./scripts/DocInfo.ts";

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

const docs = defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
        extend: z.object({
            desc: z.string(),
            mod: z.string().optional(),
            modrinth: z.string().optional(),
            curseforge: z.string().optional(),
            picture: z.string().optional(),
            dir: z.boolean().default(false),
            ignored: z.boolean().default(false),
            info: z.object<DocInfo>().optional()
        })
    })
})

export const collections = { mods, docs };
