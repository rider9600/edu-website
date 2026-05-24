"use client";

import { TopicCard } from "@/components";

const STATISTICS_TOPICS = [
  {
    title: "Descriptive Statistics",
    description: "Summarize and describe data using mean, median, std dev",
    icon: "📊",
  },
  {
    title: "Inferential Statistics",
    description: "Make conclusions about populations from samples",
    icon: "🔍",
  },
  {
    title: "Hypothesis Testing",
    description: "Test claims about data with statistical rigor",
    icon: "✅",
  },
  {
    title: "Confidence Intervals",
    description: "Estimate ranges for population parameters",
    icon: "📈",
  },
  {
    title: "Correlation & Regression",
    description: "Analyze relationships between variables",
    icon: "🔗",
  },
  {
    title: "ANOVA & Tests",
    description: "Compare means across multiple groups",
    icon: "📋",
  },
];

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
