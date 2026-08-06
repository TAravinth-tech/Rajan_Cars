# Rajan Cars — Multi-Page App (MPA)

Static multi-page build of the Rajan Cars website. Every page is its own
physical HTML document with its own `<title>`, meta description and Open Graph
tags — no client-side router.

## Pages

| URL | HTML file | Entry | Page component |
| --- | --- | --- | --- |
| `/` | `index.html` | `src/entries/home.tsx` | `src/pages/Home.tsx` |
| `/about/` | `about/index.html` | `src/entries/about.tsx` | `src/pages/About.tsx` |
| `/services/` | `services/index.html` | `src/entries/services.tsx` | `src/pages/Services.tsx` |
| `/contact/` | `contact/index.html` | `src/entries/contact.tsx` | `src/pages/Contact.tsx` |
| 404 | `404.html` | — | static |

## Stack

Vite 7 (`appType: "mpa"`) + React 19 + Tailwind CSS v4. Shared UI lives in
`src/components/site/`, content in `src/data/site.ts`, design tokens in
`src/styles.css`.

## Commands

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # -> dist/ (index.html, about/index.html, ...)
npm run preview
```

## Notes

- Navigation uses `src/components/site/Link.tsx`, a plain `<a>` wrapper that
  supports `to`, `hash` and `activeProps` for active-nav highlighting.
- `dist/` can be uploaded to any static host; directory-style URLs
  (`/about/`) work out of the box.
