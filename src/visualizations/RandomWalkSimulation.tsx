"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RandomWalkSimulation() {
  const [steps, setSteps] = useState(100);
  const [numWalks, setNumWalks] = useState(5);
  const [data, setData] = useState<
    Array<{ step: number; [key: string]: number }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<null | {
    finalPositions: number[];
    mean: number;
    stdDev: number;
  }>(null);

  const simulate = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 50));

    const walks: number[][] = [];
    const finalPositions: number[] = [];

    for (let w = 0; w < numWalks; w++) {
      const walk = [0];
      let pos = 0;
      for (let i = 0; i < steps; i++) {
        pos += Math.random() < 0.5 ? 1 : -1;
        walk.push(pos);
      }
      walks.push(walk);
      finalPositions.push(pos);
    }

    const mean =
      finalPositions.reduce((a, b) => a + b, 0) / finalPositions.length;
    const variance =
      finalPositions.reduce((a, b) => a + Math.pow(b - mean, 2), 0) /
      finalPositions.length;
    const stdDev = Math.sqrt(variance);

    const chartData: Array<{ step: number; [key: string]: number }> = [];
    for (let s = 0; s <= steps; s++) {
      const point: { step: number; [key: string]: number } = { step: s };
      for (let w = 0; w < numWalks; w++) {
        point[`walk_${w}`] = walks[w][s];
      }
      chartData.push(point);
    }

    setData(chartData);
    setStats({ finalPositions, mean, stdDev });
    setIsLoading(false);
  };

  const reset = () => {
    setData([]);
    setStats(null);
  };

  const colors = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#6366f1",
    "#14b8a6",
    "#f97316",
  ];

  return (
    <div className="card">
      <h3 className="subsection-title">Random Walk Simulation</h3>
      <p className="text-slate-400 mb-4">
        Simulate multiple 1D random walks (step ±1).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Steps: <span className="font-bold">{steps}</span>
          </label>
          <input
            type="range"
            min={10}
            max={1000}
            step={10}
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Number of Walks: <span className="font-bold">{numWalks}</span>
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={numWalks}
            onChange={(e) => setNumWalks(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button onClick={simulate} disabled={isLoading} className="btn-primary">
          {isLoading ? "Running..." : "Run Simulation"}
        </button>
        {data.length > 0 && (
          <button onClick={reset} className="btn-secondary">
            Reset
          </button>
        )}
      </div>

      {data.length > 0 && (
        <>
          <div className="bg-slate-900/30 p-4 rounded border border-slate-700 mb-6">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="step" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                {Array.from({ length: numWalks }).map((_, i) => (
                  <Line
                    key={i}
                    type="monotone"
                    dataKey={`walk_${i}`}
                    stroke={colors[i % colors.length]}
                    dot={false}
                    isAnimationActive={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">
                  Mean Final Position
                </p>
                <p className="text-xl font-bold text-blue-400">
                  {stats.mean.toFixed(2)}
                </p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">
                  Std Dev of Final Positions
                </p>
                <p className="text-xl font-bold text-green-400">
                  {stats.stdDev.toFixed(2)}
                </p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Final Positions</p>
                <div className="flex gap-2 flex-wrap">
                  {stats.finalPositions.map((p, i) => (
                    <div
                      key={i}
                      className="text-sm bg-slate-700 rounded px-2 py-1"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
