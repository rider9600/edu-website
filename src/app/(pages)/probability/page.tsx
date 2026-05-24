"use client";

import { TopicCard } from "@/components";
import { BEGINNER_TOPICS, INTERMEDIATE_TOPICS } from "@/lib/constants";
import Sidebar from "@/components/layout/Sidebar";

const PROBABILITY_TOPICS = [
  {
    title: "What is Probability",
    description: "Introduction to probability concepts and basic definitions",
    icon: "🎲",
  },
  {
    title: "Sample Space & Events",
    description: "Understanding outcomes and how to define events",
    icon: "📋",
  },
  {
    title: "Conditional Probability",
    description: "Probability of events given certain conditions",
    icon: "🔗",
  },
  {
    title: "Bayes Theorem",
    description: "Update probabilities with new information",
    icon: "🧠",
  },
  {
    title: "Random Variables",
    description: "Mapping outcomes to numerical values",
    icon: "🎯",
  },
  {
    title: "Distributions",
    description: "Probability Mass and Density Functions",
    icon: "📊",
  },
];

export default function ProbabilityPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          Probability Fundamentals
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Master the foundations of probability with visual intuition and
          interactive examples. Learn how to think probabilistically about
          uncertainty.
        </p>
      </section>
      <section>
        <h2 className="section-title">Core Topics</h2>
        <div className="md:flex md:gap-8">
          <Sidebar
            topics={PROBABILITY_TOPICS.map((t, i) => ({
              title: t.title,
              description: t.description,
              href: `/probability/${i + 1}`,
              icon: t.icon,
            }))}
          />

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROBABILITY_TOPICS.map((topic, i) => (
                <TopicCard
                  key={i}
                  title={topic.title}
                  description={topic.description}
                  difficulty={i < 4 ? "beginner" : "intermediate"}
                  href={`/probability/${i + 1}`}
                  icon={topic.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
