import type { Plugin } from "vite";
import path from "node:path";
import { writeSitemap } from "./generate-sitemap";

/**
 * Vite plugin that auto-generates public/sitemap.xml on dev server start
 * and on every build. Also re-generates when any src/pages/** file changes.
 */
export function sitemapPlugin(): Plugin {
  const projectRoot = process.cwd();

  return {
    name: "scandi-sitemap",
    apply: () => true,
    buildStart() {
      try {
        const out = writeSitemap(projectRoot);
        this.info?.(`sitemap.xml generated -> ${path.relative(projectRoot, out)}`);
      } catch (e) {
        this.warn?.(`sitemap generation failed: ${(e as Error).message}`);
      }
    },
    configureServer(server) {
      try {
        writeSitemap(projectRoot);
      } catch {
        // ignore
      }
      server.watcher.on("change", (file) => {
        if (file.includes(`${path.sep}src${path.sep}pages${path.sep}`)) {
          try {
            writeSitemap(projectRoot);
          } catch {
            // ignore
          }
        }
      });
    },
  };
}
