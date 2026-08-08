# 001 — Static Portfolio with No Backend

**Date:** 2026-08-08

## Context

This is a personal portfolio site for K M Ahnaf Zamil. The site needs to be
fast, reliable, and zero-maintenance. Contact form submissions are infrequent
and low-volume.

## Decision

No backend, no database, no API routes. Contact form uses `mailto:` links
to open the user's email client. All content is hardcoded in components.

## Consequences

- Static export possible, deployable to any CDN (Vercel, Netlify, S3)
- Zero operational cost, no server to manage
- Contact form has no delivery guarantees — relies on user's email client
- Content changes require code edits and redeployment
- No analytics, no server-side tracking