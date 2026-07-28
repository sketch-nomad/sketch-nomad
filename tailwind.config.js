import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--aw-color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--aw-color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--aw-color-accent) / <alpha-value>)',
        default: 'rgb(var(--aw-color-text-default) / <alpha-value>)',
        muted: 'var(--aw-color-text-muted)',
        heading: 'rgb(var(--aw-color-text-heading) / <alpha-value>)',
        surface: 'rgb(var(--aw-color-surface) / <alpha-value>)',
        edge: 'var(--aw-color-border)',
        page: 'rgb(var(--aw-color-bg-page) / <alpha-value>)',
        'page-dark': 'rgb(var(--aw-color-bg-page-dark) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--aw-font-mono, ui-monospace)', ...defaultTheme.fontFamily.mono],
      },

      animation: {
        fade: 'fadeInUp .3s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
