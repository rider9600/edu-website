/**
 * Utility helper functions
 */

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const formatNumber = (num: number, decimals: number = 2): string => {
  return parseFloat(num.toFixed(decimals)).toString()
}

export const formatPercentage = (num: number, decimals: number = 1): string => {
  return `${formatNumber(num * 100, decimals)}%`
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

export const unslugify = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
