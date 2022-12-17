import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [tailwind(), react(), image({serviceEntryPoint: '@astrojs/image/sharp'})]
});
