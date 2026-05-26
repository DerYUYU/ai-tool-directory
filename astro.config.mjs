// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-tool-directory-orpin.vercel.app',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
