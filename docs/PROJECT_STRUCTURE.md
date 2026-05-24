# Project Structure Documentation

## Overview

The Maths Website is organized with a clear, scalable structure following Next.js best practices.

## Directory Structure

```
website/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── layout.tsx                    # Root layout with Navbar & Footer
│   │   ├── page.tsx                      # Homepage
│   │   ├── globals.css                   # Global styles
│   │   ├── (pages)/                      # Route group for main pages
│   │   │   ├── probability/
│   │   │   │   └── page.tsx              # Probability topics page
│   │   │   ├── statistics/
│   │   │   │   └── page.tsx              # Statistics topics page
│   │   │   └── visualizations/
│   │   │       └── page.tsx              # Simulations page
│   │   └── not-found.tsx                 # 404 page
│   │
│   ├── components/                       # Reusable React components
│   │   ├── index.ts                      # Central export file
│   │   ├── layout/                       # Layout components
│   │   │   ├── Navbar.tsx                # Navigation bar
│   │   │   ├── Sidebar.tsx               # Sidebar navigation
│   │   │   ├── Footer.tsx                # Footer component
│   │   │   └── index.ts                  # Layout exports
│   │   ├── ui/                           # UI components
│   │   │   ├── TopicCard.tsx             # Topic preview card
│   │   │   ├── FormulaBox.tsx            # Formula display component
│   │   │   ├── GraphContainer.tsx        # Graph wrapper component
│   │   │   └── index.ts                  # UI exports
│   │   └── content/                      # Content-specific components
│   │       └── (components will go here)
│   │
│   ├── visualizations/                   # Interactive simulations
│   │   ├── CoinTossSimulator.tsx         # Coin toss demo
│   │   ├── DiceSimulator.tsx             # Dice probability demo
│   │   ├── index.ts                      # Visualization exports
│   │   └── (more simulations coming)
│   │
│   ├── lib/                              # Utilities and helpers
│   │   ├── constants.ts                  # App constants & config
│   │   ├── utils.ts                      # Helper functions
│   │   ├── calculations/                 # Math functions
│   │   │   ├── probability.ts            # Probability calculations
│   │   │   ├── statistics.ts             # Statistics calculations
│   │   │   └── index.ts                  # Calculation exports
│   │   └── (other utilities)
│   │
│   ├── hooks/                            # Custom React hooks
│   │   └── index.ts                      # useSimulation, useDebounce, etc.
│   │
│   ├── types/                            # TypeScript type definitions
│   │   └── index.ts                      # Shared types & interfaces
│   │
│   └── styles/                           # Global styles
│       └── globals.css                   # Tailwind CSS imports
│
├── content/                              # Article content (MDX)
│   ├── probability/                      # Probability articles
│   ├── statistics/                       # Statistics articles
│   ├── distributions/                    # Distribution content
│   ├── simulation/                       # Simulation guides
│   ├── convergence/                      # Convergence theorems
│   └── bayesian/                         # Bayesian methods
│
├── resources/                            # Internal research materials
│   ├── lectures/                         # Lecture materials
│   ├── pdfs/                             # Reference PDFs
│   └── markdown-notes/                   # Research notes
│
├── public/                               # Static assets
│   ├── images/                           # Static images
│   └── graphs/                           # Pre-generated graphs
│
├── docs/                                 # Project documentation
│   └── (documentation files)
│
├── Configuration Files
│   ├── package.json                      # Dependencies
│   ├── tsconfig.json                     # TypeScript config
│   ├── tailwind.config.js                # Tailwind CSS config
│   ├── next.config.js                    # Next.js config
│   ├── postcss.config.js                 # PostCSS config
│   ├── .eslintrc.json                    # ESLint config
│   ├── .env.example                      # Environment template
│   └── .gitignore                        # Git ignore rules
│
└── Documentation
    ├── README_PROJECT.md                 # Project overview
    ├── GETTING_STARTED.md                # Setup guide
    ├── CONTENT_GUIDELINES.md             # Writing guidelines
    └── ARTICLE_TEMPLATE.md               # Article template
```

## Key Organization Principles

### 1. **Route Groups (pages folder)**
The `(pages)` folder groups main pages together without adding a path segment. This keeps the file structure organized while maintaining clean URLs:
- `/probability` → `app/(pages)/probability/page.tsx`
- `/statistics` → `app/(pages)/statistics/page.tsx`
- `/visualizations` → `app/(pages)/visualizations/page.tsx`

### 2. **Component Organization**

#### Layout Components (`components/layout/`)
- Navbar, Sidebar, Footer
- Page-wide structural components
- Centralized in `layout/index.ts`

#### UI Components (`components/ui/`)
- Reusable, single-purpose components
- TopicCard, FormulaBox, GraphContainer
- Exported via `ui/index.ts`

#### Content Components (`components/content/`)
- Content-specific components
- Article-related UI
- (Expandable for future needs)

### 3. **Utilities (`lib/`)**

#### `lib/constants.ts`
- Navigation items
- Site metadata
- Topic data
- UI constants (colors, etc.)

#### `lib/utils.ts`
- Helper functions (cn, formatNumber, etc.)
- String utilities
- Data formatters

#### `lib/calculations/`
- Pure math functions
- Probability utilities
- Statistics utilities
- Organized by domain

### 4. **Type Safety (`types/`)**
- Centralized type definitions
- Difficulty levels, topics, articles
- Props interfaces

### 5. **Custom Hooks (`hooks/`)**
- Reusable React logic
- useSimulation, useDebounce
- Follows React hooks conventions

### 6. **Visualizations**
- Interactive simulations
- Organized by feature
- Centrally exported from `index.ts`

## Import Paths

The project uses path aliases for clean imports:

```typescript
// ❌ Avoid
import Component from '../../../components/ui/TopicCard'

// ✅ Use
import { TopicCard } from '@/components'
import { useSimulation } from '@/hooks'
import { factorial } from '@/lib/calculations'
import { BEGINNER_TOPICS } from '@/lib/constants'
import { Difficulty } from '@/types'
```

Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/visualizations/*": ["./src/visualizations/*"]
    }
  }
}
```

## Adding New Features

### Adding a New Page
1. Create folder in `src/app/(pages)/feature-name/`
2. Add `page.tsx`
3. Add navigation link to `NAVIGATION` in `lib/constants.ts`

### Adding a New Component
1. Determine category (layout/ui/content)
2. Create in `src/components/{category}/ComponentName.tsx`
3. Export in `src/components/{category}/index.ts`
4. Re-export in `src/components/index.ts`

### Adding Calculations
1. Add to `src/lib/calculations/{domain}.ts`
2. Export in `src/lib/calculations/index.ts`
3. Import via `@/lib/calculations`

### Adding a Visualization
1. Create in `src/visualizations/SimulationName.tsx`
2. Export in `src/visualizations/index.ts`
3. Import and use in pages

## Best Practices

1. **Use Index Files**: Re-export components from index files for cleaner imports
2. **Organize by Feature**: Group related components and logic together
3. **Clear Naming**: Use descriptive, consistent naming conventions
4. **Type Everything**: Use TypeScript for all new code
5. **Centralize Constants**: Keep config and constants in `lib/constants.ts`
6. **Pure Functions**: Keep utility functions pure and testable
7. **Component Props**: Define interfaces for all component props in `types/`

## Development Workflow

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Linting
npm run lint
```

---

This structure ensures scalability, maintainability, and clean code organization as the project grows.
