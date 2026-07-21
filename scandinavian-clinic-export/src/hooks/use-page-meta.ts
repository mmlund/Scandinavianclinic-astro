import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  /** Explicit page-level canonical. Accepts an absolute URL or a path like "/about-me". */
  canonical?: string;
  /** When true, emits <meta name="robots" content="noindex,nofollow"> and removes any canonical. */
  noindex?: boolean;
  jsonLd?: object | object[];
}

const JSON_LD_ID = "page-jsonld";
const ROBOTS_ID = "page-robots";
const CANONICAL_HOST = "https://scandinavianclinic.com";

/**
 * Build a clean canonical URL:
 *  - drops query strings and hash fragments
 *  - normalizes trailing slashes (only "/" keeps its slash; all other paths have it stripped)
 *  - always uses the canonical host
 */
const buildCanonical = (input?: string): string => {
  let path: string;

  if (input) {
    try {
      const url = new URL(input, CANONICAL_HOST);
      path = url.pathname;
    } catch {
      path = input.startsWith("/") ? input : `/${input}`;
      // strip any accidental query / hash from raw strings
      path = path.split("?")[0].split("#")[0];
    }
  } else if (typeof window !== "undefined") {
    path = window.location.pathname;
  } else {
    path = "/";
  }

  // Normalize trailing slash: keep "/" only for the root.
  if (path.length > 1 && path.endsWith("/")) {
    path = path.replace(/\/+$/, "");
  }
  if (!path.startsWith("/")) path = `/${path}`;

  return `${CANONICAL_HOST}${path}`;
};

const removeCanonical = () => {
  const link = document.querySelector('link[rel="canonical"]');
  if (link) link.remove();
};

const setCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", href);
};

const setRobotsNoindex = (enabled: boolean) => {
  let tag = document.getElementById(ROBOTS_ID) as HTMLMetaElement | null;
  if (enabled) {
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "robots");
      tag.id = ROBOTS_ID;
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", "noindex,nofollow");
  } else if (tag) {
    tag.remove();
  }
};

/**
 * Keep canonical in sync with the current route during client-side navigation.
 * IMPORTANT: only call this for routes that are valid, indexable pages —
 * never for 404s or non-public pages.
 */
export const syncCanonicalToCurrentPath = () => {
  if (typeof window === "undefined") return;
  // Don't emit a canonical until a page has explicitly declared one via usePageMeta.
  // Pages opt-in by calling usePageMeta, which sets the canonical itself.
  // This function is a no-op safeguard against stale canonicals across nav.
  const existing = document.querySelector('link[rel="canonical"]');
  if (!existing) return;
  setCanonical(buildCanonical());
};

export const usePageMeta = ({ title, description, canonical, noindex, jsonLd }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    if (noindex) {
      setRobotsNoindex(true);
      removeCanonical();
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.removeAttribute("content");
    } else {
      setRobotsNoindex(false);
      setCanonical(buildCanonical(canonical));
    }

    // Remove any existing page-specific JSON-LD
    const existing = document.getElementById(JSON_LD_ID);
    if (existing) existing.remove();

    if (jsonLd && !noindex) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = JSON_LD_ID;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const node = document.getElementById(JSON_LD_ID);
      if (node) node.remove();
    };
  }, [title, description, canonical, noindex, jsonLd]);
};
