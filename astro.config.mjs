import { defineConfig } from 'astro/config';

// Minimal Astro config for MVP setup
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.kabislab.com',
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        external: ['decap-cms-app']
      }
    }
  }
});
