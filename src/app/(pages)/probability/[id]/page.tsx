import Link from "next/link";
import { getTopicContent } from "@/lib/content";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { MDXRemote } from "next-mdx-remote/rsc";
import FormulaBox from "@/components/ui/FormulaBox";
import {
  CoinTossSimulator,
  DiceSimulator,
  BayesTheoremVisualizer,
  DistributionParameterExplorer,
  RandomWalkSimulation,
  MonteCarloIntegration,
  HypothesisTestingExplorer,
} from "@/visualizations";
import { CurveFittingVisualizer } from "@/visualizations";
import { InteractiveHistogram } from "@/components/ui";

const PROBABILITY_TOPICS = [
  {
    title: "What is Probability",
    description: "Introduction to probability concepts and basic definitions",
    icon: "🎲",
    details:
      "Probability is the measure of likelihood that an event will occur. It ranges from 0 to 1, where 0 means impossible and 1 means certain.",
  },
  {
    title: "Sample Space & Events",
    description: "Understanding outcomes and how to define events",
    icon: "📋",
    details:
      "A sample space is the set of all possible outcomes of an experiment. Events are subsets of the sample space.",
  },
  {
    title: "Conditional Probability",
    description: "Probability of events given certain conditions",
    icon: "🔗",
    details:
      "Conditional probability is the probability of an event occurring given that another event has already occurred.",
  },
  {
    title: "Bayes Theorem",
    description: "Update probabilities with new information",
    icon: "🧠",
    details:
      "Bayes Theorem describes how to update probabilities based on new evidence.",
  },
  {
    title: "Random Variables",
    description: "Mapping outcomes to numerical values",
    icon: "🎯",
    details:
      "A random variable is a function that maps outcomes of a sample space to numerical values.",
  },
  {
    title: "Distributions",
    description: "Probability Mass and Density Functions",
    icon: "📊",
    details:
      "Distributions describe how probability is spread across possible values of a random variable.",
  },
];

export default async function ProbabilityTopicPage(props: any) {
  const params = props.params as { id: string };
  const id = params.id;

  // support numeric id fallback to existing topic list
  const numeric = Number(id);
  if (!Number.isNaN(numeric)) {
    const idx = numeric - 1;
    const topic = PROBABILITY_TOPICS[idx];
    if (!topic) {
      return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100 mb-4">
              Topic Not Found
            </h1>
            <Link href="/probability" className="btn-primary">
              Back to Probability
            </Link>
          </div>
        </main>
      );
    }

    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8 text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/probability" className="hover:text-blue-400 transition">
            Probability
          </Link>
          <span>/</span>
          <span className="text-slate-300">{topic.title}</span>
        </div>

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

        <section className="card mb-12">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Overview</h2>
          <p className="text-slate-300 mb-6">{topic.details}</p>
        </section>

        <div className="flex justify-between items-center">
          <Link href="/probability" className="btn-secondary">
            ← Back to Probability
          </Link>
          <div className="flex gap-4">
            {numeric > 1 && (
              <Link
                href={`/probability/${numeric - 1}`}
                className="btn-secondary"
              >
                Previous
              </Link>
            )}
            {numeric < PROBABILITY_TOPICS.length && (
              <Link
                href={`/probability/${numeric + 1}`}
                className="btn-primary"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      </main>
    );
  }

  // treat id as slug and try to load content from content/probability
  const doc = getTopicContent("probability", id);
  if (!doc) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-100 mb-4">
            Topic Not Found
          </h1>
          <Link href="/probability" className="btn-primary">
            Back to Probability
          </Link>
        </div>
      </main>
    );
  }

  const { frontMatter, content } = doc;
  const mdxSource = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
  } as any);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-2 mb-8 text-slate-400">
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/probability" className="hover:text-blue-400 transition">
          Probability
        </Link>
        <span>/</span>
        <span className="text-slate-300">{frontMatter.title || id}</span>
      </div>

      <section className="mb-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          {frontMatter.title}
        </h1>
        {frontMatter.description && (
          <p className="text-slate-400 mb-6">{frontMatter.description}</p>
        )}
      </section>

      <section className="card mb-12">
        <article className="prose prose-invert max-w-none">
          <MDXRemote
            source={mdxSource}
            components={{
              FormulaBox,
              CoinTossSimulator,
              DiceSimulator,
              BayesTheoremVisualizer,
              DistributionParameterExplorer,
              RandomWalkSimulation,
              MonteCarloIntegration,
              HypothesisTestingExplorer,
              CurveFittingVisualizer,
              InteractiveHistogram,
            }}
          />
        </article>
      </section>

      <div className="flex justify-start">
        <Link href="/probability" className="btn-secondary">
          ← Back
        </Link>
      </div>
    </main>
  );
}
