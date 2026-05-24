"use client";

import Link from "next/link";
import { useState } from "react";
import { BEGINNER_TOPICS, INTERMEDIATE_TOPICS } from "@/lib/constants";

type Topic = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
};

export default function Sidebar({ topics }: { topics: Topic[] }) {
  const [q, setQ] = useState("");
  const filtered = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(q.toLowerCase()) ||
      (topic.description || "").toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <aside className="w-full md:w-64">
      <div className="card p-4 mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search topics..."
          className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-slate-200"
        />
      </div>

      <div className="space-y-4">
        {q && (
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">
              Search Results
            </h4>
            <div className="space-y-1">
              {filtered.length > 0 ? (
                filtered.map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="block px-3 py-2 rounded hover:bg-slate-800/50"
                  >
                    <div className="text-sm text-slate-200">{topic.title}</div>
                  </Link>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-slate-400">
                  No topics found.
                </div>
              )}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-2">
            Probability
          </h4>
          <div className="space-y-1">
            {BEGINNER_TOPICS.map((topic, i) => (
              <Link
                key={i}
                href={`/probability/${i + 1}`}
                className="block px-3 py-2 rounded hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-xl">{topic.icon}</div>
                  <div className="text-sm text-slate-200">{topic.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-2">
            Statistics
          </h4>
          <div className="space-y-1">
            {INTERMEDIATE_TOPICS.map((topic, i) => (
              <Link
                key={i}
                href={`/statistics/${i + 1}`}
                className="block px-3 py-2 rounded hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-xl">{topic.icon}</div>
                  <div className="text-sm text-slate-200">{topic.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-2">
            Explore
          </h4>
          <div className="space-y-1">
            <Link
              href="/visualizations"
              className="block px-3 py-2 rounded hover:bg-slate-800/50"
            >
              Visualizations
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
