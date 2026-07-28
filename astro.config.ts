import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

import { unified } from '@astrojs/markdown-remark';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',
  site: 'https://sketchnomad.com',
  compressHTML: true,
  // Old/renamed URLs that may still be linked externally or indexed by search engines.
  // Astro emits a redirect page for these on static builds.
  redirects: {
    '/history-of-plein-air-painting': '/plein-air-history/',
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
          path !== '/plein-air-painting-app/' &&
          !path.match(/\/\d+\/$/)
        );
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

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
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
    build: {
      // Astro 7 / Vite 8's default CSS minifier (Lightning CSS, via Rolldown) has a bug that
      // silently drops every `@media (min-width: ...)` block it processes on this project's
      // Tailwind output — i.e. ALL responsive (`sm:`/`md:`/`lg:`/`xl:`) styles vanish from the
      // production build only (dev mode is unaffected), while everything looks fine visually
      // until you resize past a breakpoint. `astro-compress` (csso) still minifies the CSS
      // afterwards, so disabling Vite's own pass here doesn't cost us an unminified stylesheet.
      cssMinify: false,
    },
  },
});
