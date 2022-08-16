import { Link } from 'gatsby'
import { useState } from 'react'
import { isBrowser } from '../util'
import { useLocalStorage } from './useLocalStorage'

const TrackingPreview = () => {
  const [ignore] = useLocalStorage('plausible_ignore', false)
  return (
    <>
      <Link to="/tracking/">Tracking</Link>{' '}
      <span css="display: inline-block; font-size: 0.5em; transform: translateY(-1px);">
        {ignore ? '🔴' : '🟢'}
      </span>
    </>
  )
}

export default TrackingPreview
