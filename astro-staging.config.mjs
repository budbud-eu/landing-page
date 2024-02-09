import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://budbud-eu-landing-page--staging-uosd5uzi.web.app',
  integrations: [tailwind(), svelte()],
  output: 'hybrid',
  adapter: node({
    mode: "middleware"
  })
});