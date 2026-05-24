# Maths Website - Probability & Statistics Platform

A modern educational website for learning Probability and Statistics with visual intuition, interactive simulations, and engineering-friendly explanations.

## 🚀 Features

- **Interactive Visualizations**: Charts, graphs, and simulations using Recharts and D3.js
- **Visual Learning**: Focus on conceptual understanding over formula dumping
- **Student-Friendly**: Designed specifically for engineering and science students
- **Modern Stack**: Built with Next.js, TypeScript, and Tailwind CSS

## 📚 Content Structure

```
/content
  /probability     - Core probability concepts
  /statistics      - Statistical methods and analysis
  /distributions   - Probability distributions
  /simulation      - Monte Carlo and other simulations
  /convergence     - Convergence theorems
  /bayesian        - Bayesian inference
```

## 🏗️ Tech Stack

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Recharts (visualizations)

**Deployment:**
- Vercel

**Version Control:**
- Git + GitHub

## 📦 Installation

```bash
npm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔨 Building

```bash
npm run build
npm start
```

## 📝 Article Structure

Every article follows this structure:

1. **Intuitive Introduction** - Hook with a real problem
2. **Real-world Example** - Practical application
3. **Formal Definition** - Mathematical definition
4. **Visual Explanation** - Interactive diagram or chart
5. **Formula Intuition** - Why formulas work
6. **Worked Example** - Step-by-step solution
7. **Simulation/Graph** - Interactive visualization
8. **Common Mistakes** - Pitfalls to avoid
9. **Related Topics** - Connected concepts
10. **References** - Further reading

## 🎯 First 20 Articles Plan

### Beginner Level (1-10)
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

### Intermediate Level (11-20)
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

## 🎨 Components

### Core Components
- **Navbar** - Navigation and branding
- **Sidebar** - Topic navigation
- **TopicCard** - Article preview cards
- **FormulaBox** - Mathematical formulas with explanations
- **GraphContainer** - Visualization containers

### Visualization Components
- **CoinTossSimulator** - Coin flip simulator
- **DiceSimulator** - Dice probability demo
- **BayesVisualizer** - Bayes theorem interactive
- **DistributionSlider** - Distribution parameter explorer
- **CLTAnimation** - Central Limit Theorem animation

## 📊 Visualizations to Build

### Easy
- Coin Toss Simulator
- Dice Probability Simulator
- Mean & Variance Visualizer

### Medium
- Bayes Theorem Visualizer
- Gaussian Distribution Slider
- PMF vs PDF Comparison

### Advanced
- CLT Animation
- Random Walk Simulation
- Monte Carlo Integration

## 🗂️ Project Structure

```
/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # Reusable React components
│   ├── visualizations/   # Interactive simulations
│   ├── lib/              # Utilities and helpers
│   └── styles/           # Global CSS
├── public/               # Static assets
│   ├── images/
│   └── graphs/
├── content/              # Article content
│   ├── probability/
│   ├── statistics/
│   ├── distributions/
│   ├── simulation/
│   ├── convergence/
│   └── bayesian/
├── resources/            # Internal research materials
│   ├── lectures/
│   ├── pdfs/
│   └── markdown-notes/
└── package.json
```

## 🎓 Learning Philosophy

This platform focuses on:

✅ **Conceptual Understanding** - Why, not just what
✅ **Visual Intuition** - See the math, don't just read it
✅ **Gradual Progression** - From intuition to formality
✅ **Interactive Learning** - Engage with simulations
✅ **Real Examples** - Engineering-relevant applications

❌ **Not:** Formula dumping, copied notes, low-quality AI content

## 🚀 Getting Started

1. Clone or fork the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Start writing articles in `/content`
5. Build components as needed

## 📖 Contributing

To add content:

1. Create a new `.mdx` file in the appropriate `/content` subdirectory
2. Follow the article structure above
3. Include visualizations where helpful
4. Test locally before committing

## 📞 Contact

For questions or suggestions about the platform, please open an issue.

---

**Goal:** Create one of the best student-friendly Probability & Statistics learning platforms. 🎯
