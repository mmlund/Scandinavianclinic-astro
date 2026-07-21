import fs from "node:fs";
import path from "node:path";
import { SITE_URL, SITEMAP_ROUTES } from "./sitemap-config";

/**
 * Returns the most recent mtime among the source files that affect a given route.
 * Falls back to "now" if no specific mapping is found.
 */
function getRouteLastMod(routePath: string, projectRoot: string): Date {
  const candidates: string[] = [];

  // Map routes -> source files that, when changed, should bump lastmod.
  const map: Record<string, string[]> = {
    "/": ["src/pages/Index.tsx", "src/components/Hero.tsx", "src/components/Services.tsx"],
    "/r-m-t": ["src/pages/RMT.tsx"],
    "/d-n-s": ["src/pages/DNS.tsx"],
    "/services": ["src/pages/Services.tsx", "src/components/Services.tsx"],
    "/conditions": ["src/pages/ConditionsTreated.tsx"],
    "/conditions/back-pain-treatment-north-vancouver": ["src/pages/BackPainTreatmentNorthVancouver.tsx"],
    "/rmt-core1": ["src/pages/RMTCore1.tsx"],
    "/rmt-core3": ["src/pages/RMTCore3.tsx"],
    "/about-me": ["src/pages/AboutMe.tsx"],
    "/facilities": ["src/pages/Facilities.tsx"],
    "/education": ["src/pages/Education.tsx"],
    "/hours": ["src/pages/Hours.tsx"],
    "/contact": ["src/pages/Contact.tsx", "src/components/Contact.tsx"],
    "/booking": ["src/pages/Booking.tsx", "src/components/Booking.tsx"],
  };

  const files = map[routePath] ?? [];
  for (const f of files) {
    const abs = path.join(projectRoot, f);
    if (fs.existsSync(abs)) candidates.push(abs);
  }

  let latest = 0;
  for (const file of candidates) {
    try {
      const stat = fs.statSync(file);
      if (stat.mtimeMs > latest) latest = stat.mtimeMs;
    } catch {
      // ignore missing files
    }
  }
  return latest > 0 ? new Date(latest) : new Date();
}

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

export function buildSitemapXml(projectRoot: string): string {
  const urls = SITEMAP_ROUTES.map((r) => {
    const loc = `${SITE_URL}${r.path === "/" ? "/" : r.path}`;
    const lastmod = formatDate(getRouteLastMod(r.path, projectRoot));
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority.toFixed(1)}</priority>`,
      "  </url>",
    ].join("\n");
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function writeSitemap(projectRoot: string): string {
  const xml = buildSitemapXml(projectRoot);
  const outPath = path.join(projectRoot, "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  return outPath;
}
