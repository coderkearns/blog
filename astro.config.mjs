// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: "https://coderkearns.github.io",
  base: "/blog",
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
