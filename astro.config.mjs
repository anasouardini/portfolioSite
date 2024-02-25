import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://anasouardini.online',
  integrations: [tailwind(), sitemap({
    customPages: [
      'https://anasouardini.online/media/anas-ouardini.png',
      'https://anasouardini.online/media/anas-ouardini.jpg'
    ]}), robotsTxt() ],
  server: {port: 3000}
});
