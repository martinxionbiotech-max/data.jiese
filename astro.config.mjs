import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.DATA_SITE_URL || 'https://data.selfcontrolatlas.com';
export default defineConfig({
  site, integrations: [sitemap({
    filter: (page) => !page.includes('/experiences/synthetic-'),
  })],
  vite: { server: { fs: { allow: ['/home/openclaw/jiese'] } } },
});
