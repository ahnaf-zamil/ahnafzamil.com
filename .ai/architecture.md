# Architecture

## Rendering Model

Fully static site. No API routes, no server actions, no database.
All content is hardcoded in component files.

- `layout.tsx` — server component (metadata, fonts, global CSS)
- `page.tsx` — server component composing section children
- `contact/page.tsx` — client component (`"use client"` for form state)
- All section components under `src/components/` — **server components** (no `"use client"`)
- Particles initialized client-side via `ParticlesBackground` (client boundary) in Hero

## Component Hierarchy

```
layout.tsx
└── page.tsx (Home)
    ├── Navbar
    ├── Hero
    │   └── ParticlesBackground (client)
    ├── About
    ├── Projects
    ├── Testimonials
    ├── TechnicalAreas
    ├── TechStack
    └── Blog
    └── Footer

contact/page.tsx (client)
    ├── Navbar
    └── Footer
```

## Animation Architecture

No JS animations. Hero uses plain CSS `@keyframes fadeIn` (defined in `globals.css`).
All previous GSAP-based systems (Curtain, ScrollReveal) removed.

## Data Flow

No data fetching. All data is:
- Inline arrays in components (Projects, Testimonials, TechStack, Blog)
- Inline strings in JSX (About, Hero, TechnicalAreas)
- Form submissions use `mailto:` — no backend

Event flow is unidirectional (React state):
- `Navbar` — `mobileMenuOpen` local state for hamburger toggle
- `ContactPage` — `formData`, `isSubmitting`, `submitted` local state

## Styling Architecture

Tailwind v4 with CSS-first config. Theme variables defined in `globals.css`:

```css
:root {
  --color-theme-bg: #101010;
  --color-theme-text: #e5e5e5;
  --color-theme-muted: #9ca3af;
  --color-theme-accent: #1e88e5;
  --color-theme-accent-2: #ffb300;
}
```

Classes like `bg-theme-bg`, `text-theme-text` reference these variables.
The `cn()` utility from `src/lib/utils.ts` merges Tailwind classes.

## Particles Architecture

`ParticlesBackground.tsx` is a client component that:
1. Imports `tsParticles` singleton from `@tsparticles/engine`
2. Registers slim preset via `loadSlim(tsParticles)`
3. Uses `@tsparticles/configs` basic preset as base config
4. Loads particles into `#tsparticles` div (rendered by Hero)
5. Destroys container on unmount via `tsParticles.item(0)?.destroy()`

## Known Issues / Oddities

- `useReducedMotion()` always returns `false` (stub in deleted useScrollReveal hook — file removed but symbol no longer referenced)
- Navbar duplicates GitHub/LinkedIn inline SVGs despite icon components existing
- Single git commit (`Initial commit from Create Next App`)