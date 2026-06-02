import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './dist',
  publicDir: './public',
  build: {
    assets: '_astro',
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
