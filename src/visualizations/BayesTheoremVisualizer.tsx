"use client";

import { useState } from "react";

export default function BayesTheoremVisualizer() {
  const [priorA, setPriorA] = useState(0.3); // P(A)
  const [likelihood, setLikelihood] = useState(0.8); // P(B|A)
  const [marginal, setMarginal] = useState(0.4); // P(B)

  const posterior = (priorA * likelihood) / marginal; // P(A|B)

  return (
    <div className="card">
      <h3 className="subsection-title">Bayes Theorem Visualizer</h3>
      <p className="text-slate-400 mb-6">
        Explore how prior beliefs are updated with new evidence using Bayes
        Theorem: P(A|B) = P(B|A) × P(A) / P(B)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-200">
                Prior Probability P(A)
              </label>
              <span className="text-lg font-bold text-blue-400">
                {(priorA * 100).toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={priorA}
              onChange={(e) => setPriorA(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg"
            />
            <p className="text-xs text-slate-500 mt-1">
              Initial belief before observing evidence
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-200">
                Likelihood P(B|A)
              </label>
              <span className="text-lg font-bold text-green-400">
                {(likelihood * 100).toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={likelihood}
              onChange={(e) => setLikelihood(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg"
            />
            <p className="text-xs text-slate-500 mt-1">
              Probability of evidence given hypothesis is true
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-200">
                Marginal P(B)
              </label>
              <span className="text-lg font-bold text-yellow-400">
                {(marginal * 100).toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="0.01"
              max="1"
              step="0.01"
              value={marginal}
              onChange={(e) => setMarginal(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg"
            />
            <p className="text-xs text-slate-500 mt-1">
              Total probability of observing evidence
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-between">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-lg border border-purple-500/30">
            <p className="text-slate-400 mb-2">Posterior Probability</p>
            <p className="text-5xl font-bold text-purple-400">
              {(posterior * 100).toFixed(1)}%
            </p>
            <p className="text-slate-300 mt-4">
              Updated belief after observing evidence P(A|B)
            </p>
          </div>

          {/* Visualization */}
          <div className="mt-6 space-y-2">
            <div className="text-sm text-slate-400 mb-3">
              Probability Comparison
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-blue-400">Prior P(A)</span>
                <span>{(priorA * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded h-2">
                <div
                  className="bg-blue-500 rounded h-2 transition-all"
                  style={{ width: `${priorA * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-purple-400">Posterior P(A|B)</span>
                <span>{(posterior * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded h-2">
                <div
                  className="bg-purple-500 rounded h-2 transition-all"
                  style={{ width: `${posterior * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formula */}
      <div className="mt-6 p-4 bg-slate-900/30 rounded border border-slate-700">
        <p className="text-sm text-slate-300 font-mono">
          P(A|B) = P(B|A) × P(A) / P(B) = {likelihood.toFixed(2)} ×{" "}
          {priorA.toFixed(2)} / {marginal.toFixed(2)} ={" "}
          <span className="text-purple-400 font-bold">
            {posterior.toFixed(4)}
          </span>
        </p>
      </div>

      {/* Interpretation */}
      <div className="mt-4 p-4 bg-blue-500/10 rounded border border-blue-500/20 text-sm text-blue-200">
        <strong>Interpretation:</strong> The evidence{" "}
        {posterior > priorA ? "increases your belief" : "decreases your belief"}{" "}
        in hypothesis A from {(priorA * 100).toFixed(1)}% to{" "}
        {(posterior * 100).toFixed(1)}%.
      </div>
    </div>
  );
}
