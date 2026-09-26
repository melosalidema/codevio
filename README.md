# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/)

## Contact form

The `/contact` page form submits to an email form service — no backend.

**Default (no configuration):** submissions go through [FormSubmit](https://formsubmit.co)
to `SITE.email` in `src/data/site.js` (`info.codevio@gmail.com`). The inbox receives a
one-time activation email on the first submission and must confirm it — FormSubmit holds
submissions until then and delivers them after activation. Spam is handled by the client
honeypot, the minimum-fill-time check, and FormSubmit's own filtering.

**Optional (Formspree):** create a form at formspree.io, confirm the destination inbox
from the email Formspree sends you, copy the form ID from the Integration tab's form URL
(`https://formspree.io/f/<FORM_ID>`), then copy `.env.example` to `.env.local` and set:

```
VITE_FORMSPREE_FORM_ID=<FORM_ID>
```

When the ID is set it takes precedence over FormSubmit. For extra spam protection, use
Formspree's dashboard: **Restrict to Domain** (checks `Referer`) and CAPTCHA are the
strongest layers and are server-side.

`VITE_*` values are inlined into the public client bundle. The form ID is a public
endpoint identifier and is already exposed in the no-JS `<form action>` fallback, so that
is fine — but never put a Formspree API key, SMTP credential, or any other secret in a
`VITE_*` variable.

The form sends `_replyto` and `_subject`, so replying to a notification reaches the
sender.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
