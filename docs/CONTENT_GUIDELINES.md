# Probability & Statistics Content Guidelines

## Writing an Article

Each article should follow this structure:

### 1. Intuitive Introduction (2-3 paragraphs)
Start with a hook that makes the concept relatable. Ask "why should I care?"

Example: "Have you ever wondered why the weather forecast says 30% chance of rain? Let's explore probability..."

### 2. Real-world Example (1-2 paragraphs)
Provide a concrete example before any math.

Example: "Imagine you're rolling a fair die..."

### 3. Formal Definition (2-3 paragraphs)
Now introduce the mathematical definition with proper notation.

### 4. Visual Explanation
Include at least one diagram, chart, or visualization. Use:
- Recharts for interactive charts
- SVG for diagrams
- Interactive simulations

### 5. Formula Intuition (2-3 paragraphs)
Explain WHY the formula works, not just WHAT it is.

### 6. Worked Example (1-2 problems with solutions)
Step-by-step solutions to concrete problems.

### 7. Simulation/Graph
Include an interactive visualization where possible.

### 8. Common Mistakes (3-5 bullet points)
- Mistake 1 and why it's wrong
- Mistake 2 and why it's wrong
- etc.

### 9. Related Topics
Link to related concepts.

### 10. References
- Books
- External resources
- Academic papers

## File Structure

Articles go in `/content/` subdirectories:

```
/content/
  /probability/
    - conditional-probability.mdx
    - bayes-theorem.mdx
  /statistics/
    - hypothesis-testing.mdx
  /distributions/
    - gaussian-distribution.mdx
```

## MDX Features

Use all MDX features:

```mdx
# Title

Some content with **bold** and *italic*.

<FormulaBox 
  title="Bayes Theorem"
  formula="P(A|B) = P(B|A) * P(A) / P(B)"
  explanation="..."
  variables={{
    'P(A|B)': 'Probability of A given B',
    'P(B|A)': 'Probability of B given A'
  }}
/>

<CoinTossSimulator />
```

## Difficulty Levels

- **Beginner**: No prerequisites, from first principles
- **Intermediate**: Assumes basic probability/statistics
- **Advanced**: Rigorous mathematics, proofs, advanced theory

## Code Style

- Use TypeScript for all components
- Follow existing component patterns
- Keep components focused and reusable
- Include prop documentation

## Testing Content

Before publishing:

1. Check math formulas for accuracy
2. Test all interactive components
3. Verify links work
4. Review for clarity and flow
5. Have someone unfamiliar with the topic review it
