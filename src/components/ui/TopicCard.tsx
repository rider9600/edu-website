"use client";

import Link from "next/link";

interface TopicCardProps {
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  href: string;
  icon?: React.ReactNode;
}

export default function TopicCard({
  title,
  description,
  difficulty,
  href,
  icon,
}: TopicCardProps) {
  const difficultyColors = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <Link
      href={href}
      className="card hover:border-blue-500/50 hover:bg-slate-750 transition group cursor-pointer block"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{icon || "📊"}</div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[difficulty]}`}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-300 transition mb-2">
        {title}
      </h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </Link>
  );
}
