/**
 * Custom React Hooks
 */

'use client'

import { useState, useCallback, useEffect } from 'react'

/**
 * useSimulation - Hook for managing simulation state
 */
export function useSimulation<T>(initialData: T) {
  const [data, setData] = useState<T>(initialData)
  const [isRunning, setIsRunning] = useState(false)

  const reset = useCallback(() => {
    setData(initialData)
    setIsRunning(false)
  }, [initialData])

  return { data, setData, isRunning, setIsRunning, reset }
}

/**
 * useDebounce - Hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
