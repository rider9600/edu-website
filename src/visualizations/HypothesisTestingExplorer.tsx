"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function mean(arr: number[]) {
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}
function std(arr: number[], mu?: number) {
  const m = mu ?? mean(arr);
  return Math.sqrt(
    arr.reduce((s, v) => s + (v - m) ** 2, 0) / (arr.length - 1),
  );
}

export default function HypothesisTestingExplorer() {
  const [n, setN] = useState(30);
  const [mu1, setMu1] = useState(0);
  const [mu2, setMu2] = useState(0.5);
  const [sd, setSd] = useState(1);
  const [trials, setTrials] = useState(5000);
  const [hist, setHist] = useState<Array<{ name: string; count: number }>>([]);
  const [pValue, setPValue] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const run = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 50));
    const tStats: number[] = [];
    for (let i = 0; i < trials; i++) {
      const s1 = Array.from({ length: n }, () => mu1 + sd * randNormal());
      const s2 = Array.from({ length: n }, () => mu2 + sd * randNormal());
      const m1 = mean(s1);
      const m2 = mean(s2);
      const se = Math.sqrt(std(s1, m1) ** 2 / n + std(s2, m2) ** 2 / n);
      const t = (m1 - m2) / se;
      tStats.push(t);
    }

    // two-sided p-value estimate using permutation of t distribution
    const observed = tStats[0];
    const greater = tStats.filter(
      (v) => Math.abs(v) >= Math.abs(observed),
    ).length;
    const p = greater / tStats.length;

    // build simple histogram for chart
    const bins: Record<string, number> = {};
    const min = Math.min(...tStats);
    const max = Math.max(...tStats);
    const bcount = 30;
    const width = (max - min) / bcount;
    for (let i = 0; i < bcount; i++) bins[i.toString()] = 0;
    tStats.forEach((v) => {
      const idx = Math.min(Math.floor((v - min) / width), bcount - 1);
      bins[idx.toString()]++;
    });
    const histData = Object.keys(bins).map((k) => ({
      name: k,
      count: bins[k],
    }));

    setHist(histData);
    setPValue(p);
    setIsLoading(false);
  };

  const reset = () => {
    setHist([]);
    setPValue(null);
    setTrials(5000);
    setN(30);
  };

  return (
    <div className="card">
      <h3 className="subsection-title">Hypothesis Testing Explorer</h3>
      <p className="text-slate-400 mb-4">
        Two-sample t-test simulation (estimate p-value).
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">
            Sample size per group: {n}
          </p>
          <input
            type="range"
            min={5}
            max={200}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Mean Group A: {mu1}</p>
          <input
            type="range"
            min={-3}
            max={3}
            step={0.1}
            value={mu1}
            onChange={(e) => setMu1(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Mean Group B: {mu2}</p>
          <input
            type="range"
            min={-3}
            max={3}
            step={0.1}
            value={mu2}
            onChange={(e) => setMu2(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 items-end mb-6">
        <div className="flex-1 min-w-[200px]">
          <p className="text-xs text-slate-400 mb-2">
            Trials: {trials.toLocaleString()}
          </p>
          <input
            type="range"
            min={100}
            max={20000}
            step={100}
            value={trials}
            onChange={(e) => setTrials(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button onClick={run} disabled={isLoading} className="btn-primary">
          {isLoading ? "Running..." : "Run"}
        </button>
        {hist.length > 0 && (
          <button onClick={reset} className="btn-secondary">
            Reset
          </button>
        )}
      </div>

      {hist.length > 0 && (
        <>
          <div className="bg-slate-900/30 p-4 rounded border border-slate-700 mb-6">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={hist}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Estimated p-value</p>
              <p className="text-xl font-bold text-emerald-400">
                {pValue?.toFixed(4)}
              </p>
            </div>
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Decision (α = 0.05)</p>
              <p
                className={`text-xl font-bold ${pValue !== null && pValue < 0.05 ? "text-red-400" : "text-green-400"}`}
              >
                {pValue !== null && pValue < 0.05
                  ? "Reject H₀"
                  : "Fail to reject H₀"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// simple Box-Muller for normal samples
function randNormal() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
