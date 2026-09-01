import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useTheme } from '@/context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

export default function PageWrapper({ children }) {
  const { pathname } = useLocation()
  const progress = useScrollProgress()
  const { reducedMotion } = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [reducedMotion])

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand z-50 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
      {children}
    </div>
  )
}
