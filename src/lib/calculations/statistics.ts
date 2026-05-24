/**
 * Statistics utilities and helper functions
 */

export const mean = (data: number[]): number => {
  return data.reduce((a, b) => a + b, 0) / data.length
}

export const median = (data: number[]): number => {
  const sorted = [...data].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

export const mode = (data: number[]): number => {
  const frequency = new Map<number, number>()
  data.forEach(num => {
    frequency.set(num, (frequency.get(num) || 0) + 1)
  })
  return Array.from(frequency.entries()).reduce((a, b) => (b[1] > a[1] ? b : a))[0]
}

export const variance = (data: number[], sample: boolean = false): number => {
  const m = mean(data)
  const squaredDiffs = data.map(x => Math.pow(x - m, 2))
  const sumSquaredDiffs = squaredDiffs.reduce((a, b) => a + b, 0)
  const divisor = sample ? data.length - 1 : data.length
  return sumSquaredDiffs / divisor
}

export const standardDeviation = (data: number[], sample: boolean = false): number => {
  return Math.sqrt(variance(data, sample))
}

export const covariance = (x: number[], y: number[], sample: boolean = false): number => {
  const meanX = mean(x)
  const meanY = mean(y)
  const cov = x.reduce((sum, xi, i) => sum + (xi - meanX) * (y[i] - meanY), 0)
  const divisor = sample ? x.length - 1 : x.length
  return cov / divisor
}

export const correlation = (x: number[], y: number[]): number => {
  const cov = covariance(x, y)
  const sdX = standardDeviation(x)
  const sdY = standardDeviation(y)
  return cov / (sdX * sdY)
}

export const zscore = (value: number, mean: number, std: number): number => {
  return (value - mean) / std
}

export const percentile = (data: number[], p: number): number => {
  const sorted = [...data].sort((a, b) => a - b)
  const index = (p / 100) * (sorted.length - 1)
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  const weight = index % 1

  if (lower === upper) return sorted[lower]
  return sorted[lower] * (1 - weight) + sorted[upper] * weight
}

export const quartiles = (data: number[]): { q1: number; q2: number; q3: number } => {
  return {
    q1: percentile(data, 25),
    q2: percentile(data, 50),
    q3: percentile(data, 75),
  }
}

export const IQR = (data: number[]): number => {
  const { q1, q3 } = quartiles(data)
  return q3 - q1
}
