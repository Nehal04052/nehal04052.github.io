# Nehal Panchal Portfolio (GitHub Pages Classic)

Single-page personal portfolio website built with static `HTML/CSS/JS` for GitHub Classic Pages deployment.

## Tech Stack

- `index.html`
- `styles.css`
- `script.js`
- `assets/` (optional images/icons)

No build tool or framework required.

## Local Preview

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy to GitHub Classic Pages

1. Push all files to your repository `main` branch root.
2. Open GitHub repo settings.
3. Go to `Pages`.
4. Under `Build and deployment`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Save.
6. Your site will publish at:
   - `https://<username>.github.io/<repo>/`

## Content Editing Guide

Most content is centralized in `script.js`:

- `profile`: hero/about/contact/footer details
- `publication`: publication card data
- `experience`: experience timeline cards
- `skillGroups`: grouped skill chips
- `projects`: featured project cards
- `certifications`: year-grouped certification lists

## Theme Behavior

- Local storage key: `portfolio_theme`
- Root theme attribute: `data-theme="light|dark"`
- Default theme follows `prefers-color-scheme` when no stored value exists

## Accessibility Notes

- Semantic landmarks and headings
- Skip link for keyboard users
- Focus-visible ring styles
- Reduced motion support using `prefers-reduced-motion`

## Troubleshooting

- If GitHub Pages shows a 404:
  - Confirm `index.html` exists in branch root.
  - Confirm Pages source is `main / (root)`.
  - Wait 1-2 minutes after first deployment.
- If styles/scripts do not load:
  - Keep paths relative (`styles.css`, `script.js`).
  - Confirm file names and casing match exactly.
