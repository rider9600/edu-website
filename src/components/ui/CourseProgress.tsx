"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ProgressState = Record<string, boolean>;

export default function CourseProgress() {
  const [lectures, setLectures] = useState<string[]>([]);
  const [progress, setProgress] = useState<ProgressState>({});

  useEffect(() => {
    const saved = localStorage.getItem("lectureProgress");
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  useEffect(() => {
    fetch("/api/lectures")
      .then((r) => r.json())
      .then((data) => setLectures(data.lectures || []));
  }, []);

  useEffect(() => {
    localStorage.setItem("lectureProgress", JSON.stringify(progress));
  }, [progress]);

  function toggle(slug: string) {
    setProgress((p) => ({ ...p, [slug]: !p[slug] }));
  }

  if (lectures.length === 0)
    return <div className="text-sm text-slate-400">Loading syllabus…</div>;

  const done = lectures.filter((l) => progress[l]).length;

  return (
    <div className="card p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-slate-100">
          Course Progress
        </div>
        <div className="text-xs text-slate-400">
          {done}/{lectures.length}
        </div>
      </div>
      <ul className="space-y-1 max-h-56 overflow-auto">
        {lectures.map((l) => (
          <li key={l} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!!progress[l]}
              onChange={() => toggle(l)}
              className="accent-blue-500"
            />
            <Link
              href={`/lectures/${l}`}
              className="text-sm text-slate-200 hover:underline"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
