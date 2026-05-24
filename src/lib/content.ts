import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function listTopicSlugs(category: string) {
  const dir = path.join(CONTENT_ROOT, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$|^/i, ""))
    .map((f) => f.replace(/\.mdx?$|^/i, ""));
}

export function getTopicContent(category: string, slug: string) {
  const candidates = [
    path.join(CONTENT_ROOT, category, `${slug}.mdx`),
    path.join(CONTENT_ROOT, category, `${slug}.md`),
  ];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const parsed = matter(raw);
  return { frontMatter: parsed.data as Record<string, any>, content: parsed.content };
}
