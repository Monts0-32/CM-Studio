# AGENTS.md

## Project Context

This is a React + Vite frontend for the CM Studios marketing site. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup and available scripts.

## Key Files

- `src/`: frontend application source.
- `src/api/db.js`: data-layer stand-in (no-op auth, entities, integrations) — replace its method bodies when wiring up a real backend.
- `vite.config.js`: Vite config, including the `@` → `./src` import alias.
- `.env.local`: local-only environment values; never commit secrets.

## Working Notes

- Use `npm run dev` for local development and `npm run build` for production builds.
- `@/` imports resolve to `src/`.
- Reuse the existing component and helper patterns before adding new integration paths.
- Run the relevant checks from `package.json` (`npm run lint`, `npm run typecheck`) before finishing code changes.