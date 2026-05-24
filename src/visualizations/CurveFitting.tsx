"use client";

import { useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

function linearRegression(xs: number[], ys: number[]) {
  const n = xs.length;
  if (n === 0) return { m: 0, b: 0 };
  const xbar = xs.reduce((s, v) => s + v, 0) / n;
  const ybar = ys.reduce((s, v) => s + v, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - xbar) * (ys[i] - ybar);
    den += (xs[i] - xbar) ** 2;
  }
  const m = den === 0 ? 0 : num / den;
  const b = ybar - m * xbar;
  return { m, b };
}

export default function CurveFittingVisualizer() {
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>(() =>
    Array.from({ length: 30 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 10,
    })),
  );

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const { m, b } = linearRegression(xs, ys);

  const lineData = [
    { x: 0, y: b },
    { x: 10, y: m * 10 + b },
  ];

  const regenerate = () =>
    setPoints(
      Array.from({ length: 30 }, () => ({
        x: Math.random() * 10,
        y: Math.random() * 10,
      })),
    );

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="subsection-title">Curve Fitting (Linear Regression)</h3>
        <button onClick={regenerate} className="btn-secondary">
          Regenerate
        </button>
      </div>

      <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="x" stroke="#94a3b8" domain={[0, 10]} />
            <YAxis dataKey="y" stroke="#94a3b8" domain={[0, 10]} />
            <Tooltip />
            <Scatter data={points} fill="#60a5fa" />
            <Line
              type="linear"
              dataKey="y"
              data={lineData}
              stroke="#fb923c"
              dot={false}
              isAnimationActive={true}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
