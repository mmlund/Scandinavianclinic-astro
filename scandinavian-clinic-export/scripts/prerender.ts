import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { extname, join, resolve } from 'path';
import puppeteer from 'puppeteer';
import { SITEMAP_ROUTES } from './sitemap-config';
import fs from 'fs/promises';

const PORT = 3001;
const DIST_DIR = resolve(process.cwd(), 'dist');
const EXCLUDED_ROUTES = ['/payment', '/draft', '/rmt-core2', '/booking', '/404'];
const EXTRA_ROUTES_TO_PRERENDER = ['/first-visit', '/testimonials', '/backpain'];

const routesToRender = [
  ...SITEMAP_ROUTES.map(r => r.path),
  ...EXTRA_ROUTES_TO_PRERENDER
].filter(route => !EXCLUDED_ROUTES.includes(route));

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.svg': 'image/svg+xml',
};

let originalIndexHtml: Buffer | string;

// Simple static file server with SPA fallback
const server = createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url || '/', `http://localhost:${PORT}`);
    let reqPath = parsedUrl.pathname;
    const ext = String(extname(reqPath)).toLowerCase();
    
    // Always serve the original SPA shell for routes (no extension) or HTML requests.
    // This prevents Puppeteer from loading a previously prerendered HTML file
    // (like the overwritten home page), which would cause waitForSelector 
    // to resolve instantly before React can render the correct route's title.
    if (!ext || ext === '.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(originalIndexHtml);
      return;
    }

    let filePath = join(DIST_DIR, reqPath);
    let fileStat = await stat(filePath).catch(() => null);
    
    if (!fileStat || !fileStat.isFile()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const content = await readFile(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(500);
    res.end('Server error');
  }
});

async function main() {
  console.log('Reading original SPA shell...');
  originalIndexHtml = await readFile(join(DIST_DIR, 'index.html'));

  console.log(`Starting local server on port ${PORT}...`);
  await new Promise<void>((resolve) => {
    server.listen(PORT, () => resolve());
  });

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'], // Required for Render
  });

  try {
    const page = await browser.newPage();
    
    // Inject flag so React app knows it's being prerendered (bypasses main.tsx host checks)
    await page.evaluateOnNewDocument(() => {
      (window as any).__PRERENDERING = true;
    });

    // Capture browser console logs to debug React mounting issues
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));
    page.on('requestfailed', request => {
      console.error(`BROWSER NETWORK ERROR: ${request.url()} - ${request.failure()?.errorText}`);
    });

    for (const route of routesToRender) {
      console.log(`Prerendering ${route}...`);
      const url = `http://localhost:${PORT}${route}`;
      
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Try to wait for canonical link (indicates SEO meta tags are ready).
        // If it doesn't exist (e.g. user forgot usePageMeta or it's a new site), just proceed after 5s.
        try {
          await page.waitForSelector('link[rel="canonical"]', { timeout: 5000 });
        } catch (e) {
          console.log(`  ! No canonical link found for ${route}, proceeding with current HTML...`);
        }
        
        // Grab the fully rendered HTML and add data-prerendered
        let html = await page.evaluate(() => {
          document.documentElement.setAttribute('data-prerendered', 'true');
          return document.documentElement.outerHTML;
        });

        html = `<!DOCTYPE html>\n${html}`;

        if (route === '/') {
          // Home page overwrites the main index.html
          await fs.writeFile(join(DIST_DIR, 'index.html'), html);
        } else {
          // For other routes (e.g. /facilities), write to facilities.html
          // This allows Render to serve it as a Clean URL instead of falling back to the SPA rewrite rule.
          const targetFile = join(DIST_DIR, `${route}.html`);
          // Ensure directory exists if it's a nested route like /conditions/back-pain
          await fs.mkdir(resolve(targetFile, '..'), { recursive: true });
          await fs.writeFile(targetFile, html);
        }
        
        console.log(`  ✓ Success: ${route}`);
      } catch (err: any) {
        console.error(`  ✗ Failed: ${route}`, err.message);
      }
    }

    console.log('Writing raw SPA shells for excluded routes (for Render Clean URLs fallback)...');
    for (const route of EXCLUDED_ROUTES) {
      if (route === '/404') continue;
      const targetFile = join(DIST_DIR, `${route}.html`);
      await fs.mkdir(resolve(targetFile, '..'), { recursive: true });
      await fs.writeFile(targetFile, originalIndexHtml);
      console.log(`  ✓ Wrote shell for: ${route}`);
    }

    // Write a standard 404.html for Render
    await fs.writeFile(join(DIST_DIR, '404.html'), originalIndexHtml);
    console.log(`  ✓ Wrote 404.html fallback`);

  } finally {
    console.log('Closing browser and server...');
    await browser.close();
    server.close();
  }
}

main().catch(err => {
  console.error('Prerender process failed:', err);
  process.exit(1);
});
