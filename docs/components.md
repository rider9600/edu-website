# Component API (Short Reference)

This document lists commonly used UI components and visualizers.

- `TopicCard` (props: `title`, `description`, `difficulty`, `href`, `icon`) - card used on home and topic lists.
- `FormulaBox` - renders math formulas with copy-to-clipboard.
- `GraphContainer` (props: `title`, `children`, `description?`) - wrapper for charts and visualizations.
- `Histogram` (props: `values: number[]`, `bins?: number`, `xLabel?: string`, `yLabel?: string`) - Recharts histogram chart.
- `InteractiveHistogram` (props: `values: number[]`, `initialBins?: number`) - histogram with bin controls.
- `GraphControls` (props: `onZoomIn?, onZoomOut?, onReset?`) - simple control buttons for graphs (to be wired into visualizers).

Visualizations (client components):
- `CoinTossSimulator`, `DiceSimulator`, `BayesTheoremVisualizer`, `DistributionParameterExplorer`, `CentralLimitTheoremVisualizer`, `RandomWalkSimulation`, `MonteCarloIntegration`, `HypothesisTestingExplorer`, `CurveFittingVisualizer`.

Notes

- Visualizers are client components and must be referenced in MDX via the server-side MDX renderer mapping in `src/app/(pages)/probability/[id]/page.tsx`.
