# blog

A personal blog built with [Astro](https://astro.build) and deployed to GitHub Pages.

- `src/` — layouts, pages, and styles
- `blog/` — MDX files, one per post

## Dev

Install dependencies:

```sh
pnpm install
```

Start the local dev server:

```sh
pnpm dev
```

Preview the production build locally:

```sh
pnpm build && pnpm preview
```

## Publish

Build the site and push it to the `gh-pages` branch:

```sh
pnpm deploy
```

The `deploy` command builds the static site into `dist/` and publishes it to the `gh-pages` branch using [`gh-pages`](https://github.com/tschaub/gh-pages).