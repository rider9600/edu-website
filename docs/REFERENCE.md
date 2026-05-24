# Reference

## Shared UI

- `TopicCard`: topic summary card used on the homepage and section pages
- `FormulaBox`: displays a named formula with explanation
- `GraphContainer`: layout wrapper for chart sections
- `Histogram`: static histogram chart
- `InteractiveHistogram`: histogram with adjustable bins
- `GraphControls`: graph action buttons for zoom/reset style controls
- `ClientOnly`: wrapper for client-only rendering inside server-rendered pages
- `ScrollTopButton`: utility button for long pages

## Layout Components

- `Navbar`
- `Sidebar`
- `Footer`

## Visualizations

- `CoinTossSimulator`
- `DiceSimulator`
- `BayesTheoremVisualizer`
- `DistributionParameterExplorer`
- `CentralLimitTheoremVisualizer`
- `RandomWalkSimulation`
- `MonteCarloIntegration`
- `HypothesisTestingExplorer`
- `CurveFittingVisualizer`

## MDX Note

Visualizations are client components. To use them in MDX, they must be exposed through the route-level MDX component map, not only exported from `src/visualizations/index.ts`.

## Troubleshooting

### MDX Component Does Not Render

Check both of these:

1. the component is exported from the right module
2. the route page includes it in the MDX component map

Relevant route files:

- `src/app/(pages)/probability/[id]/page.tsx`
- `src/app/(pages)/statistics/[id]/page.tsx`

### Topic Page Says Not Found

- confirm the file exists under `content/probability` or `content/statistics`
- confirm the slug in the URL matches the filename
- confirm the route is using slug mode rather than the older numeric fallback

### Hydration Warnings

- keep interactive visualizations inside client components
- use `ClientOnly` when a visualization is embedded into server-rendered MDX
- avoid browser-only APIs in server components

### Build Failure

Run these in order:

```bash
npm run type-check
npm run build
```

The type check usually gives the clearer first failure.

### Route Test Failure

- run `npm run smoke` for a fast sanity pass
- run `npm run e2e` for Playwright failures
