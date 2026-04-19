# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Preview

Open `index.html` directly in a browser, or serve with any static server:

```bash
npx serve .
# or
python -m http.server
```

No build step, no package manager, no compilation required.

## Architecture

This is a zero-dependency, single-page portfolio. Three files do all the work:

- **`index.html`** — Static shell only. Every section (`#about`, `#experience`, `#skills`, etc.) contains only an empty container element. No content is hardcoded here.
- **`script.js`** — Owns all content data and renders it into the DOM on `DOMContentLoaded`. The top of the file defines data constants; the bottom defines render/init functions.
- **`styles.css`** — Theme variables via `[data-theme="dark|light"]` on `<html>`. No CSS preprocessor.

## Content Editing

All portfolio content lives in the top-level constants of [script.js](script.js):

| Constant | What it controls |
|---|---|
| `profile` | Name, role, summary, hero highlights, social links, footer |
| `publication` | Publication card (title, authors, venue, DOI link) |
| `experience` | Timeline cards (role, company, period, bullet points) |
| `skillGroups` | Grouped chip sets in the Skills section |
| `projects` | Project cards (title, stack, summary, impact, links) |
| `certifications` | Year-keyed object of certification lists |

Each constant maps directly to a `render*()` function that injects HTML into a named `id` element in `index.html`.

## Theme System

- Storage key: `portfolio_theme` in `localStorage`
- Applied as `data-theme="light|dark"` on `<html>`
- Falls back to `prefers-color-scheme` when no stored value exists
- CSS variables for both themes are defined in [styles.css](styles.css) at the top (`[data-theme="dark"]` is the default/root)

## Deployment

Push to `main` branch root. GitHub Pages is configured for `main / (root)`. Site publishes at `https://nehal04052.github.io/`.
