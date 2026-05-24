import Link from "next/link";
import { getLectureContent } from "@/lib/lectures";
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
  CurveFittingVisualizer,
} from "@/visualizations";

export default async function LecturePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const doc = getLectureContent(id);
  if (!doc) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-100 mb-4">
            Lecture Not Found
          </h1>
          <Link href="/syllabus" className="btn-primary">
            Back to Syllabus
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
      <h1 className="text-4xl font-bold text-slate-100 mb-4">
        {frontMatter.title || id}
      </h1>
      <p className="text-slate-400 mb-8">{frontMatter.description}</p>

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
          }}
        />
      </article>

      <div className="mt-8">
        <Link href="/syllabus" className="btn-secondary">
          ← Back to Syllabus
        </Link>
      </div>
    </main>
  );
}
