// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone', // permet d'exécuter le serveur directement avec Node/PM2
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
