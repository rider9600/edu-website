# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Initial Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## Project Organization Overview

This project is organized for scalability and maintainability:

### Core Directories

**`src/app/`** — Next.js App Router
- `layout.tsx` — Root layout with Navbar & Footer
- `page.tsx` — Homepage
- `(pages)/` — Route group for main pages
  - `probability/` → `/probability`
  - `statistics/` → `/statistics`
  - `visualizations/` → `/visualizations`

**`src/components/`** — Reusable Components
- `layout/` — Page structure (Navbar, Sidebar, Footer)
- `ui/` — Reusable UI components (TopicCard, FormulaBox, GraphContainer)
- `content/` — Content-specific components

**`src/lib/`** — Utilities & Helpers
- `constants.ts` — App configuration and constants
- `utils.ts` — Helper functions
- `calculations/` — Math functions (probability, statistics)

**`src/types/`** — TypeScript Definitions
- Shared type interfaces and enums

**`src/hooks/`** — Custom React Hooks
- useSimulation, useDebounce, etc.

**`src/visualizations/`** — Interactive Simulations
- CoinTossSimulator, DiceSimulator, etc.

**`src/styles/`** — Global Styles
- globals.css with Tailwind CSS

### Content Directories

**`content/`** — Article Content
Organized by topic:
- `probability/` — Probability articles (MDX)
- `statistics/` — Statistics articles (MDX)
- `distributions/` — Distribution guides
- `simulation/` — Simulation tutorials
- `convergence/` — Convergence theorems
- `bayesian/` — Bayesian methods

**`resources/`** — Internal Materials
- `lectures/` — Lecture materials
- `pdfs/` — Reference documents
- `markdown-notes/` — Research notes

**`public/`** — Static Assets
- `images/` — Static images
- `graphs/` — Pre-generated graphs

## Import Conventions

```typescript
// Components
import { Navbar, Sidebar, Footer } from '@/components'
import { TopicCard, FormulaBox } from '@/components'

// Hooks
import { useSimulation } from '@/hooks'

// Utilities
import { factorial, mean } from '@/lib/calculations'
import { formatNumber, slugify } from '@/lib/utils'
import { BEGINNER_TOPICS, NAVIGATION } from '@/lib/constants'

// Types
import type { Topic, Difficulty } from '@/types'

// Visualizations
import { CoinTossSimulator } from '@/visualizations'
```

## Common Tasks

### Adding a New Page

1. Create folder: `src/app/(pages)/feature-name/`
2. Create `page.tsx`
3. Add to `NAVIGATION` in `src/lib/constants.ts`

```typescript
// src/app/(pages)/feature-name/page.tsx
export default function FeatureNamePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Feature Name</h1>
      {/* Your content */}
    </main>
  )
}
```

### Adding a New Component

1. Determine category (layout/ui/content)
2. Create: `src/components/{category}/ComponentName.tsx`
3. Add to `src/components/{category}/index.ts`

```typescript
// src/components/ui/NewComponent.tsx
interface NewComponentProps {
  title: string
  description?: string
}

export default function NewComponent({ title, description }: NewComponentProps) {
  return (
    <div className="card">
      <h3 className="font-bold">{title}</h3>
      {description && <p className="text-slate-400">{description}</p>}
    </div>
  )
}
```

Then export in `src/components/ui/index.ts`:
```typescript
export { default as NewComponent } from './NewComponent'
```

### Adding a Visualization

1. Create: `src/visualizations/NewSimulation.tsx`
2. Add to `src/visualizations/index.ts`

```typescript
// src/visualizations/NewSimulation.tsx
'use client'

import { useState } from 'react'

export default function NewSimulation() {
  const [data, setData] = useState([])

  return (
    <div className="card">
      {/* Interactive component */}
    </div>
  )
}
```

### Adding Calculation Functions

1. Add to `src/lib/calculations/{domain}.ts`
2. Functions auto-export via `src/lib/calculations/index.ts`

```typescript
// src/lib/calculations/mymath.ts
export const myFunction = (x: number): number => {
  return x * 2
}

// Use anywhere via:
import { myFunction } from '@/lib/calculations'
```

### Writing an Article

1. Create: `content/{category}/article-name.mdx`
2. Follow `ARTICLE_TEMPLATE.md`
3. Use MDX components:

```mdx
# Article Title

Introduction text here.

<FormulaBox 
  title="Important Formula"
  formula="P(A|B) = P(B|A) * P(A) / P(B)"
  explanation="This is Bayes Theorem..."
/>

<CoinTossSimulator />
```

## CSS & Styling

Using Tailwind CSS with custom components in `src/styles/globals.css`:

```css
/* Predefined classes */
.btn-primary    /* Primary buttons */
.btn-secondary  /* Secondary buttons */
.card           /* Content cards */
.section-title  /* Section headings */
.subsection-title /* Subsection headings */
```

### Adding Custom Classes

Update `src/styles/globals.css`:
```css
@layer components {
  .new-component {
    @apply px-4 py-2 bg-blue-500 rounded-lg text-white transition;
  }
}
```

## TypeScript Conventions

All new code should be typed. Common patterns:

```typescript
// Component props
interface ComponentProps {
  title: string
  difficulty: Difficulty
  onClick?: (e: React.MouseEvent) => void
  children?: React.ReactNode
}

// Function signatures
export const calculate = (x: number, y: number): number => {
  return x + y
}

// Constants
export const TOPICS: Topic[] = [
  { title: 'Topic 1', difficulty: 'beginner' }
]
```

## Performance Best Practices

1. **Use 'use client' sparingly** — Only for interactive components
2. **Code split** — Split large components into smaller pieces
3. **Memoization** — Use React.memo for expensive components
4. **Image optimization** — Use Next.js `<Image>` component
5. **Dynamic imports** — For heavy visualizations:

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/visualizations/Heavy'), {
  loading: () => <div>Loading...</div>,
})
```

## Testing & Linting

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Format code (optional - add prettier)
npm run format
```

## Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel deploy
```

## Debugging

### VS Code Setup

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js debug",
      "type": "node",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

### Browser DevTools
- Use React DevTools extension
- Use Next.js debug features in Network tab

## Common Issues & Solutions

### Issue: Component not found
**Solution:** Check import path and verify component is exported in `index.ts`

### Issue: Style not applying
**Solution:** Verify Tailwind CSS class name is correct and in `tailwind.config.js`

### Issue: Build fails with TypeScript errors
**Solution:** Run `npm run type-check` to see all errors

### Issue: Route not found
**Solution:** Verify file is in correct folder and follows Next.js routing convention

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Project Structure Docs](./PROJECT_STRUCTURE.md)

---

For detailed structure documentation, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
