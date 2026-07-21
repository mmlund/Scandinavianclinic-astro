// Central sitemap route configuration.
// To add/remove a page from the sitemap, edit this list.
// Pages excluded here (admin, drafts, payment, duplicates) will NOT be indexed.

export type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: ChangeFreq;
}

export const SITE_URL = "https://scandinavianclinic.com";

// Indexable routes only. Excludes: /draft, /payment, /backpain, /rmt-core2,
// /first-visit (canonical via /conditions), /testimonials duplicate of homepage section,
// and any internal/test pages.
export const SITEMAP_ROUTES: SitemapRoute[] = [
  // Home — highest priority
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // Primary service / treatment pages
  { path: "/r-m-t", priority: 0.9, changefreq: "monthly" },
  { path: "/d-n-s", priority: 0.9, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/back-pain-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/sciatica-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/neck-pain-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/tennis-elbow-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/headaches-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/shoulder-injury-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },
  { path: "/conditions/hip-pain-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" },

  // Local SEO landing pages
  { path: "/rmt-core1", priority: 0.8, changefreq: "monthly" },
  { path: "/rmt-core3", priority: 0.8, changefreq: "monthly" },

  // Supporting clinic info
  { path: "/about-me", priority: 0.7, changefreq: "monthly" },
  { path: "/facilities", priority: 0.6, changefreq: "monthly" },
  { path: "/education", priority: 0.6, changefreq: "monthly" },
  { path: "/hours", priority: 0.6, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },

  // Booking funnel
  { path: "/booking", priority: 0.6, changefreq: "monthly" },
];
