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

export default function CentralLimitTheoremVisualizer() {
  const [sampleSize, setSampleSize] = useState(2);
  const [numSamples, setNumSamples] = useState(1000);
  const [data, setData] = useState<
    Array<{ mean: number; count: number; range: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<{
    mean: number;
    stdDev: number;
    theoretical: number;
  } | null>(null);

  const simulate = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));

    const sampleMeans: number[] = [];

    for (let i = 0; i < numSamples; i++) {
      let sum = 0;
      for (let j = 0; j < sampleSize; j++) {
        sum += Math.random() * 10; // 0-10 uniform distribution
      }
      sampleMeans.push(sum / sampleSize);
    }

    // Calculate mean and std dev of sample means
    const meanOfMeans = sampleMeans.reduce((a, b) => a + b) / numSamples;
    const variance =
      sampleMeans.reduce((a, b) => a + Math.pow(b - meanOfMeans, 2)) /
      numSamples;
    const stdDev = Math.sqrt(variance);

    // Create histogram
    const binSize = 0.5;
    const binCounts: { [key: string]: number } = {};
    const minMean = Math.floor(Math.min(...sampleMeans) / binSize) * binSize;
    const maxMean = Math.ceil(Math.max(...sampleMeans) / binSize) * binSize;

    for (
      let bin = minMean;
      bin <= maxMean;
      bin = Math.round((bin + binSize) * 100) / 100
    ) {
      const binKey = bin.toFixed(1);
      binCounts[binKey] = 0;
    }

    for (const mean of sampleMeans) {
      const binKey = (
        Math.round((Math.floor(mean / binSize) * binSize + binSize / 2) * 10) /
        10
      ).toFixed(1);
      if (binCounts[binKey] !== undefined) {
        binCounts[binKey]++;
      }
    }

    const chartData = Object.entries(binCounts).map(([range, count]) => ({
      range,
      mean: parseFloat(range),
      count,
    }));

    setData(chartData);
    setStats({
      mean: meanOfMeans,
      stdDev,
      theoretical: Math.sqrt((10 * 10) / (12 * sampleSize)) || 0,
    });

    setIsLoading(false);
  };

  const reset = () => {
    setData([]);
    setStats(null);
  };

  return (
    <div className="card">
      <h3 className="subsection-title">Central Limit Theorem Visualizer</h3>
      <p className="text-slate-400 mb-6">
        Watch how sample means form a normal distribution as you increase the
        sample size. This demonstrates the Central Limit Theorem!
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-slate-200">
              Sample Size
            </label>
            <span className="text-blue-400 font-bold">{sampleSize}</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={sampleSize}
            onChange={(e) => setSampleSize(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg"
          />
          <p className="text-xs text-slate-500 mt-1">
            Drawing {sampleSize} values per sample
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-slate-200">
              Number of Samples
            </label>
            <span className="text-green-400 font-bold">
              {numSamples.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={numSamples}
            onChange={(e) => setNumSamples(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg"
          />
          <p className="text-xs text-slate-500 mt-1">
            Total samples to collect
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
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

      {/* Results */}
      {data.length > 0 && (
        <>
          {/* Chart */}
          <div className="bg-slate-900/30 p-4 rounded border border-slate-700 mb-6">
            <p className="text-sm text-slate-400 mb-3">
              Distribution of Sample Means
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="range" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Bar dataKey="count" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">
                Mean of Sample Means
              </p>
              <p className="text-xl font-bold text-blue-400">
                {stats?.mean.toFixed(2) || "—"}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Expected: 5.0 (mean of uniform 0-10)
              </p>
            </div>
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Std Dev (Observed)</p>
              <p className="text-xl font-bold text-green-400">
                {stats?.stdDev.toFixed(4) || "—"}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Standard error of the mean
              </p>
            </div>
            <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">
                Std Dev (Theoretical)
              </p>
              <p className="text-xl font-bold text-purple-400">
                {stats?.theoretical.toFixed(4) || "—"}
              </p>
              <p className="text-xs text-slate-500 mt-1">σ / √n = 2.887 / √n</p>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-4 p-4 bg-cyan-500/10 rounded border border-cyan-500/20 text-sm text-cyan-200">
            <strong>Key Insight:</strong> Notice how as you increase the sample
            size, the distribution of means becomes more concentrated and normal
            (bell-shaped), even though the underlying population is uniform!
          </div>
        </>
      )}
    </div>
  );
}
