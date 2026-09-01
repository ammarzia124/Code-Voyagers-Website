import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain, ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { SERVICES } from '@/config/constants'

const iconMap = { Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain }

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesOverview() {
  const { ref, isInView } = useInView()

  return (
    <section className="section-padding bg-base">
      <div className="container-width mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium text-sm uppercase tracking-wider mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display-md font-display font-bold text-text-primary mb-4"
          >
            End-to-end digital solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-text-body max-w-2xl mx-auto"
          >
            We handle every stage of your digital journey — from strategy and design to development and growth.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div key={service.id} variants={item}>
                <Link
                  to={`/services/${service.id}`}
                  className="group block h-full p-6 rounded-lg border border-border bg-surface hover:shadow-elevated hover:border-brand/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-brand-light group-hover:bg-brand/10 transition-colors shrink-0">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-brand transition-colors font-display">
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-body">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
