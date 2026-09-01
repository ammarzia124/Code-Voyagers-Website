import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/config/constants'

const iconMap = { Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain }

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand font-medium text-sm uppercase tracking-wider mb-3"
            >
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-display font-bold text-text-primary mb-6"
            >
              Solutions designed for your growth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-text-body"
            >
              Every business is unique. We tailor our services to fit your specific needs, timeline, and budget.
            </motion.p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-lg border border-border bg-surface shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-light">
                          <Icon className="w-6 h-6 text-brand" />
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary font-display">{service.title}</h2>
                      </div>
                      <p className="text-text-body mb-6">{service.description}</p>
                      <Button variant="outline" className="group" asChild>
                        <Link to={`/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className="lg:w-80 shrink-0">
                      <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">What&apos;s Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-text-body">
                            <Check className="w-4 h-4 text-success shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
