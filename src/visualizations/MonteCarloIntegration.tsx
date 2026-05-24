"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function MonteCarloIntegration() {
  const [samples, setSamples] = useState(2000);
  const [data, setData] = useState<
    Array<{ x: number; y: number; inside: boolean }>
  >([]);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Example: integrate f(x) = sin(x) on [0, pi]
  const f = (x: number) => Math.sin(x);
  const a = 0;
  const b = Math.PI;
  const ymax = 1;

  const run = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 50));
    const pts: Array<{ x: number; y: number; inside: boolean }> = [];
    let inside = 0;
    for (let i = 0; i < samples; i++) {
      const x = a + Math.random() * (b - a);
      const y = Math.random() * ymax;
      const inCurve = y <= f(x);
      if (inCurve) inside++;
      pts.push({ x, y, inside: inCurve });
    }
    const areaEstimate = (inside / samples) * (b - a) * ymax;
    setData(pts.slice(0, 5000));
    setEstimate(areaEstimate);
    setIsLoading(false);
  };

  const reset = () => {
    setData([]);
    setEstimate(null);
    setSamples(2000);
  };

  return (
    <div className="card">
      <h3 className="subsection-title">Monte Carlo Integration</h3>
      <p className="text-slate-400 mb-4">
        Estimate area under f(x)=sin(x) on [0, π] using random sampling.
      </p>

      <div className="mb-6 flex gap-4 items-end flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-2 text-slate-200">
            Samples: {samples.toLocaleString()}
          </label>
          <input
            type="range"
            min={100}
            max={20000}
            step={100}
            value={samples}
            onChange={(e) => setSamples(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg"
          />
        </div>
        <button onClick={run} disabled={isLoading} className="btn-primary">
          {isLoading ? "Running..." : "Run"}
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
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[a, b]}
                  stroke="#94a3b8"
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  domain={[0, ymax]}
                  stroke="#94a3b8"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter
                  name="points"
                  data={data}
                  fill="#3b82f6"
                  fillOpacity={0.7}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Estimate</p>
              <p className="text-xl font-bold text-emerald-400">
                {estimate?.toFixed(4)}
              </p>
            </div>
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">True Value</p>
              <p className="text-xl font-bold text-amber-400">{2}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
