"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Σ ProbStat</h3>
            <p className="text-slate-400 text-sm">
              Master Probability & Statistics with visual intuition and
              interactive simulations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Learn</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="/probability" className="hover:text-white transition">
                  Probability
                </a>
              </li>
              <li>
                <a href="/statistics" className="hover:text-white transition">
                  Statistics
                </a>
              </li>
              <li>
                <a
                  href="/visualizations"
                  className="hover:text-white transition"
                >
                  Simulations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="/docs" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/guides" className="hover:text-white transition">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="https://github.com"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Maths Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
