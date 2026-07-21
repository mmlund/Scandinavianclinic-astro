# Scandinavian Clinic — Tracking & SEO Target-State Spec (for the Astro build)
**Prepared:** July 20, 2026
**Purpose:** Define the tracking, consent, and SEO setup the NEW Astro site should ship with. This is a build specification — implement it once, in Astro, at migration. Do NOT retrofit these onto the retiring Lovable/Vite draft.
**Decisions captured:** Google Ads = active/soon (wire conversion). Consent = Canada-compliant (Quebec Law 25 standard, covers all of Canada).

---

## Guiding principle
The retiring Vite/Lovable draft is not the live site (WordPress is). Fixing tracking/consent/SEO on the draft is throwaway work. All of the below is implemented fresh in the Astro build and goes live at the WordPress → Astro cutover.

---

## 1. Analytics — target state

### Remove entirely
- **Custom first-party tracker (DigitalTrackingSite).** Delete `src/lib/tracking.ts` and all calls. Do NOT reimplement in Astro — GA4 covers what it did (page views, scroll depth) natively.
- **Separate cleanup (outside the site):** decommission the Render service `digitaltrackingsite.onrender.com` to stop any ongoing cost. If any historical data there matters, export it BEFORE shutting it down.

### Keep and set up properly
- **GA4 as the single analytics system.**
  - Consolidate to ONE GA4 property as system of record. The live WordPress uses a GTM container; the draft uses direct tag `G-SGGM6T75JR`. Decide which property continues, so data has continuity across the cutover rather than splitting into two histories. (Action for Mats: confirm which GA4 property is the keeper.)
  - Add the currently-missing events that matter for a clinic: **booking-link click, `tel:` click, `mailto:` click, outbound intake-link click.** These are how site-generated contact is measured.
- **Google Ads (AW-967525732) — active, so wire it correctly.**
  - Keep the pixel, but it must be consent-gated (see §2).
  - **Add the booking conversion event** (fires when a visitor clicks BOOK NOW / the external booking link). Without this, ad ROI is unmeasurable — this is the single highest-value tracking fix, and it directly supports the precision-ad strategy (measure whether spend produces actual bookings).

---

## 2. Consent — target state (Canada / Quebec Law 25 standard)

**Requirement in plain terms:** Advertising and profiling cookies (GA4 + Google Ads) require meaningful consent under federal PIPEDA; Quebec Law 25 requires *opt-in before any tracking fires*, re-asked every 6 months. Implementing the strictest (Law 25) covers all of Canada in one configuration.

**Implementation:**
- A consent banner on first visit. **No analytics or ads cookies fire until the visitor accepts** (opt-in / consent-denied by default).
- Use **Google Consent Mode v2**: on "denied," Google tags send cookieless signals so aggregate/modeled data is still available without setting identifiers.
- Provide clear Accept / Decline, a short plain-language explanation, and a way to change the choice later.
- Re-request consent every 6 months (Law 25).
- Keep a simple record of consent state.

**Trade-off (accepted):** opt-in-by-default means declined visitors aren't fully measured; expect lower raw analytics volume than today. Consent Mode v2 mitigates via modeled data. This is the cost of Canada-wide compliance.

**Caveats:** Not legal advice. The clinic separately handles patient health data under BC PIPA — that's a distinct obligation from website cookies; a quick professional check is advisable. A privacy policy page should back the banner.

---

## 3. SEO — target state

Most of the current SEO machinery is a workaround for the old SPA and is *replaced by Astro's native static rendering*, not ported.

### Fixed for free by the migration (Astro outputs real static HTML)
- Per-page `<title>`, meta description, canonical, Open Graph, Twitter, and JSON-LD land in the initial HTML — no hydration, no Puppeteer prerender, no `usePageMeta` DOM injection. Delete all three mechanisms.
- Gap where schema only appears post-hydration disappears — the graph is in the static HTML.

### Explicit requirements to preserve / improve
- **Per-page SEO via Astro layout props / frontmatter:** title, description, canonical, robots, JSON-LD. Canonical rules as today (https, strip query/hash, strip trailing slash except root).
- **Per-page `og:image`.** Currently hardcoded to the Home image on every page — fix so each page can set its own (frontmatter prop, Home value as fallback).
- **JSON-LD schemas** from `src/lib/schemas.ts` are framework-agnostic — carry over as-is (shared MedicalBusiness `@id` graph, WebSite, Person, MedicalWebPage, condition/therapy nodes, BreadcrumbList, OpeningHours, PostalAddress, GeoCoordinates, ReserveAction). Emit the appropriate graph per indexable page.
- **noindex handling via config, not a runtime hack.** Replace the `main.tsx` host-gate MutationObserver with proper controls: noindex per-page for the marked pages (Payment, Draft, NotFound, NotUsed, ICBC placeholder), and env-based noindex for non-production/preview deploys.
- **Sitemap:** regenerate with `@astrojs/sitemap` (or equivalent), re-encoding the current include / exclude / priority logic. Keep noindex/excluded routes out.
- **robots.txt:** keep in sync with sitemap exclusions; point to the production sitemap URL.
- **Keep geo meta tags** (geo.region, placename, position, ICBM).
- **GA4 + Ads tags** move from the hardcoded `index.html` block into the Astro base layout `<head>`, loaded through the consent gate (§2), not unconditionally.

---

## 4. Append to the Antigravity migration prompt
Add this condensed block to the planning prompt so the plan accounts for it:

> **Tracking & SEO target state (implement in Astro, do not port the old setup):**
> - Remove the custom first-party tracker entirely (GA4 replaces it). Note: the external Render tracking service is decommissioned separately.
> - GA4 is the single analytics system; consolidate to one property for cutover continuity; add events for booking-link, tel:, mailto:, and outbound-intake clicks.
> - Google Ads is active: keep the pixel (consent-gated) and add a booking conversion event on the BOOK NOW / external booking click.
> - Consent: Canada / Quebec Law 25 standard — opt-in banner, no analytics/ads cookies fire until accepted, Google Consent Mode v2, 6-month re-consent, backed by a privacy policy page. Plan this as a component in the base layout.
> - SEO: replace usePageMeta, the Puppeteer prerender, and the host-gate with native Astro static `<head>` + per-page frontmatter (title/description/canonical/robots/JSON-LD), per-page og:image, native sitemap with the current include/exclude/priority logic, robots.txt parity, and env-based noindex for non-production deploys. Carry schemas.ts over as-is.
> Include all of this in the phased plan and flag any assumptions.
