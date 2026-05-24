/**
 * Probability utilities and helper functions
 */

export const factorial = (n: number): number => {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

export const combination = (n: number, k: number): number => {
  return factorial(n) / (factorial(k) * factorial(n - k))
}

export const permutation = (n: number, k: number): number => {
  return factorial(n) / factorial(n - k)
}

export const gaussianPDF = (x: number, mean: number = 0, std: number = 1): number => {
  const variance = std * std
  const numerator = Math.exp(-Math.pow(x - mean, 2) / (2 * variance))
  const denominator = std * Math.sqrt(2 * Math.PI)
  return numerator / denominator
}

export const gaussianCDF = (x: number, mean: number = 0, std: number = 1): number => {
  const z = (x - mean) / std
  const t = 1 / (1 + 0.2316419 * Math.abs(z))
  const d = 0.3989423 * Math.exp((-z * z) / 2)
  const prob = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))))
  return z >= 0 ? 1 - prob : prob
}

export const poissonPMF = (k: number, lambda: number): number => {
  return (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k)
}

export const binomialPMF = (k: number, n: number, p: number): number => {
  return combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
}

export const expectedValue = (values: number[], probabilities: number[]): number => {
  return values.reduce((sum, v, i) => sum + v * probabilities[i], 0)
}

export const variance = (values: number[], probabilities: number[]): number => {
  const ev = expectedValue(values, probabilities)
  const ev2 = expectedValue(
    values.map(v => v * v),
    probabilities
  )
  return ev2 - ev * ev
}

export const standardDeviation = (values: number[], probabilities: number[]): number => {
  return Math.sqrt(variance(values, probabilities))
}
