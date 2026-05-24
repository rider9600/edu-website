"use client";

import Link from "next/link";
import { BEGINNER_TOPICS, INTERMEDIATE_TOPICS } from "@/lib/constants";
import { useParams } from "next/navigation";

export default function TopicPage() {
  const params = useParams();
  const topicId = parseInt(params.id as string);

  // Combine all topics
  const allTopics = [...BEGINNER_TOPICS, ...INTERMEDIATE_TOPICS];
  const topic = allTopics[topicId - 1];

  if (!topic) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-100 mb-4">
            Topic Not Found
          </h1>
          <p className="text-slate-400 mb-8">
            The topic you are looking for does not exist.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-slate-400">
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-300">{topic.title}</span>
      </div>

      {/* Header */}
      <section className="mb-12">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-5xl mb-4">{topic.icon || "📊"}</div>
            <h1 className="text-4xl font-bold text-slate-100 mb-4">
              {topic.title}
            </h1>
          </div>
        </div>
        <p className="text-lg text-slate-300 mb-8">{topic.description}</p>
      </section>

      {/* Content Section */}
      <section className="card mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">
          Learn {topic.title}
        </h2>
        <p className="text-slate-400 mb-6">
          Coming soon: Detailed explanation and interactive content for{" "}
          <strong>{topic.title}</strong>. This page is under construction.
        </p>

        {/* Interactive Section Placeholder */}
        <div className="bg-slate-900 rounded-lg p-8 mb-6 border border-slate-700">
          <h3 className="text-lg font-bold text-slate-100 mb-4">
            Interactive Demo
          </h3>
          <p className="text-slate-400">
            Interactive visualization and examples will appear here.
          </p>
        </div>

        {/* Related Topics */}
        <div>
          <h3 className="text-lg font-bold text-slate-100 mb-4">
            Related Topics
          </h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Fundamental concepts</li>
            <li>Mathematical formulation</li>
            <li>Real-world applications</li>
            <li>Advanced variations</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/" className="btn-secondary">
          ← Back to Topics
        </Link>
        <div className="flex gap-4">
          {topicId > 1 && (
            <Link href={`/topic/${topicId - 1}`} className="btn-secondary">
              Previous Topic
            </Link>
          )}
          {topicId < allTopics.length && (
            <Link href={`/topic/${topicId + 1}`} className="btn-primary">
              Next Topic →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
