// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site:"https://leivaassistants.netlify.app/",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), icon()],
});
