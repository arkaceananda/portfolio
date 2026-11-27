# Arka Aceananda — Portfolio

A personal portfolio built with Astro and React. Content is shipped as static HTML, and JavaScript is loaded only for interactive islands. Deployed to Cloudflare Pages at [arkaaceananda.my.id](https://arkaaceananda.my.id).

## Features

- Static-first architecture with selective React hydration.
- Dark mode by default and a "Coffee & Milk" light theme, persisted through `data-theme` and `localStorage`.
- Intro card with a holographic foil effect, a live `whoami` terminal, and a typewriter role.
- Responsive project carousel with blurred neighbours, keyboard and pointer navigation, and adaptive previews for mobile, desktop, and CLI projects.
- Tech stack visualised with OrbitImages; mobile navigation through a floating dock.
- SEO metadata, Open Graph image, sitemap, structured data (`Person` / `ProfilePage`), and security headers.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Astro 7, React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Animation | Motion; Magic UI and React Bits components |
| Package manager | Bun |
| Content | Astro Content Collections with Zod schemas |
| Tooling | ESLint flat config, Prettier, `@astrojs/check` |
| Deployment | Cloudflare Pages |

## Project structure

```text
.
├── public/
│   ├── _headers                 # Cloudflare security headers
│   ├── og-image.png             # 1200x630 social preview
│   ├── tech/                    # Tech stack icons
│   ├── videos/                  # Project demo videos
│   └── ...
├── src/
│   ├── components/
│   │   ├── islands/             # Hydrated React components
│   │   │   └── ProjectShowcase/ # Carousel, card, modal, phone mockup
│   │   ├── magicui/             # Components copied via shadcn CLI
│   │   ├── static/              # Zero-JS Astro components
│   │   └── ProfileCard.tsx      # Intro card
│   ├── content/
│   │   └── projects/            # One JSON file per project
│   ├── data/                    # Navigation, skills, social links
│   ├── hooks/                   # React hooks
│   ├── layouts/                 # BaseLayout and the legacy Layout
│   ├── pages/                   # index.astro and 404.astro
│   ├── styles/global.css        # Tailwind theme and global styles
│   ├── types/                   # Shared types and third-party declarations
│   └── content.config.ts        # Project collection schema
├── astro.config.mjs
├── CHANGELOG.md
└── package.json
```

## Commands

Run all commands from the project root:

| Command | Action |
| --- | --- |
| `bun install` | Install dependencies |
| `bun dev` | Start the dev server on `localhost:4321` |
| `bunx --bun astro dev --background` | Start the dev server in the background |
| `bunx --bun astro check` | Type-check the project |
| `bun run lint` | Lint Astro, TypeScript, and React files |
| `bun run format` | Format the codebase with Prettier |
| `bun run build` | Produce the static site in `dist/` |
| `bun run preview` | Preview the production build locally |

## Adding a project

Create a JSON file in `src/content/projects/`. Required fields: `title`, `briefDescription`, `longDescription`, `techStack`, `platform`, `githubUrl`, `accentColor`, `problem`, `solution`, and `keyFeatures`.

Optional fields:

| Field | Purpose |
| --- | --- |
| `videoUrl` | Demo video; mobile projects are rendered in a phone mockup |
| `previewImage` | Image shown on the card and used as modal fallback |
| `apkUrl` | Adds an APK download button |
| `binaryUrl` / `binaryLabel` | Adds a download button for non-mobile binaries |

`platform` accepts `mobile`, `desktop`, or `cli`. Each project is validated against the Zod schema in `src/content.config.ts` at build time.

## Deployment

The site is configured for Cloudflare Pages:

- Build command: `bun run build`
- Output directory: `dist/`
- Custom domain: `arkaaceananda.my.id` (apex, configured as canonical)

The `site` value in `astro.config.mjs` drives canonical URLs, Open Graph URLs, and the generated sitemap.

## Versioning

Releases follow Semantic Versioning. Each release is recorded in `CHANGELOG.md` and tagged as `vMAJOR.MINOR.PATCH`; the `version` field in `package.json` mirrors the latest tag.
