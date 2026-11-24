// `@astrojs/tailwind` is deprecated and its peer deps top out at Astro 5, so it silently
// breaks in newer Astro versions (production builds stop generating `md:`/`lg:` etc.
// responsive variants, even though `astro dev` still looks fine). Tailwind v3 is wired in
// directly through PostCSS instead, per Astro's own migration guidance.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
