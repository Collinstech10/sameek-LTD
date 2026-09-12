# SAMEEK Design & Construction — Website

A single-page marketing site for SAMEEK Design & Construction Limited, built with
React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Services, Projects, ...)
  data/         Content, separate from UI — edit here to change copy/services/projects
  index.css     Design tokens (colors, fonts) and global styles
```

## Replacing placeholder content

- **Projects** (`src/data/projects.ts`): every entry is currently a placeholder
  (`isPlaceholder: true`) using stock photography, clearly not real SAMEEK work.
  Replace `image` with a real project photo (URL or a local import from
  `src/assets`), update `name`, `location`, and `category`, and remove the
  `isPlaceholder` flag and the "Placeholder" badge logic in
  `src/components/Projects.tsx` once real photos are in place.
- **Services** (`src/data/services.ts`): copy and imagery for the seven listed
  services — swap in real project photography per service if available.
- **Company details**: address, email, and RC number are already wired into
  `Footer.tsx` and `Contact.tsx` from the info provided. Update there if anything
  changes.
- **Hero and section images**: currently sourced from Unsplash as realistic
  stand-ins. Swap the `src` in `Hero.tsx`, `About.tsx`, and `CTA.tsx` for real
  site/building photography when available.

## Notes

- No 3D libraries are used anywhere in this project, per the design brief.
- Fonts: Cormorant Garamond (display) + Inter (body), loaded via Google Fonts in
  `index.html`.
- `prefers-reduced-motion` is respected globally (see `src/index.css`).
- `public/robots.txt` and `public/sitemap.xml` are included; update the domain in
  both once the site has a live URL.
