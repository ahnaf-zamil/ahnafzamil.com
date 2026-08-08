# 003 — shadcn/ui with `@base-ui/react` Primitives

**Date:** 2026-08-08

## Context

shadcn/ui traditionally uses Radix UI primitives. This project uses the
`base-nova` style which replaces Radix with `@base-ui/react` from MUI.

## Decision

Use `@base-ui/react` as the headless UI primitive library. Components like
`Button`, `Input`, and `Separator` wrap Base UI primitives instead of Radix.

## Consequences

- `@base-ui/react` uses different prop APIs than Radix (e.g., `useRender`/`mergeProps`
  for polymorphism instead of Radix's `asChild`)
- Focus ring styles and accessibility patterns follow Base UI conventions
- The `render` prop pattern in Badge replaces `asChild`
- Future shadcn component generation must use the `base-nova` style variant