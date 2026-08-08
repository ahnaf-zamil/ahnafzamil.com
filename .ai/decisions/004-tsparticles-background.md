# 004 — tsparticles Background with Configs Preset

**Date:** 2026-08-08

## Context

Hero section had an unused `#tsparticles` div with no initialization.
The `@tsparticles/slim` and `tsparticles` packages were already in
`package.json` but never imported.

## Decision

Create `ParticlesBackground.tsx` client component that:
1. Calls `loadSlim(tsParticles)` to register slim features
2. Loads `@tsparticles/configs` basic preset as base configuration
3. Overrides background color to dark (`#111`)
4. Enables particle links with 600px distance
5. Cleans up container on unmount

The `#tsparticles` div remains in Hero as the target element.

## Consequences

- Subtle animated background without adding a React wrapper library
- Cleanup on unmount prevents memory leaks
- Configs preset provides sensible defaults without hand-tuning every option
- `@tsparticles/configs` added as new dependency