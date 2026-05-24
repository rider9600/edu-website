/**
 * Application constants and configuration
 */

export const SITE_NAME = "Maths Website";
export const SITE_DESCRIPTION =
  "Master Probability & Statistics with visual intuition, interactive simulations, and clear explanations.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Probability", href: "/probability" },
  { label: "Statistics", href: "/statistics" },
  { label: "Simulations", href: "/visualizations" },
];

export const DIFFICULTY_COLORS = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

export const BEGINNER_TOPICS = [
  {
    title: "What is Probability",
    description: "Understand the basics of probability and fundamental concepts",
    icon: "Probability",
  },
  {
    title: "Sample Space",
    description: "Learn how to identify and work with sample spaces",
    icon: "Sample",
  },
  {
    title: "Events in Probability",
    description: "Master events and their relationships",
    icon: "Events",
  },
  {
    title: "Conditional Probability",
    description: "Understand probability given conditions",
    icon: "Given",
  },
];

export const INTERMEDIATE_TOPICS = [
  {
    title: "Bayes Theorem",
    description: "Master the powerful tool for updating beliefs",
    icon: "Bayes",
  },
  {
    title: "Distributions",
    description: "Explore probability distributions visually",
    icon: "Dist",
  },
  {
    title: "Central Limit Theorem",
    description: "Understand why the normal distribution is everywhere",
    icon: "CLT",
  },
  {
    title: "Hypothesis Testing",
    description: "Make data-driven decisions with statistics",
    icon: "Test",
  },
];

export const PROBABILITY_TOPICS = [
  {
    title: "What is Probability",
    description: "Introduction to probability concepts and basic definitions",
    icon: "Probability",
    details:
      "Probability is the measure of likelihood that an event will occur. It ranges from 0 to 1, where 0 means impossible and 1 means certain.",
  },
  {
    title: "Sample Space & Events",
    description: "Understanding outcomes and how to define events",
    icon: "Sample",
    details:
      "A sample space is the set of all possible outcomes of an experiment. Events are subsets of the sample space.",
  },
  {
    title: "Conditional Probability",
    description: "Probability of events given certain conditions",
    icon: "Given",
    details:
      "Conditional probability is the probability of an event occurring given that another event has already occurred.",
  },
  {
    title: "Bayes Theorem",
    description: "Update probabilities with new information",
    icon: "Bayes",
    details:
      "Bayes Theorem describes how to update probabilities based on new evidence.",
  },
  {
    title: "Random Variables",
    description: "Mapping outcomes to numerical values",
    icon: "Random",
    details:
      "A random variable is a function that maps outcomes of a sample space to numerical values.",
  },
  {
    title: "Distributions",
    description: "Probability Mass and Density Functions",
    icon: "Dist",
    details:
      "Distributions describe how probability is spread across possible values of a random variable.",
  },
];

export const STATISTICS_TOPICS = [
  {
    title: "Descriptive Statistics",
    description: "Summarize and describe data using mean, median, std dev",
    icon: "Desc",
    details:
      "Descriptive statistics summarize and describe data using measures like mean, median, standard deviation, and range.",
  },
  {
    title: "Inferential Statistics",
    description: "Make conclusions about populations from samples",
    icon: "Infer",
    details:
      "Inferential statistics use sample data to make conclusions about larger populations.",
  },
  {
    title: "Hypothesis Testing",
    description: "Test claims about data with statistical rigor",
    icon: "Test",
    details:
      "Hypothesis testing is a method to test claims about population parameters using sample data.",
  },
  {
    title: "Confidence Intervals",
    description: "Estimate ranges for population parameters",
    icon: "CI",
    details:
      "Confidence intervals provide a range of values that likely contains the true population parameter.",
  },
  {
    title: "Correlation & Regression",
    description: "Analyze relationships between variables",
    icon: "Corr",
    details:
      "Correlation and regression analyze the relationship between two or more variables.",
  },
  {
    title: "ANOVA & Tests",
    description: "Compare means across multiple groups",
    icon: "ANOVA",
    details:
      "ANOVA and other statistical tests allow us to compare means across multiple groups.",
  },
];

export const FEATURES = [
  {
    title: "Visual Learning",
    description: "Interactive charts, graphs, and simulations",
    icon: "Charts",
  },
  {
    title: "Intuition First",
    description: "Understand concepts before formulas",
    icon: "Insight",
  },
  {
    title: "Modern Tech",
    description: "Built with Next.js, Tailwind, and Recharts",
    icon: "Stack",
  },
];
