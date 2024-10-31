import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://jillazquez.github.io',
  base: '/portfolio',
  integrations: [github()],
});
