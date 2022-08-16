import { useEffect, useState } from 'react'
import { isBrowser } from '../util'

export const useLocalStorage = <T,>(
  storageKey: string,
  fallbackState: T
): [T, (t: T) => void] => {
  const storedValue = isBrowser ? localStorage.getItem(storageKey) : null
  const [value, setValue] = useState<T>(
    storedValue ? JSON.parse(storedValue) : fallbackState
  )

  useEffect(() => {
    isBrowser && localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}
