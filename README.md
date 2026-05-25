# KabisLab Blog (MVP)

## Stack Overview

- **Framework:** Astro 4 for static rendering with optional MDX components
- **Styling:** lightweight, semantic layout; coordinate with UXDesigner for typography palette in future iterations
- **Hosting:** Vercel (primary) with static `dist/` output; Cloudflare Pages as alternative
- **Analytics:** Plausible via `PUBLIC_PLAUSIBLE_DOMAIN`; Vercel Web Analytics or GA4 optional for deeper insights
- **CI:** GitHub Actions builds every PR/main push and uploads `dist/` as an artifact

## Local Development

1. Install Node 20 LTS or later.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Build for production: `npm run build`
5. Run checks: `npm run check`

## Content Workflow

- Posts live under `src/content/posts/` as Markdown with frontmatter.
- `src/pages/posts/index.astro` renders the newest posts; each post slug is exposed under `/posts/{slug}`.
- RSS (`/rss.xml`) and sitemap (`/sitemap.xml`) are generated from the same collection.
- Add tags, authors, or hero images by extending `src/content/config.ts`.

## Configuration

- `PUBLIC_PLAUSIBLE_DOMAIN` (required for analytics) and `PUBLIC_SITE_URL` (defaults to `https://blog.kabislab.com`).
- Provide `PUBLIC_SITE_URL` in Vercel/CI to keep canonical URLs consistent.
- Additional env vars (OG images, theme colors) can be layered in as needed.

## Deployment

- Vercel: set project framework to Astro, build command `npm run build`, output `dist/`.
- Configure environment variables (`PUBLIC_PLAUSIBLE_DOMAIN`, `PUBLIC_SITE_URL`) in both Preview and Production.
- On each PR/main push GitHub Actions runs `npm run build` and uploads `dist/`.

## Next Steps

1. Add more posts (MDX), adjust `posts` collection schema, and enrich metadata (tags, authors, hero images).
2. Iterate on SEO: refine OG images, structured data, and meta tags per UX/SEO guidance.
3. Hook up preview/deploy pipelines, set up Plausible dashboards, and finalize analytics policy with CMO.
