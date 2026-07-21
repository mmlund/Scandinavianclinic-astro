# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/661589c9-c05b-4066-a49a-57fa54069f70

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/661589c9-c05b-4066-a49a-57fa54069f70) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## SEO Prerendering & Lovable Coordination

This project includes a custom build-time prerendering step to ensure search engines (like Google) and social media platforms can index the fully rendered pages (including dynamic `<title>` and `<meta>` tags set by `usePageMeta`) rather than the empty SPA shell.

### How it works
1. **Dependencies**: Uses `puppeteer`, `serve`, and `tsx` (added to `devDependencies`).
2. **Script (`scripts/prerender.ts`)**: A custom Node script that parses `scripts/sitemap-config.ts` (excluding private routes), serves the `dist/` directory locally, and uses a headless browser to visit each route. It waits for the `link[rel="canonical"]` tag to be injected, then saves the fully rendered HTML back to `dist/<route>/index.html`. It also injects a `window.__PRERENDERING` flag to bypass the `src/main.tsx` canonical host security gate.
3. **Verification**: Prerendered pages will contain `<html data-prerendered="true">` in the source code.

### Coordination with Lovable (IMPORTANT)
Lovable's preview environment is fast and lightweight, and running a headless Chrome browser (Puppeteer) during Lovable's automated builds is risky and can cause crashes. To prevent this, the prerender step is **decoupled** from the standard build command.

- **`"build": "vite build"`**: This is the standard command used by Lovable. It is fast and *does not* run the prerender script. **Lovable should continue using this script.**
- **`"build:prod": "vite build && bun run prerender"`**: This is the production build command. It should **only** be used by your production hosting provider (e.g., Render, Vercel, Netlify). 

**Instructions for Lovable AI**: 
Please leave `scripts/prerender.ts` and the `puppeteer`/`serve`/`tsx` dependencies intact. You may completely ignore the `"prerender"` and `"build:prod"` scripts in `package.json`, as they are intended strictly for the separate production deployment pipeline.

### Adding or Changing Pages (Workflow)
The prerendering pipeline runs **automatically** on Render every time code is pushed to GitHub (via Render's automatic GitHub webhooks). You do not need a separate GitHub Action. 

When modifying or adding pages, use the following workflow:

1. **Changing Text/Images on an Existing Page**
   - Just push to GitHub. Render automatically rebuilds the site, Puppeteer recrawls it, and the new HTML is instantly deployed.

2. **Adding a New Page to Google Search (Indexed)**
   - Open `scripts/sitemap-config.ts`.
   - Add the new route to the `SITEMAP_ROUTES` array.
   - Push to GitHub. The script automatically adds it to the sitemap XML and prerenders it.

3. **Adding a Hidden/Unlisted Page (SEO Preview Only)**
   - If you want a page to have a nice preview title/image when shared on social media, but DO NOT want it indexed in `sitemap.xml` (like a private promotion).
   - Open `scripts/prerender.ts`.
   - Add the route to the `EXTRA_ROUTES_TO_PRERENDER` array.
   - Push to GitHub.

4. **Adding an Internal/System Page (No SEO needed)**
   - If you add a route where SEO doesn't matter (e.g., a checkout portal or admin screen).
   - Open `scripts/prerender.ts`.
   - Add the route to the `EXCLUDED_ROUTES` array. 
   - Push to GitHub. The script will generate a lightweight shell file for it so that direct links still load correctly without a 404 error.

## What technologies are used for this project?


This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/661589c9-c05b-4066-a49a-57fa54069f70) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


## Pre-launch TODO

- `/icbc-rmt-north-vancouver` is a placeholder page (noindex, excluded from sitemap). Write full content before public launch, then remove `noindex: true` from `src/pages/IcbcRmtNorthVancouver.tsx` and add the route to `scripts/sitemap-config.ts`.
