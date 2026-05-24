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

const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const binomial = (x: number, n: number, p: number): number => {
  const coeff = factorial(n) / (factorial(x) * factorial(n - x));
  return coeff * Math.pow(p, x) * Math.pow(1 - p, n - x);
};

const generateBinomialData = (n: number, p: number) => {
  const data = [];
  for (let x = 0; x <= Math.min(n, 30); x++) {
    data.push({
      x,
      probability: binomial(x, n, p),
    });
  }
  return data;
};

export default function DistributionParameterExplorer() {
  const [distributionType, setDistributionType] = useState<
    "binomial" | "normal"
  >("binomial");
  const [n, setN] = useState(20);
  const [p, setP] = useState(0.5);
  const [mean, setMean] = useState(0);
  const [sigma, setSigma] = useState(1);

  const getDistributionData = () => {
    if (distributionType === "binomial") {
      return generateBinomialData(n, p);
    } else {
      // Normal distribution
      const data = [];
      for (let x = mean - 4 * sigma; x <= mean + 4 * sigma; x += 0.5) {
        const exponent = -Math.pow(x - mean, 2) / (2 * sigma * sigma);
        const probability =
          (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
        data.push({
          x: parseFloat(x.toFixed(2)),
          probability,
        });
      }
      return data;
    }
  };

  const data = getDistributionData();

  return (
    <div className="card">
      <h3 className="subsection-title">Distribution Parameter Explorer</h3>
      <p className="text-slate-400 mb-6">
        Explore how probability distributions change as you adjust their
        parameters.
      </p>

      {/* Distribution Selection */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">
            Distribution Type
          </label>
          <select
            value={distributionType}
            onChange={(e) =>
              setDistributionType(e.target.value as "binomial" | "normal")
            }
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white"
          >
            <option value="binomial">Binomial Distribution</option>
            <option value="normal">Normal Distribution</option>
          </select>
        </div>
      </div>

      {/* Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {distributionType === "binomial" ? (
          <>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-200">
                  Number of Trials (n)
                </label>
                <span className="text-blue-400 font-bold">{n}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={n}
                onChange={(e) => setN(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-200">
                  Success Probability (p)
                </label>
                <span className="text-green-400 font-bold">
                  {(p * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={p}
                onChange={(e) => setP(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-200">
                  Mean (μ)
                </label>
                <span className="text-blue-400 font-bold">
                  {mean.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={mean}
                onChange={(e) => setMean(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-200">
                  Standard Deviation (σ)
                </label>
                <span className="text-green-400 font-bold">
                  {sigma.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={sigma}
                onChange={(e) => setSigma(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg"
              />
            </div>
          </>
        )}
      </div>

      {/* Chart */}
      <div className="bg-slate-900/30 p-4 rounded border border-slate-700 mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="x" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #475569",
              }}
              labelStyle={{ color: "#94a3b8" }}
              formatter={(value) => (value as number).toFixed(4)}
            />
            <Line
              type="monotone"
              dataKey="probability"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
          <p className="text-xs text-slate-400 mb-1">
            {distributionType === "binomial" ? "Expected Value" : "Mean"}
          </p>
          <p className="text-xl font-bold text-blue-400">
            {(distributionType === "binomial" ? n * p : mean).toFixed(2)}
          </p>
        </div>
        <div className="bg-slate-900/30 p-4 rounded border border-slate-700">
          <p className="text-xs text-slate-400 mb-1">
            {distributionType === "binomial" ? "Variance" : "Variance"}
          </p>
          <p className="text-xl font-bold text-green-400">
            {(distributionType === "binomial"
              ? n * p * (1 - p)
              : sigma * sigma
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
