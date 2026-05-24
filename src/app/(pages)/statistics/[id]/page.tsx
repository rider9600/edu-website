import Link from "next/link";
import { STATISTICS_TOPICS } from "@/lib/constants";

export default async function StatisticsTopicPage(props: any) {
  const { id } = (await props.params) as { id: string };
  const topicId = parseInt(id);
  const topic = STATISTICS_TOPICS[topicId - 1];

  if (!topic) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-100 mb-4">
            Topic Not Found
          </h1>
          <Link href="/statistics" className="btn-primary">
            Back to Statistics
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
        <Link href="/statistics" className="hover:text-blue-400 transition">
          Statistics
        </Link>
        <span>/</span>
        <span className="text-slate-300">{topic.title}</span>
      </div>

      {/* Header */}
      <section className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">{topic.icon}</div>
          <div>
            <h1 className="text-4xl font-bold text-slate-100 mb-2">
              {topic.title}
            </h1>
            <p className="text-slate-400">{topic.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="card mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">Overview</h2>
        <p className="text-slate-300 mb-6">{topic.details}</p>

        {/* Interactive Section */}
        <div className="bg-slate-900 rounded-lg p-8 mb-6 border border-slate-700">
          <h3 className="text-lg font-bold text-slate-100 mb-4">
            Interactive Visualization
          </h3>
          <p className="text-slate-400 mb-4">
            An interactive demo will appear here. This section will include
            visualizations, calculators, and statistical tools specific to{" "}
            {topic.title}.
          </p>
          <div className="h-64 bg-slate-800 rounded border border-slate-600 flex items-center justify-center">
            <p className="text-slate-500">Visualization placeholder</p>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-100 mb-4">
            Key Concepts
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 mt-1">▪</span>
              <span>Fundamental definition and meaning</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 mt-1">▪</span>
              <span>Mathematical formulation and notation</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 mt-1">▪</span>
              <span>Practical applications and examples</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 mt-1">▪</span>
              <span>Common pitfalls and how to avoid them</span>
            </li>
          </ul>
        </div>

        {/* Further Reading */}
        <div className="border-t border-slate-700 pt-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">
            Further Reading
          </h3>
          <p className="text-slate-400">
            Additional resources, formulas, and problems will be added soon.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/statistics" className="btn-secondary">
          ← Back to Statistics
        </Link>
        <div className="flex gap-4">
          {topicId > 1 && (
            <Link href={`/statistics/${topicId - 1}`} className="btn-secondary">
              Previous
            </Link>
          )}
          {topicId < STATISTICS_TOPICS.length && (
            <Link href={`/statistics/${topicId + 1}`} className="btn-primary">
              Next →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
