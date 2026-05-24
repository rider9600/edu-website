# Content Guidelines

These rules apply to MDX content currently rendered by the topic routes.

## Active Content Locations

- `content/probability`
- `content/statistics`

These are the published content directories. `resources/lectures` remains internal source material and is not rendered directly on the public site.

## Article Shape

Most topic articles should follow this structure:

1. Introduction
2. Real-world or intuitive example
3. Formal definition
4. Formula explanation
5. Worked example
6. Visual or simulation section
7. Common mistakes
8. Related topics
9. References

Not every article needs every section, but this is the default shape.

## Frontmatter

Use frontmatter when possible:

```md
---
title: Conditional Probability
description: Understand probability under conditions with examples and intuition.
---
```

`title` and `description` are the main fields currently consumed by the app.

## MDX Usage

You can embed supported React components inside topic content.

Example:

```mdx
# Bayes Theorem

<FormulaBox
  title="Bayes Theorem"
  formula="P(A|B) = P(B|A) * P(A) / P(B)"
  explanation="Updates a prior belief after seeing evidence."
/>

<BayesTheoremVisualizer />
```

## Important Constraint

Adding a component to MDX is not enough by itself. The component must also be registered in the MDX component mapping used by the relevant route page.

Today that mapping lives in route files such as:

- `src/app/(pages)/probability/[id]/page.tsx`
- `src/app/(pages)/statistics/[id]/page.tsx`

## Slug Rules

- filename becomes the slug
- keep slugs lowercase and hyphenated for topic content

## Writing Rules

- explain concepts before notation
- prefer one strong worked example over many shallow ones
- keep formulas tied to intuition
- avoid textbook-style dumping
- verify every internal link

## Article Template

Use this starter for new topic content in `content/probability` or `content/statistics`.

```mdx
---
title: Article Title
description: One-sentence summary for cards and page headers.
---

# Article Title

## Introduction

Open with the intuition and the problem this concept solves.

## Real-World Example

Use one concrete example before formal notation.

## Formal Definition

State the definition clearly.

## Formula Intuition

Explain why the formula works.

<FormulaBox
  title="Key Formula"
  formula="P(A|B) = P(B|A) * P(A) / P(B)"
  explanation="Replace this with a concept-specific explanation."
/>

## Worked Example

Problem: Replace with a small problem.

Solution: Show the reasoning, not just the answer.

## Visualization

Optional. Only use components that are registered in the route's MDX component map.

<CoinTossSimulator />

## Common Mistakes

- Mistake one and why it is wrong.
- Mistake two and how to avoid it.

## Related Topics

- [Conditional Probability](/probability/conditional-probability)
- [Bayes Theorem](/probability/bayes-theorem)

## References

- Book or paper reference
- Additional reading link
```

## Review Checklist

1. Frontmatter is present and accurate.
2. The slug matches the intended route.
3. Any embedded component is wired into the route-level MDX map.
4. KaTeX math renders correctly.
5. Links and navigation targets work.
