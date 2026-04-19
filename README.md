# HitSmart Marketing Site

Single-page marketing site for HitSmart built with Next.js 14, TypeScript, Tailwind CSS, and a minimal shadcn/ui setup.

## Local development

1. Run `npm install`
2. Run `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Where to edit copy

All editable content lives in [config/site.ts](/Users/milesaustin/Desktop/hitsmart%20wesbite/config/site.ts):

- Hero headline and subheadline
- Philosophy paragraph
- "Who this is for" lines
- Recent letter titles, dates, and URLs
- Substack URLs
- Final CTA text
- Social links
- SEO title and description

You should not need to touch layout code for normal copy changes.

## Substack links

Update these fields in [config/site.ts](/Users/milesaustin/Desktop/hitsmart%20wesbite/config/site.ts):

- `subscribeUrl`: used by the header link and the main email capture CTAs
- `lettersArchiveUrl`: used by the "Read all letters" link under Recent Letters

## Deploying to Vercel

1. Push this project to GitHub
2. Import the repo into Vercel
3. Vercel will detect Next.js automatically
4. Deploy with the default build settings

## Project structure

- [app/page.tsx](/Users/milesaustin/Desktop/hitsmart%20wesbite/app/page.tsx): homepage layout
- [app/layout.tsx](/Users/milesaustin/Desktop/hitsmart%20wesbite/app/layout.tsx): metadata and font setup
- [app/globals.css](/Users/milesaustin/Desktop/hitsmart%20wesbite/app/globals.css): global styles and theme tokens
- [components/ui/button.tsx](/Users/milesaustin/Desktop/hitsmart%20wesbite/components/ui/button.tsx): shadcn-style button component
- [config/site.ts](/Users/milesaustin/Desktop/hitsmart%20wesbite/config/site.ts): all editable site content
