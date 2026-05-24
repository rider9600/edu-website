"use client";

import { TopicCard } from "@/components";
import { STATISTICS_TOPICS } from "@/lib/constants";

export default function StatisticsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          Statistical Methods
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Learn how to analyze data, test hypotheses, and make data-driven
          decisions.
        </p>
      </section>

      <section>
        <h2 className="section-title">Core Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATISTICS_TOPICS.map((topic, i) => (
            <TopicCard
              key={i}
              title={topic.title}
              description={topic.description}
              difficulty={i < 3 ? "beginner" : "intermediate"}
              href={`/statistics/${i + 1}`}
              icon={topic.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
