import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://budbud-eu.github.io',
  base: '/budbud-landing-page-development',
  integrations: [tailwind(), svelte()]
});
