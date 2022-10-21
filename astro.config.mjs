import { defineConfig } from 'astro/config';

// https://astro.build/config
import unocss from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss()]
});