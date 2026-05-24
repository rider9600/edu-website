"use client";

import React from "react";

export default function GraphControls({
  onZoomIn,
  onZoomOut,
  onReset,
}: {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onReset?: () => void;
}) {
  return (
    <div className="flex gap-2">
      <button className="btn-secondary" onClick={onZoomIn}>
        Zoom In
      </button>
      <button className="btn-secondary" onClick={onZoomOut}>
        Zoom Out
      </button>
      <button className="btn-secondary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
