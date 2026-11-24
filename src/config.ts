import type { MetaData } from './types';

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
}
export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string;
    template: string;
  };
}
export interface I18NConfig {
  language: string;
  textDirection: string;
  dateFormatter?: Intl.DateTimeFormat;
}
export interface AppBlogConfig {
  isEnabled: boolean;
  postsPerPage: number;
  isRelatedPostsEnabled: boolean;
  relatedPostsCount: number;
  post: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  list: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  category: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  tag: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}
export interface AnalyticsConfig {
  vendors: {
    googleAnalytics: {
      id?: string;
      partytown?: boolean;
    };
  };
}

export interface UIConfig {
  theme: string;
}

export const SITE: SiteConfig = {
  name: 'Sketch Nomad',
  site: 'https://sketchnomad.com',
  base: '/',
  trailingSlash: true,
  googleSiteVerificationId: 'G4a_7zqGSvsklpVeSe95HzT1TW4V498Ost4ln_tDUFk',
};

export const I18N: I18NConfig = {
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA: MetaDataConfig = {
  title: {
    default: 'Sketch Nomad – Urban Sketchers, Plein Air & Outdoor Artists',
    template: '%s | Sketch Nomad',
  },
  description:
    'A community for urban sketchers, plein air painters, outdoor artists, and travel sketchers. Tag sketches to a place, find pleinair spots, and connect worldwide.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    site_name: 'Sketch Nomad – Plein Air Sketchers Community',
    images: [{ url: '~/assets/images/og-default.png', width: 1200, height: 630 }],
  },
};

export const APP_BLOG: AppBlogConfig = {
  isEnabled: true,
  postsPerPage: 6,
  isRelatedPostsEnabled: true,
  relatedPostsCount: 4,
  post: { isEnabled: true, permalink: '/%slug%', robots: { index: true, follow: true } },
  list: { isEnabled: true, pathname: 'blog', robots: { index: true, follow: true } },
  category: { isEnabled: true, pathname: 'category', robots: { index: true, follow: true } },
  tag: { isEnabled: true, pathname: 'tag', robots: { index: false, follow: true } },
};

export const UI: UIConfig = { theme: 'system' };

export const ANALYTICS: AnalyticsConfig = {
  vendors: { googleAnalytics: { id: 'G-GTT0NGWRGQ' } },
};
