// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ai-tool-directory-orpin.vercel.app',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
});
