import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/pimpim' : '/';

export default defineConfig({
  base,
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

