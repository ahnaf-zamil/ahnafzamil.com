# Project Overview

## Identity

Personal portfolio/landing page for **K M Ahnaf Zamil** — Backend Systems & AI Engineer.
Single-page marketing site with a contact page.

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 16.2.9 (App Router) | RSC by default; pages opt in with `"use client"` |
| Language | TypeScript 5 (strict) | Path alias `@/*` → `./src/*` |
| Rendering | Full static | No server-side data fetching; all content hardcoded |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | CSS-first config via `globals.css` `@import "tailwindcss"` |
| UI Library | shadcn/ui (base-nova style) | Uses `@base-ui/react` primitives (not Radix) |
| Animation | None (removed) | Curtain + ScrollReveal stripped; Hero uses plain CSS `fadeIn` only. GSAP deps remain in package.json but unused |
| Particles | tsparticles v4 (slim + configs) | Initialized in ParticlesBackground component using `@tsparticles/configs` basic preset |
| Icons | lucide-react + devicon CDN | Lucide for UI icons; devicon CSS loaded in layout |
| Fonts | Fontshare (General Sans, Bespoke Stencil) + Google Fonts (JetBrains Mono) | Loaded via `<link>` in layout |
| Package mgr | bun | Enforced by `AGENTS.md` |

## Source Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout — fonts, meta, OG tags
│   ├── page.tsx            # Home page — composes all sections
│   ├── globals.css         # Tailwind import + CSS variables + utilities
│   ├── contact/
│   │   └── page.tsx        # Contact form (mailto: based)
│   └── favicon.ico
├── components/
│   ├── ui/                 # shadcn primitives (badge, button, card, input, label, separator, textarea)
│   ├── icons/              # SVG icon components (GitHubIcon, LinkedInIcon, AnthropicIcon, ConvexIcon, MastraIcon, OpenAIIcon)
│   ├── Navbar.tsx            # Navigation with mobile hamburger
│   ├── Hero.tsx              # Landing hero with particles background
│   ├── ParticlesBackground.tsx # Client component — tsparticles initialization
│   ├── About.tsx             # Bio text
│   ├── Projects.tsx        # Featured projects grid
│   ├── Testimonials.tsx    # Client testimonials cards
│   ├── TechnicalAreas.tsx  # Expertise sections with bullet lists
│   ├── TechStack.tsx       # Technology logos grid
│   ├── Blog.tsx            # Blog post cards (links to dev.to)
│   └── Footer.tsx          # Links + copyright
└── lib/
    └── utils.ts            # cn() — clsx + tailwind-merge utility
```

## Features

1. **Particle background** — Subtle animated particles in hero (ParticlesBackground, client-side)
2. **Contact form** — Opens `mailto:` link; no server submission
4. **Responsive** — Tailwind breakpoints (sm/md/lg) with mobile hamburger menu
5. **SEO** — Static metadata in layout (OG, Twitter cards)

## External Links

- GitHub: https://github.com/ahnaf-zamil
- LinkedIn: https://linkedin.com/in/ahnafzamil
- Blog: https://dev.to/ahnafzamil
- Calendly: https://calendly.com/ahnafzamil/30min
- Email: ahnaf@ahnafzamil.com

## Build / Deploy

- `bun dev` — development server
- `bun run build` — static export
- `bun run lint` — ESLint (Next.js config)
- Deployed to Vercel (inferred from Next.js defaults, no config file)