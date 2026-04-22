// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import starlight from '@astrojs/starlight';
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";

import expressiveCode from 'astro-expressive-code';
import starlightThemeVintage from "starlight-theme-vintage"

// https://astro.build/config
export default defineConfig({
  site: 'https://pluto7073.github.io/',
  integrations: [astroExpressiveCode(), mdx(), sitemap(), starlight({
    plugins: [ starlightThemeVintage() ],
    title: 'Pluto\'s Games Wiki',
    customCss: [
        './src/styles/global.css'
    ],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pluto7073/' }],
    sidebar: [
        { label: "Pluto's Drinks", autogenerate: { directory: "wiki/plutosdrinks" }, collapsed: true },
      { label: "Consumable Chemicals", autogenerate: { directory: "wiki/chemicals"}, collapsed: true }
    ],
    components: {
      Head: "./src/components/Head.astro",
      Header: "./src/components/Header.astro",
      Sidebar: "./src/components/Sidebar.astro"
    }
  }), expressiveCode()],

  vite: {
    plugins: [tailwindcss()]
  }
});