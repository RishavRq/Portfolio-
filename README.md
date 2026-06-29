# Rishav Sharma — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js (React Three Fiber),
and Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

Deploys cleanly to Vercel with zero config — just connect the repo.

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, SEO metadata, providers
    page.tsx           Assembles every section in order
    sitemap.ts          Dynamic sitemap
    globals.css         Design tokens, scrollbar, focus states, noise overlay
  components/
    sections/           One file per page section (Hero, About, Journey, …)
    three/               Three.js particle hero scene + client-safe wrapper
    ui/                  Reusable primitives (SectionHeading, MagneticButton)
    providers/           SmoothScrollProvider (Lenis + reduced-motion config)
  hooks/
    useLenis.ts          Lenis smooth scroll wired to GSAP's ticker
    useMagnetic.ts        Magnetic hover-pull effect for buttons
  lib/
    content.ts           ALL copy and data lives here — edit this file to
                          update text, projects, skills, or timeline entries
    utils.ts              cn() class-merge helper
```

## Editing content

Everything text-based — the headline, About copy, timeline entries, skills,
projects, GitHub repo cards, the philosophy quote, contact details — lives in
`src/lib/content.ts`. Components read from this file; you should never need
to touch component code just to change a word or add a project.

## Wiring up live GitHub data

The GitHub section (`src/components/sections/GithubShowcase.tsx`) currently
renders static cards from `GITHUB_REPOS_FALLBACK` in `content.ts`. To pull
live repo data instead:

1. Create `src/app/api/github/route.ts` that fetches
   `https://api.github.com/users/rishav-ethic/repos?sort=updated` server-side.
2. Convert `GithubShowcase` into (or call from) a Server Component that
   fetches that route and maps the response into the same card shape.

No markup changes are needed beyond swapping the data source.

## Design tokens

Defined in `tailwind.config.js`:

- **Colors**: `void` (#0A0A0B background), `graphite` (surface/elevated/border
  grays), `gold` (#C9A24B accent), `ivory` (text, with `dim`/`faint` variants)
- **Type**: `font-display` (Manrope, standing in for Geist), `font-body`
  (Inter), `font-mono` (JetBrains Mono) — see the comment in `layout.tsx` for
  swapping in the real Geist font via `npm install geist`
- **Signature element**: the animated gold "build line" that runs from the
  hero into the Journey timeline, tying the page's narrative together

## Notes

- Dark mode only, by design — no theme toggle.
- `prefers-reduced-motion` is respected globally via Framer Motion's
  `MotionConfig` plus manual checks in the Lenis and magnetic-button hooks.
- The Three.js hero scene is dynamically imported client-side only and
  swaps to a static gold-glow gradient when reduced motion is requested.
