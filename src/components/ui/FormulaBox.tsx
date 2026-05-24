"use client";

import { useState } from "react";

interface FormulaBoxProps {
  title: string;
  formula: string;
  explanation?: string;
  variables?: Record<string, string>;
}

export default function FormulaBox({
  title,
  formula,
  explanation,
  variables,
}: FormulaBoxProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(formula);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
      const el = document.createElement("textarea");
      el.value = formula;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="card border-l-4 border-l-blue-500 bg-slate-800/50">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-semibold text-blue-400">{title}</h4>
        <button
          onClick={copy}
          className="text-xs text-slate-200 bg-slate-700/40 px-2 py-1 rounded hover:bg-slate-700"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="bg-slate-900/50 p-4 rounded border border-slate-700 mb-3 overflow-x-auto">
        <code className="text-slate-100 font-mono text-sm">{formula}</code>
      </div>
      {explanation && (
        <p className="text-slate-300 text-sm mb-3">{explanation}</p>
      )}
      {variables && (
        <div className="text-xs text-slate-400 space-y-1">
          {Object.entries(variables).map(([key, value]) => (
            <div key={key}>
              <span className="font-mono text-blue-300">{key}</span> — {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
