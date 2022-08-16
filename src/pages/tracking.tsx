import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles'

const useLocalStorage = <T,>(
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

const Tracking = () => {
  const [ignore, setIgnore] = useLocalStorage('plausible_ignore', false)

  return (
    <Layout>
      <Container>
        <h1>Analytics Exclude</h1>
        <p>
          Click the button below to toggle your exclusion in analytics for this
          site
        </p>
        {ignore ? (
          <>
            <p>
              You currently <b>are excluding</b> your visits.
            </p>
            <button onClick={() => setIgnore(false)}>
              Stop excluding my visits
            </button>
          </>
        ) : (
          <>
            <p>
              You currently <b>are not excluding</b> your visits.
            </p>
            <button onClick={() => setIgnore(true)}>Exclude my visits</button>
          </>
        )}
      </Container>
    </Layout>
  )
}

const isBrowser = typeof window !== 'undefined'

export default Tracking
