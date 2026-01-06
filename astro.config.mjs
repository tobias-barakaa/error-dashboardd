import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Change from 'static' to 'server'
  adapter: node({
    mode: 'standalone'
  })
});