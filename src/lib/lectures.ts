import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const LECTURES_ROOT = path.join(process.cwd(), 'resources', 'lectures')

export function listLectures() {
  if (!fs.existsSync(LECTURES_ROOT)) return []
  return fs
    .readdirSync(LECTURES_ROOT)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/i, ''))
}

export function getLectureContent(slug: string) {
  const md = path.join(LECTURES_ROOT, `${slug}.md`)
  const mdx = path.join(LECTURES_ROOT, `${slug}.mdx`)
  const file = fs.existsSync(md) ? md : fs.existsSync(mdx) ? mdx : null
  if (!file) return null
  const raw = fs.readFileSync(file, 'utf-8')
  const parsed = matter(raw)
  return { frontMatter: parsed.data as Record<string, any>, content: parsed.content }
}
