# CM Studio

React + Vite frontend for the CM Studios marketing site — websites and online stores for small businesses.

## Prerequisites

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.

## Run Locally

```bash
npm run dev
```

Open the printed URL (typically `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — preview the production build
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run typecheck` — TypeScript check via `jsconfig.json`

## Notes

- The data layer in `src/api/db.js` is an in-memory stand-in (no-op auth, entities, and integrations). Wire it up to a real backend before relying on logins, form submissions, or file uploads.
- Imports using the `@/` alias resolve to `src/` (configured in `vite.config.js` and `jsconfig.json`).
- Keep local-only values in `.env.local`; never commit secrets.