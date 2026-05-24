"use client";

import { useState } from "react";
import Histogram from "./Histogram";

export default function InteractiveHistogram({
  values,
  initialBins = 20,
}: {
  values: number[];
  initialBins?: number;
}) {
  const [bins, setBins] = useState(initialBins);

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setBins(Math.max(5, bins - 5))}
          className="btn-secondary"
        >
          - Bins
        </button>
        <button onClick={() => setBins(bins + 5)} className="btn-secondary">
          + Bins
        </button>
        <div className="text-sm text-slate-300 ml-2">Bins: {bins}</div>
      </div>
      <Histogram
        values={values}
        bins={bins}
        xLabel="Value"
        yLabel="Frequency"
      />
    </div>
  );
}
