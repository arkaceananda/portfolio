# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-11-27

### Added

- Real Tsaritsa photo with a pre-computed dithered variant for the lanyard card back face.

### Changed

- Renamed `FooterTerminal` to `HeroTerminal` (the terminal lives in the hero).
- Terminal font enlarged to 18px with looser line height; lanyard hangs lower.
- Lanyard rendering optimized: antialias off, pixel ratio 1, fewer band samples and smaller card textures.

[0.6.0]: https://github.com/arkaceananda/portfolio/releases/tag/v0.6.0

## [0.5.0] - 2026-11-26

### Added

- Assembled `index.astro` with all sections and hydration directives.
- React Bits FlipCard and Lanyard components (lazy-loaded, `three`-based) with a toggleable intro card: plain photo on the front, dithered photo on the back, anchored right and draggable across the hero.
- Three-preview project carousel with blurred neighbors, keyboard/swipe navigation, and infinite looping.
- `BackToTop` floating bubble button (static Astro + vanilla script).
- Linux and GitHub tech icons; removed placeholder icons.

### Changed

- Hero shows the `whoami` terminal and an sr-only name heading; smooth anchor scrolling added with reduced-motion fallback.
- Tech stack uses OrbitImages with larger, theme-aware items.
- Terminal text stays at the top; mobile lanyard is sized larger and rendered above the intro.
- `dark:` variants mapped to `[data-theme="dark"]`; whoami text is green; social cards use a white surface with a GitHub icon.
- Lanyard render loop idles when still and caps pixel ratio at 1.5.

### Fixed

- Navigation menu no longer includes "Back to top" on desktop.

[0.5.0]: https://github.com/arkaceananda/portfolio/releases/tag/v0.5.0

## [0.4.1] - 2026-11-26

### Added

- Three sample projects with tech icons and a local demo video.

### Fixed

- Replaced the missing sample video URL with a local demo video.

[0.4.1]: https://github.com/arkaceananda/portfolio/releases/tag/v0.4.1

## [0.4.0] - 2026-11-26

### Added

- React Bits components via `shadcn add`: Dither, OrbitImages, and the Android phone mockup, with TypeScript declarations for the generated `.jsx` files.

[0.4.0]: https://github.com/arkaceananda/portfolio/releases/tag/v0.4.0

## [0.3.0] - 2026-11-26

[0.3.0]: https://github.com/arkaceananda/portfolio/releases/tag/v0.3.0

## [0.2.0] - 2026-11-26

### Added

- Eight React islands: `ThemeToggle` (controlled `AnimatedThemeToggler` with `data-theme` + `localStorage`), `Typewriter`, `HoverButton`, `HeroBackground` (`FlickeringGrid`, `aria-hidden`, reduced-motion aware), `TechStackSection` (`IconCloud`), `MobileDock` (`Dock` with icons and tooltips), `FooterTerminal` (`Terminal` with ticking clock), and `ProjectShowcase` (carousel, cards, modal, phone mockup).
- `useTypewriter` and `useReveal` hooks.

[0.2.0]: https://github.com/arkaceananda/portfolio/releases/tag/v0.2.0

## [0.1.0] - 2026-11-26

### Added

- Astro project with Bun and TypeScript strict, initialized from the Empty template.
- React (`@astrojs/react`) and Tailwind v4 (`@tailwindcss/vite`) integrations.
- shadcn CLI setup (`components.json`) with path alias `@/*` to `./src/*`.
- Seven Magic UI components copied via `shadcn add`: icon-cloud, terminal, animated-theme-toggler, flickering-grid, interactive-hover-button, dock, and shimmer-button.
- `BaseLayout.astro` with inline theme script (`data-theme` + `localStorage`, no flash, default dark), self-hosted fonts (Fraunces, Inter, DM Mono), and SEO meta tags.
- Shared types (`SocialLink`, `TechSkill`, `NavItem`, `Project`) and data files (`skills.ts`, `social.ts`, `navigation.ts`).
- Projects content collection with Zod schema in `src/content.config.ts`.
- Static Astro components: `Section`, `SectionHeader`, `NavBar`, `HeroSection`, `ContactSection`, and `Footer`.

### Changed

- Excluded `.vscode/` from version control.
- Pinned TypeScript 5 for `astro check` compatibility.

### Fixed

- Installed missing `@types/react`, `@types/react-dom`, and `class-variance-authority`.
- Expanded `cn()` utility to accept class-value objects (clsx-like behavior).
- Added `cursorBlink` and `fade-up` keyframes with `prefers-reduced-motion` handling.

[0.1.0]: https://github.com/arkaceananda/portfolio/releases/tag/v0.1.0
