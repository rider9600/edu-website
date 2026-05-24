# Maths Website

A modern, interactive educational platform for learning **Probability & Statistics** with visual intuition, engaging simulations, and clear explanations.

## 🎯 Mission

Create one of the best student-friendly Probability & Statistics learning platforms by focusing on:

✅ **Conceptual Understanding** — Why things work, not just formulas  
✅ **Visual Learning** — See the math through interactive charts and graphs  
✅ **Intuition First** — Build understanding before introducing rigor  
✅ **Interactive Simulations** — Engage with the concepts  
✅ **Engineering-Friendly** — Real-world applications and examples

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📚 Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js app router pages
│   ├── components/             # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── TopicCard.tsx
│   │   ├── FormulaBox.tsx
│   │   ├── GraphContainer.tsx
│   │   └── Sidebar.tsx
│   ├── visualizations/         # Interactive simulations
│   │   ├── CoinTossSimulator.tsx
│   │   └── DiceSimulator.tsx
│   ├── lib/                    # Utility functions
│   │   ├── probability.ts      # Probability calculations
│   │   └── statistics.ts       # Statistics calculations
│   └── styles/
│       └── globals.css         # Global styles
│
├── public/                     # Static assets
│   ├── images/
│   └── graphs/
│
├── content/                    # Article content (MDX)
│   ├── probability/
│   ├── statistics/
│   ├── distributions/
│   ├── simulation/
│   ├── convergence/
│   └── bayesian/
│
├── resources/                  # Internal research materials
│   ├── lectures/
│   ├── pdfs/
│   └── markdown-notes/
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── GETTING_STARTED.md
├── CONTENT_GUIDELINES.md
└── ARTICLE_TEMPLATE.md
```

## 🛠️ Tech Stack

**Frontend:**
- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [React 18](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Recharts](https://recharts.org/) — Data visualization
- [Framer Motion](https://www.framer.com/motion/) — Animations (optional)

**Development:**
- [ESLint](https://eslint.org/) — Code linting
- [Next.js CLI](https://nextjs.org/docs/advanced-features/cli)

**Deployment:**
- [Vercel](https://vercel.com/) — Hosting and deployment

## 📖 Writing Content

### Getting Started with Articles

1. Read [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) for detailed guidelines
2. Use [ARTICLE_TEMPLATE.md](./ARTICLE_TEMPLATE.md) as a starting point
3. Place articles in the appropriate `/content/` subdirectory
4. Use MDX to embed React components and interactive visualizations

### Article Structure

Every article follows this proven structure:

1. **Intuitive Introduction** — Hook the reader
2. **Real-world Example** — Make it relatable
3. **Formal Definition** — Mathematical rigor
4. **Visual Explanation** — Diagrams and charts
5. **Formula Intuition** — Why formulas work
6. **Worked Example** — Step-by-step solutions
7. **Simulation/Graph** — Interactive exploration
8. **Common Mistakes** — What students get wrong
9. **Related Topics** — Connections to other concepts
10. **References** — Further reading

### Creating a New Component

Components should be reusable and well-documented:

```tsx
// src/components/MyComponent.tsx
'use client'

interface MyComponentProps {
  title: string
  // ... other props
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className="card">
      {/* component code */}
    </div>
  )
}
```

### Adding a New Visualization

Create interactive simulations in `/src/visualizations/`:

```tsx
// src/visualizations/MySimulation.tsx
'use client'

import { useState } from 'react'

export default function MySimulation() {
  const [data, setData] = useState([])
  
  return (
    <div className="card">
      {/* simulation UI */}
    </div>
  )
}
```

## 📊 Core Topics (Planned)

### Beginner (Topics 1-10)
1. What is Probability
2. Sample Space
3. Events in Probability
4. Conditional Probability
5. Bayes Theorem
6. Random Variables
7. PMF vs PDF
8. CDF Explained
9. Expected Value
10. Variance

### Intermediate (Topics 11-20)
11. Standard Deviation
12. Bernoulli Distribution
13. Binomial Distribution
14. Gaussian Distribution
15. Poisson Distribution
16. Central Limit Theorem
17. Covariance
18. Correlation
19. Convergence in Probability
20. Maximum Likelihood Estimation

## 🎨 Visualizations (Planned)

### Easy
- ✅ Coin Toss Simulator
- ✅ Dice Probability Simulator
- [ ] Mean & Variance Visualizer

### Medium
- [ ] Bayes Theorem Visualizer
- [ ] Gaussian Distribution Slider
- [ ] PMF vs PDF Comparison

### Advanced
- [ ] CLT Animation
- [ ] Random Walk Simulation
- [ ] Monte Carlo Integration

## 🎨 Design System

The site uses a consistent design system built with Tailwind CSS:

**Colors:**
- Primary: `#0f172a` (dark blue)
- Secondary: `#1e293b` (slate)
- Accent: `#3b82f6` (blue)
- Success: `#10b981` (green)
- Warning: `#f59e0b` (amber)
- Error: `#ef4444` (red)

**Typography:**
- Sans: Inter, system fonts
- Mono: Fira Code

**Components:**
- `btn-primary` — Primary action button
- `btn-secondary` — Secondary button
- `card` — Content card container
- `section-title` — Section heading
- `subsection-title` — Subsection heading

## 🧮 Utility Functions

### Probability Functions
`src/lib/probability.ts`:
- `factorial()`, `combination()`, `permutation()`
- `gaussianPDF()`, `gaussianCDF()`
- `poissonPMF()`, `binomialPMF()`
- `expectedValue()`, `variance()`, `standardDeviation()`

### Statistics Functions
`src/lib/statistics.ts`:
- `mean()`, `median()`, `mode()`
- `variance()`, `standardDeviation()`
- `covariance()`, `correlation()`
- `zscore()`, `percentile()`, `quartiles()`

## 📝 Writing Style

- **Clear & Simple** — Avoid jargon, explain when necessary
- **Visual First** — Use diagrams and charts before text
- **Example-Driven** — Every concept needs an example
- **Interactive** — Include simulations when possible
- **Correct** — Verify all math and formulas

## 🤝 Contributing

1. Create a new branch for your feature
2. Write articles following [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md)
3. Use [ARTICLE_TEMPLATE.md](./ARTICLE_TEMPLATE.md) as a base
4. Test components locally
5. Submit a pull request

## ✅ Development Checklist

- [ ] Development server runs without errors
- [ ] Components render correctly
- [ ] Visualizations are interactive
- [ ] Articles load properly
- [ ] Links work across pages
- [ ] Mobile responsive design works
- [ ] Accessibility standards met

## 📚 Resources

- [GETTING_STARTED.md](./GETTING_STARTED.md) — Setup and overview
- [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) — Writing guidelines
- [ARTICLE_TEMPLATE.md](./ARTICLE_TEMPLATE.md) — Article template
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)

## 📞 Contact

For questions, suggestions, or collaboration opportunities, please open an issue.

---

**Status:** 🚧 Under active development

**Version:** 1.0.0

**Last Updated:** May 2026

---

*Built with ❤️ for students and engineers learning Probability & Statistics*
