import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://anasouardini.online',
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), robotsTxt(), compress()]
});