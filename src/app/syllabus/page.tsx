import Link from "next/link";
import { listLectures } from "@/lib/lectures";

export default function SyllabusPage() {
  const lectures = listLectures();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-100 mb-6">
        Course Syllabus
      </h1>
      <p className="text-slate-400 mb-8">
        Lecture list (L1 - L26). Click a lecture to view notes and resources.
      </p>

      <div className="space-y-3">
        {lectures.map((file, i) => (
          <Link
            key={file}
            href={`/lectures/${file}`}
            className="block p-4 rounded bg-slate-800 hover:bg-slate-750"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-slate-100">{file}</div>
              </div>
              <div className="text-slate-400">Lecture {i + 1}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
