// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitooldir.vercel.app', // nach Deploy ersetzen
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
