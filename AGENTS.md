# Agent Notes

## Commands

- Install the locked dependencies with `npm ci`.
- Run the development server with `npm run dev`.
- Run the available verification in this order: `npm run lint`, then `npm run build`.
- There is no test, typecheck, formatter, CI, or code-generation script in this repository.

## Structure

- This is a single Vite React app. `src/main.jsx` is the entrypoint and `src/App.jsx` owns the `react-router-dom` route table for `/`, `/mission`, `/services`, `/work`, `/about`, and `/contact`.
- Route-level pages live in `src/pages`; shared UI and animation/3D pieces live in `src/components`; reusable site content and navigation data live in `src/data/site.js`.
- Non-home pages generally use `PageShell`, which supplies the animated background, menu, page transition, title, and footer. The home page has its own `Lanyard`/Three.js composition and splash flow.
- Vite defines `@` as an alias for `src`; `.glb` files are treated as assets. Keep 3D assets under `src/assets` and preserve the existing `?url` pattern where a URL is required.

## Conventions

- ESLint covers `js` and `jsx` files and ignores `dist`; use `npm run lint` rather than assuming TypeScript or Prettier checks exist.
- Tailwind CSS is integrated through `@tailwindcss/vite`; shared/global styling is in `src/index.css` and `src/App.css`, with component-specific CSS/SCSS beside components.
- Keep route/content changes aligned with the constants in `src/data/site.js`; that file also contains intentionally illustrative case studies marked `illustrative: true`.
- The home page’s React Three Fiber, Rapier, GSAP, and Three.js code is browser-only and performance-sensitive; verify interactive changes in the dev server on desktop and mobile-sized viewports.
