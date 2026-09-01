import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { STATS } from '@/config/constants'
import { useRef, useState, useEffect } from 'react'

function StatItem({ stat, index }) {
  const { ref, isInView } = useInView({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = stat.value
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-display-lg font-display font-bold text-brand mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-text-muted uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function StatsCounter() {
  return (
    <section className="section-padding bg-base">
      <div className="container-width mx-auto">
        <div className="p-8 sm:p-12 rounded-xl border border-border bg-surface shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
