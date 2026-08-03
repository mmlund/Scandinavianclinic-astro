// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://scandinavianclinic.com',
  output: 'static',
  image: {
    service: {
      entrypoint: './src/sharp.js'
    }
  },
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});