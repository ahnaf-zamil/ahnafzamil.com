# Conventions

## Code Conventions

- **React components** — default exports, PascalCase filenames matching component name
- **React hooks** — named exports, camelCase, `use` prefix (e.g., `useScrollReveal`)
- **Utilities** — named exports, camelCase (e.g., `cn`)
- **Client components** — explicit `"use client"` directive at top
- **Server components** — no directive (default in Next.js App Router)
- **JSX**: `className` attribute (not `class`), inline styles for animation initial states
- **Imports**: `@/` path alias for `src/`, no relative parent imports (`../../`)
- **TypeScript**: strict mode, explicit `React.FC` not used (Props are inline or interface)

## Project Conventions

- Use `bun` as package manager (per `AGENTS.md`)
- Run `bun run lint` before committing (ESLint with Next.js config)
- Build command: `bun run build`
- shadcn/ui components live in `src/components/ui/`
- Icons live in `src/components/icons/`
- Hooks live in `src/hooks/`
- Shared utilities live in `src/lib/`

## Styling Conventions

- Tailwind utility classes preferred over custom CSS
- Custom theme colors use `--color-theme-*` CSS variables
- Hero `fadeIn` animation via plain CSS `@keyframes` (defined in `globals.css`)
- Font families: General Sans (body), Bespoke Stencil (titles), JetBrains Mono (code)

## Animation Conventions

- No JS animation libraries used. Hero uses CSS `@keyframes fadeIn` only.
- GSAP deps (`gsap`, `@gsap/react`) remain in `package.json` but are unused.

## shadcn/ui (base-nova) Conventions

- Uses `@base-ui/react` primitives (not Radix) — Button, Input, Separator, etc.
- `useRender` + `mergeProps` pattern for polymorphic components
- `cva` (class-variance-authority) for variant management
- `data-slot` attributes on DOM elements for composability
- Focus ring style: `focus-visible:ring-3 focus-visible:ring-ring/50`
- `data-horizontal` / `data-vertical` selectors in separator