# 002 — GSAP Animation Boundaries via Client Wrapper

**Date:** 2026-08-08

## Context

GSAP is a JS-only animation library. It cannot run during server-side rendering.
The site uses Next.js App Router where components are server components by default.

## Decision

Animation logic is isolated behind a single client boundary: `ScrollRevealProvider`
is the only component that registers ScrollTrigger via `useGSAP`. Individual section
components (Hero, About, Projects, etc.) remain server components. They receive
animation capability through the `reveal` CSS class, which ScrollRevealProvider
targets with `ScrollTrigger.batch(".reveal")`.

Similarly, `Curtain.tsx` is a client component wrapping scroll-linked overlay animation.

## Consequences

- Section components are pure server components — faster to render, smaller bundles
- Adding a new animated section only requires adding `className="reveal"` +
  inline `style={{ opacity: 0, y: 50 }}` — no JS import needed
- Animation behavior is centralized in one place
- All `.reveal` elements share identical animation config (stagger, duration, ease)
- Not usable for per-element custom animation timing

## Status

**SUPERSEDED** — All GSAP-based systems removed on 2026-08-08.
Curtain, ScrollRevealProvider, and useScrollReveal hook deleted.
Hero uses plain CSS `fadeIn` animation only.