/**
 * Shared type definitions for the application
 */

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Topic {
  title: string
  description: string
  difficulty: Difficulty
  href: string
  icon?: string
}

export interface Article {
  title: string
  description: string
  content: string
  difficulty: Difficulty
  tags: string[]
  publishedAt: Date
  updatedAt?: Date
}

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}
