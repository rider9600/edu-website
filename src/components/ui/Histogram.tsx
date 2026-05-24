"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Histogram({
  values,
  bins = 20,
  xLabel,
  yLabel,
}: {
  values: number[];
  bins?: number;
  xLabel?: string;
  yLabel?: string;
}) {
  if (!values || values.length === 0) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = (max - min) / bins || 1;
  const counts = new Array(bins).fill(0);
  values.forEach((v) => {
    const idx = Math.min(Math.floor((v - min) / width), bins - 1);
    counts[idx]++;
  });
  const data = counts.map((c, i) => ({
    bin: `${(min + i * width).toFixed(2)}`,
    count: c,
  }));

  return (
    <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis
            dataKey="bin"
            stroke="#94a3b8"
            label={
              xLabel
                ? { value: xLabel, position: "insideBottom", dy: 10 }
                : undefined
            }
          />
          <YAxis
            stroke="#94a3b8"
            label={
              yLabel
                ? { value: yLabel, angle: -90, position: "insideLeft", dx: -10 }
                : undefined
            }
          />
          <Tooltip />
          <Bar dataKey="count" fill="#60a5fa" isAnimationActive={true} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
