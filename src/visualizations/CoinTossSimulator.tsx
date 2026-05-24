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

export default function CoinTossSimulator() {
  const [flips, setFlips] = useState(100);
  const [data, setData] = useState<
    Array<{ flip: number; heads: number; ratio: number }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const simulate = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    const results = [];
    let headsCount = 0;

    for (let i = 1; i <= flips; i++) {
      const result = Math.random() < 0.5;
      if (result) headsCount++;
      results.push({
        flip: i,
        heads: headsCount,
        ratio: headsCount / i,
      });
    }

    setData(results);
    setIsLoading(false);
  };

  const reset = () => {
    setData([]);
    setFlips(100);
  };

  const exportCsv = () => {
    if (data.length === 0) return;
    const headers = ["flip", "heads", "ratio"];
    const rows = data.map((d) => [d.flip, d.heads, d.ratio.toFixed(6)]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "coin_toss_results.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const statistics =
    data.length > 0
      ? {
          totalFlips: data[data.length - 1].flip,
          totalHeads: data[data.length - 1].heads,
          totalTails: data[data.length - 1].flip - data[data.length - 1].heads,
          finalRatio: (data[data.length - 1].ratio * 100).toFixed(2),
        }
      : null;

  return (
    <div className="card">
      <h3 className="subsection-title">Coin Toss Simulator</h3>
      <p className="text-slate-400 mb-6">
        Watch how the empirical probability converges to 50% as we flip more
        coins. The line shows the ratio of heads to total flips over time.
      </p>

      <div className="mb-6">
        <div className="flex gap-4 items-end flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-2 text-slate-200">
              Number of flips: {flips.toLocaleString()}
            </label>
            <input
              type="range"
              min="10"
              max="10000"
              step="10"
              value={flips}
              onChange={(e) => setFlips(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>10</span>
              <span>10,000</span>
            </div>
          </div>
          <button
            onClick={simulate}
            disabled={isLoading}
            className="btn-primary disabled:opacity-50"
          >
            {isLoading ? "Running..." : "Run Simulation"}
          </button>
          {data.length > 0 && (
            <>
              <button onClick={reset} className="btn-secondary">
                Reset
              </button>
              <button onClick={exportCsv} className="btn-outline">
                Export CSV
              </button>
            </>
          )}
        </div>
      </div>

      {data.length > 0 && (
        <>
          <div className="bg-slate-900/30 p-4 rounded border border-slate-700 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis
                  dataKey="flip"
                  stroke="#94a3b8"
                  label={{ value: "Flip #", position: "insideBottom", dy: 10 }}
                />
                <YAxis
                  stroke="#94a3b8"
                  domain={[0, 1]}
                  label={{
                    value: "Heads Ratio",
                    angle: -90,
                    position: "insideLeft",
                    dx: -10,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                  formatter={(value) => (value as number).toFixed(3)}
                />
                <Line
                  type="monotone"
                  dataKey="ratio"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  name="Heads Ratio"
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {statistics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Total Flips</p>
                <p className="text-xl font-bold text-blue-400">
                  {statistics.totalFlips.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Heads</p>
                <p className="text-xl font-bold text-green-400">
                  {statistics.totalHeads.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Tails</p>
                <p className="text-xl font-bold text-yellow-400">
                  {statistics.totalTails.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Heads Ratio</p>
                <p className="text-xl font-bold text-purple-400">
                  {statistics.finalRatio}%
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
