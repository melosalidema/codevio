# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/)

## Contact form

The `/contact` page form submits straight to [Formspree](https://formspree.io) — no backend.

1. Create a form at formspree.io and confirm the destination inbox from the email Formspree sends you.
2. Copy the form ID out of the Integration tab's form URL (`https://formspree.io/f/<FORM_ID>`).
3. Copy `.env.example` to `.env.local` and set:

   ```
   VITE_FORMSPREE_FORM_ID=<FORM_ID>
   ```

Until that is set, `/contact` shows the email and phone details instead of a dead form.

`VITE_*` values are inlined into the public client bundle. The form ID is a public
endpoint identifier and is already exposed in the no-JS `<form action>` fallback,
so that is fine — but never put a Formspree API key, SMTP credential, or any
other secret in a `VITE_*` variable. Use Formspree's dashboard for spam rules:
**Restrict to Domain** (checks `Referer`) and CAPTCHA are the strongest layers and
are server-side, so they cost nothing here.

Formspree also forwards `_replyto` and `_subject`; the form uses both so replying
to a notification reaches the sender.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
