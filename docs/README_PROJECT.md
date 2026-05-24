# Project Handbook

This is the main internal reference for the current `maths-website` repo.

## What This Repo Is

A Next.js 15 education site focused on probability and statistics. The current app includes:

- topic landing pages under `/probability` and `/statistics`
- MDX-backed topic pages loaded from `content/`
- interactive visualizations in `src/visualizations/`

## Current Stack

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 3
- `next-mdx-remote`
- `gray-matter`
- Recharts
- Playwright

## Quick Start

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Default local URL: `http://localhost:3000`

### Main Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run type-check
npm run smoke
npm run e2e
npm run test:e2e:preview
```

## Current App Surface

- `/`
- `/probability`
- `/probability/[id]`
- `/statistics`
- `/statistics/[id]`
- `/visualizations`
- `/topic/[id]`

## Repository Shape

```text
website/
|-- content/
|   |-- probability/
|   `-- statistics/
|-- docs/
|-- e2e/
|-- public/
|-- resources/
|   |-- lectures/
|   |-- markdown-notes/
|   `-- pdfs/
|-- scripts/
|-- src/
|-- package.json
`-- next.config.js
```

## Source Tree

```text
src/
|-- app/
|   |-- (pages)/
|   |   |-- probability/
|   |   |   |-- [id]/page.tsx
|   |   |   `-- page.tsx
|   |   |-- statistics/
|   |   |   |-- [id]/page.tsx
|   |   |   `-- page.tsx
|   |   `-- visualizations/page.tsx
|   |-- topic/[id]/page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- not-found.tsx
|   `-- page.tsx
|-- components/
|   |-- content/
|   |-- layout/
|   |-- ui/
|   `-- index.ts
|-- hooks/
|   `-- index.ts
|-- lib/
|   |-- calculations/
|   |-- constants.ts
|   |-- content.ts
|   `-- utils.ts
|-- styles/
|-- types/
`-- visualizations/
```

## What Lives Where

### `src/app`

Route modules and page composition.

- `page.tsx`: homepage
- `(pages)/probability` and `(pages)/statistics`: topic index and topic article pages
- `topic/[id]`: legacy numeric topic route

### `content`

Published MDX content for topic pages.

- `content/probability`
- `content/statistics`

### `resources`

Internal source material.

- `lectures/`, `markdown-notes/`, and `pdfs/`: reference material, not part of public route rendering

### `src/lib`

Shared logic and data access.

- `content.ts`: loads topic markdown from `content/`
- `constants.ts`: navigation and topic metadata
- `calculations/`: reusable math helpers

### `src/components`

Shared UI.

- `layout/`: navbar, footer, sidebar
- `ui/`: cards, graphs, formula box, client-only wrapper
- `content/`: reserved for content-specific components; currently minimal

### `src/visualizations`

Interactive client components used on visualization pages and in MDX content.

## Development Workflow

Normal loop:

```bash
npm run dev
npm run type-check
npm run build
```

Use `npm run smoke` for a quick route check and `npm run e2e` for Playwright coverage.

## Common Tasks

### Add or Edit a Topic Article

1. Create or update a file in `content/probability` or `content/statistics`.
2. Keep frontmatter simple: `title` and `description` are the main fields.
3. Verify the slug matches the route you intend to use.
4. Test the page locally.

### Add a Route

Place route files in `src/app`.

- use `src/app/(pages)` for the main grouped sections
- use top-level folders in `src/app` for distinct public sections

If the route needs navigation, update `NAVIGATION` in `src/lib/constants.ts`.

### Add a UI Component

Choose the narrowest home possible:

- `src/components/layout` for structural page elements
- `src/components/ui` for reusable display or interaction components
- `src/components/content` only if the component is tied to article rendering

Remember to export new shared components from the relevant `index.ts`.

### Add a Visualization

1. Create a client component in `src/visualizations`.
2. Export it from `src/visualizations/index.ts`.
3. If it must be used inside MDX, add it to the MDX component map in the relevant route page.

## Import Conventions

Prefer aliases:

```ts
import { TopicCard } from "@/components";
import { factorial } from "@/lib/calculations";
import { formatNumber } from "@/lib/utils";
import { CoinTossSimulator } from "@/visualizations";
```

## Verification Checklist

Before committing code or docs:

1. `npm run type-check`
2. `npm run build`
3. `npm run smoke`

Run `npm run e2e` when you changed routing or user flows.

## Related Docs

- [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md): content rules and article template
- [REFERENCE.md](./REFERENCE.md): component list and troubleshooting
- [project-roadmap.txt](./project-roadmap.txt): product and cleanup roadmap

## Maintenance Rule

When docs and code disagree, prefer the code. Keep docs narrow and current. Avoid historical status notes and future-only structure plans.
