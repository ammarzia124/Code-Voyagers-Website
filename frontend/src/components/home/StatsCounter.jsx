import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useScrollAnimation'
import { STATS } from '@/lib/utils'

function StatItem({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold font-mono text-accent-500 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-neutral-300 uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function StatsCounter() {
  return (
    <section className="section-padding relative">
      <div className="container-width mx-auto">
        <div className="relative p-8 sm:p-12 rounded-2xl border border-brand-700 bg-brand-800/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 via-transparent to-accent-500/5" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
