import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Host gate: prevent indexing on any non-canonical domain (Lovable preview,
// published .lovable.app, staging, etc.). Only the production domain may be
// indexed. This runs before React mounts so the tag is present for crawlers
// that don't execute much JS, and it overrides any per-page canonical/robots
// logic by being re-asserted on every route change below.
const CANONICAL_HOST = "scandinavianclinic.com";

const isCanonicalHost = (hostname: string): boolean => {
  if (typeof window !== "undefined" && (window as any).__PRERENDERING) return true;
  return hostname === CANONICAL_HOST || hostname === `www.${CANONICAL_HOST}`;
};

const enforceHostRobots = () => {
  if (typeof window === "undefined") return;
  if (isCanonicalHost(window.location.hostname)) return;

  // Force noindex,nofollow regardless of what usePageMeta sets.
  let robots = document.querySelector(
    'meta[name="robots"][data-host-gate="1"]'
  ) as HTMLMetaElement | null;
  if (!robots) {
    robots = document.createElement("meta");
    robots.setAttribute("name", "robots");
    robots.setAttribute("data-host-gate", "1");
    document.head.appendChild(robots);
  }
  robots.setAttribute("content", "noindex, nofollow");

  // Remove any canonical link — we don't want non-canonical hosts pointing
  // to themselves, and we also don't want them claiming to be the prod URL
  // (that can create confusing signals during crawl).
  document.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
};

enforceHostRobots();

// Re-assert after each microtask in case usePageMeta on a route mounts and
// removes/overwrites the robots tag. MutationObserver keeps it sticky.
if (typeof window !== "undefined" && !isCanonicalHost(window.location.hostname)) {
  const observer = new MutationObserver(() => {
    const tag = document.querySelector('meta[name="robots"][data-host-gate="1"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!tag || canonical) enforceHostRobots();
  });
  observer.observe(document.head, { childList: true, subtree: true });
}

createRoot(document.getElementById("root")!).render(<App />);
