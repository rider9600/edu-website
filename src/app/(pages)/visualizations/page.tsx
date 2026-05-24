"use client";

import {
  CoinTossSimulator,
  DiceSimulator,
  BayesTheoremVisualizer,
  DistributionParameterExplorer,
  CentralLimitTheoremVisualizer,
} from "@/visualizations";
import {
  RandomWalkSimulation,
  MonteCarloIntegration,
  HypothesisTestingExplorer,
} from "@/visualizations";
import { CurveFittingVisualizer } from "@/visualizations";

export default function VisualizationsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          Interactive Simulations
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Explore probability and statistics through interactive visualizations.
          Adjust parameters and see results in real-time.
        </p>
      </section>

      {/* Basic Simulators */}
      <section className="mb-12">
        <h2 className="section-title">Basic Probability Simulations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <CoinTossSimulator />
          <DiceSimulator />
        </div>
      </section>

      {/* Advanced Visualizations */}
      <section className="mb-12">
        <h2 className="section-title">Advanced Explorations</h2>
        <div className="space-y-8">
          <BayesTheoremVisualizer />
          <DistributionParameterExplorer />
          <CentralLimitTheoremVisualizer />
          <RandomWalkSimulation />
          <MonteCarloIntegration />
          <HypothesisTestingExplorer />
          <CurveFittingVisualizer />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="card">
        <h2 className="subsection-title">More Simulations Coming Soon</h2>
        <p className="text-slate-300 mb-4">
          We&apos;re building additional interactive visualizations including:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Normal Distribution Visualizer</li>
          <li>Chi-Square Test Interactive Tool</li>
          <li>Markov Chains Visualizer</li>
        </ul>
      </section>
    </main>
  );
}
