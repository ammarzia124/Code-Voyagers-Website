import { useState, useEffect, useMemo } from 'react'

export function useCountUp(end, duration = 2000, startCounting = true) {
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const [count, setCount] = useState(() => (prefersReduced ? end : 0))

  useEffect(() => {
    if (!startCounting || prefersReduced) return

    let startTimestamp = null
    let animationFrame = null

    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOut(progress)

      setCount(Math.round(easedProgress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, startCounting, prefersReduced])

  return count
}
