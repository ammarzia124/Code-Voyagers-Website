import { motion } from 'framer-motion'
import { Layers, Eye, Zap } from 'lucide-react'

const values = [
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description: 'Strategy, design, development, and growth — all under one roof. No juggling multiple vendors or losing context between handoffs.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Real-time project dashboards, weekly check-ins, and zero black boxes. You always know exactly where your project stands.',
  },
  {
    icon: Zap,
    title: 'Results That Scale',
    description: 'We build for where your business is headed, not where it is today. Every solution is engineered for growth.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative">
      <div className="container-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-500 font-medium text-sm uppercase tracking-wider mb-3"
            >
              Why Code Voyagers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-neutral-50 mb-6"
            >
              Built different, for a reason
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-300 leading-relaxed"
            >
              Most agencies deliver a website and disappear. We build long-term partnerships — becoming an extension of your team, invested in your success from day one.
            </motion.p>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-brand-700 bg-brand-800/20 hover:border-accent-500/30 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-accent-500/10 border border-accent-500/20 shrink-0">
                  <value.icon className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-50 mb-1">{value.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
