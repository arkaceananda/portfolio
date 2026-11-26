# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
