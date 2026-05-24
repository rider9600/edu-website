"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DiceSimulator() {
  const [rolls, setRolls] = useState(1000);
  const [data, setData] = useState<
    Array<{ face: number; count: number; percentage: number }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const simulate = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    const counts = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < rolls; i++) {
      const result = Math.floor(Math.random() * 6) + 1;
      counts[result - 1]++;
    }

    const chartData = counts.map((count, i) => ({
      face: i + 1,
      count,
      percentage: Number(((count / rolls) * 100).toFixed(1)),
    }));

    setData(chartData);
    setIsLoading(false);
  };

  const reset = () => {
    setData([]);
    setRolls(1000);
  };

  const exportCsv = () => {
    if (data.length === 0) return;
    const headers = ["face", "count", "percentage"];
    const rows = data.map((d) => [d.face, d.count, d.percentage]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dice_simulation_results.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const expectedFrequency = rolls / 6;

  return (
    <div className="card">
      <h3 className="subsection-title">Dice Probability Simulator</h3>
      <p className="text-slate-400 mb-6">
        Simulate fair dice rolls and observe the uniform distribution. Each face
        should appear approximately 16.7% of the time.
      </p>

      <div className="mb-6">
        <div className="flex gap-4 items-end flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-2 text-slate-200">
              Number of rolls: {rolls.toLocaleString()}
            </label>
            <input
              type="range"
              min="10"
              max="100000"
              step="100"
              value={rolls}
              onChange={(e) => setRolls(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>10</span>
              <span>100,000</span>
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
            <button onClick={reset} className="btn-secondary">
              Reset
            </button>
          )}
        </div>
      </div>

      {data.length > 0 && (
        <>
          <div className="bg-slate-900/30 p-4 rounded border border-slate-700 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis
                  dataKey="face"
                  stroke="#94a3b8"
                  label={{ value: "Face", position: "insideBottom", dy: 10 }}
                />
                <YAxis
                  stroke="#94a3b8"
                  label={{
                    value: "Count",
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
                />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#10b981"
                  name="Frequency"
                  isAnimationActive={true}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-2">Expected Frequency</p>
              <p className="text-lg font-bold text-blue-400">
                {expectedFrequency.toFixed(0)} ({(100 / 6).toFixed(1)}%)
              </p>
              <p className="text-xs text-slate-500 mt-2">per face</p>
            </div>
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-2">Total Rolls</p>
              <p className="text-lg font-bold text-purple-400">
                {rolls.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 mt-2">simulations</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-500/10 rounded border border-blue-500/20 text-sm text-blue-200">
            <strong>Note:</strong> Due to random variation, the observed
            frequencies may differ slightly from 16.7%. Increase the number of
            rolls to see convergence to the expected value.
          </div>

          <div className="flex gap-3 mt-4">
            <button onClick={exportCsv} className="btn-outline">
              Export CSV
            </button>
            <button onClick={reset} className="btn-secondary">
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}
