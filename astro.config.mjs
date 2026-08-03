// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//
// Known Astro bug (withastro/astro#16931): the @astrojs/cloudflare adapter's
// default image service emits runtime /_image?href=... URLs even when
// output is 'static', and those URLs 404 on Cloudflare Workers because
// there's no server function to handle them. imageService: 'compile' is
// the documented fix — it forces Astro to bake real static .webp files
// into dist/client/_astro/ at build time instead, referenced directly in
// the HTML with no runtime endpoint involved at all.
export default defineConfig({
  site: 'https://scandinavianclinic.com',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile'
  }),
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});