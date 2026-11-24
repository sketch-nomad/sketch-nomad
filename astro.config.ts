import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

import { unified } from '@astrojs/markdown-remark';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  site: 'https://sketchnomad.com',
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  // Old/renamed URLs that may still be linked externally or indexed by search engines.
  // Astro emits a redirect page for these on static builds.
  redirects: {
    '/history-of-plein-air-painting': '/plein-air-history/',
    '/roadmap': '/about/',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => {
        const path = new URL(page).pathname;
        return (
          !path.startsWith('/tag/') &&
          path !== '/contact/thank-you/' &&
          !path.match(/\/\d+\/$/)
        );
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        const highIntent: Record<string, number> = {
          '/': 1.0,
          '/plein-air-hub/': 0.9,
          '/blog/': 0.8,
          '/urban-sketchers/': 0.8,
          '/plein-air-history/': 0.8,
        };
        item.priority = highIntent[path] ?? item.priority ?? 0.7;
        return item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    }),
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
