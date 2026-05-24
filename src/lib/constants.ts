
/**
 * Application constants and configuration
 */

export const SITE_NAME = 'Maths Website'
export const SITE_DESCRIPTION =
  'Master Probability & Statistics with visual intuition, interactive simulations, and clear explanations.'

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Probability', href: '/probability' },
  { label: 'Statistics', href: '/statistics' },
  { label: 'Simulations', href: '/visualizations' },
]

export const DIFFICULTY_COLORS = {
  beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
}

export const BEGINNER_TOPICS = [
  {
    title: 'What is Probability',
    description: 'Understand the basics of probability and fundamental concepts',
    icon: '🎲',
  },
  {
    title: 'Sample Space',
    description: 'Learn how to identify and work with sample spaces',
    icon: '📋',
  },
  {
    title: 'Events in Probability',
    description: 'Master events and their relationships',
    icon: '🎯',
  },
  {
    title: 'Conditional Probability',
    description: 'Understand probability given conditions',
    icon: '🔗',
  },
]

export const INTERMEDIATE_TOPICS = [
  {
    title: 'Bayes Theorem',
    description: 'Master the powerful tool for updating beliefs',
    icon: '🧠',
  },
  {
    title: 'Distributions',
    description: 'Explore probability distributions visually',
    icon: '📊',
  },
  {
    title: 'Central Limit Theorem',
    description: 'Understand why the normal distribution is everywhere',
    icon: '🌍',
  },
  {
    title: 'Hypothesis Testing',
    description: 'Make data-driven decisions with statistics',
    icon: '✅',
  },
]

export const FEATURES = [
  {
    title: 'Visual Learning',
    description: 'Interactive charts, graphs, and simulations',
    icon: '🎨',
  },
  {
    title: 'Intuition First',
    description: 'Understand concepts before formulas',
    icon: '⚡',
  },
  {
    title: 'Modern Tech',
    description: 'Built with Next.js, Tailwind, and Recharts',
    icon: '🚀',
  },
]
