# Changelog

All notable UI changes made during the Codevio website polish pass are recorded here.

## 2026-09-25 — Polish pass (PR #2)

Pull request: https://github.com/Codevio-Codespace/Codevio-Website/pull/2
Base branch: `stagin`

### Differences in this pull request

| Area | Before | After | File |
| --- | --- | --- | --- |
| Route transition | Every route was wrapped in a full-screen transition overlay showing labels such as "Our Work" and "Our Services" | The overlay is no longer mounted; navigation goes straight to the page | `src/App.jsx` |
| Transition theme tokens | `textColor` and `transitionBackground` existed in the shared theme | Removed because nothing uses them anymore | `src/data/site.js` |
| Native scrollbar | Browser-default scrollbar with a visible track | Native scrollbar hidden in Chrome, Edge, and Firefox | `src/index.css` |
| Scroll indicator | None | A 3px white line with no track shows the current scroll position and moves with page progress | `src/App.jsx`, `src/index.css` |
| About hero spacing | `pt-32` (128px) | `pt-8` (32px) so the content starts closer to the header | `src/pages/About.jsx` |
| Services hero spacing | No bottom padding | `pb-8` added under the "Launch sprints" block | `src/pages/Services.jsx` |
| Home launch-sprint section | `py-16` (64px) | `pt-16 pb-32` so there is clear space between the cards and the footer | `src/components/OffersTeaser.jsx` |
| Home offer cards | `p-7` (28px) | `p-7 pb-16` (64px bottom) with no card movement or transform | `src/components/OffersTeaser.jsx` |
| Desktop density rules | The `stagin` density pass set uniform 48px section padding and 21px card padding | Density is preserved, while the requested 128px section bottom and 64px card bottom are kept on desktop | `src/index.css` |

### Earlier changes already merged into `stagin`

| Area | Change | File |
| --- | --- | --- |
| Shared page theme | Central `PAGE_THEME` tokens for background, gradient, menu, and accent colors; used by the shell, home, About, and Contact | `src/data/site.js` |
| Page background colors | Hard-coded shader colors replaced with shared theme values | `src/components/PageShell.jsx`, `src/components/Lanyard.jsx`, `src/pages/About.jsx`, `src/pages/Contact.jsx` |
| Burger menu colors | Menu surface, text, trigger, and open-trigger colors are now driven by theme props and CSS variables | `src/components/StaggeredMenu.jsx` |
| Burger menu hover | Menu links turn Codevio red with a black outline and layered 3D shadow on hover and keyboard focus, matching the footer "something" treatment | `src/components/StaggeredMenu.jsx` |
| Text selection | Selected text uses a Codevio red highlight with white letters | `src/index.css` |
| macOS window controls | The About "studio.js" dots behave like macOS traffic lights: only the hovered control scales and reveals `×`, `−`, or `+` with smooth easing | `src/pages/About.jsx` |

## Verification

- `npm run build` passes.
- `npm run lint` reports 17 pre-existing errors and 4 warnings in legacy components that were not touched by this work: `CurvedLoop.jsx`, `ImagesParallax.jsx`, `Lanyard.jsx`, `Loader.jsx`, `Mousemaskreveal.jsx`, `PixelBlast.jsx`, and `StickyCard.jsx`.
- Targeted ESLint passes on every file changed by this work.
- All six routes return HTTP 200: `/`, `/mission`, `/services`, `/work`, `/about`, `/contact`.
- The scrollbar and macOS controls were verified visually with headless Edge screenshots.
