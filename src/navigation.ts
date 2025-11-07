import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Roadmap',
      href: getPermalink('/roadmap'),
    },
    {
      text: 'Changelog',
      href: getPermalink('/changelog'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Launch App', href: 'https://sketchnomad.app', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: 'Plein Air Hub', href: getPermalink('/plein-air-hub') },
        { text: 'Mobile App', href: getPermalink('/plein-air-painting-app') },
      ],
    },
    {
      title: 'Development',
      links: [
        { text: 'Roadmap', href: getPermalink('/roadmap') },
        { text: 'Changelog', href: getPermalink('/changelog') },
      ],
    },
    {
      title: 'Content',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Launch App', href: 'https://sketchnomad.app', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sketchnomad.app/' },
  ],
  footNote: `
    © 2025 Sketch Nomad · Contact: <a class="text-blue-600 underline dark:text-muted" href="mailto:info@sketchnomad.com">info@sketchnomad.com</a> · All rights reserved.
  `,
};
