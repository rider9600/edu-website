import Link from "next/link";
import { TopicCard } from "@/components";
import {
  BEGINNER_TOPICS,
  INTERMEDIATE_TOPICS,
  FEATURES,
} from "@/lib/constants";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100">
          Master <span className="text-blue-400">Probability & Statistics</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
          Interactive learning with visual intuition, engaging simulations, and
          engineering-friendly explanations. Designed for students and
          professionals.
        </p>
        <div className="flex gap-4">
          <Link href="/probability" className="btn-primary">
            Start Learning
          </Link>
          <Link href="/visualizations" className="btn-secondary">
            View Simulations
          </Link>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="section-title">Beginner Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEGINNER_TOPICS.map((topic, i) => (
            <TopicCard
              key={i}
              title={topic.title}
              description={topic.description}
              difficulty="beginner"
              href={`/topic/${i + 1}`}
              icon={topic.icon}
            />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="section-title">Intermediate Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERMEDIATE_TOPICS.map((topic, i) => (
            <TopicCard
              key={i}
              title={topic.title}
              description={topic.description}
              difficulty="intermediate"
              href={`/topic/${i + 5}`}
              icon={topic.icon}
            />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="section-title">Why Learn Here?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="card text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
