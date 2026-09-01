import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/lib/utils'

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
              className="text-accent-500 font-medium text-sm uppercase tracking-wider mb-3"
            >
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-neutral-50 mb-6"
            >
              Solutions designed for your growth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-300"
            >
              Every business is unique. We tailor our services to fit your specific needs, timeline, and budget.
            </motion.p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl border border-brand-700 bg-brand-800/20 hover:border-accent-500/30 transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-accent-500/10 border border-accent-500/20">
                          <Icon className="w-6 h-6 text-accent-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-50">{service.title}</h2>
                      </div>
                      <p className="text-neutral-300 leading-relaxed mb-6">{service.description}</p>
                      <Button variant="outline" className="group" asChild>
                        <Link to={`/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className="lg:w-80 shrink-0">
                      <h4 className="text-sm font-semibold text-neutral-50 uppercase tracking-wider mb-3">What&apos;s Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                            <Check className="w-4 h-4 text-accent-500 shrink-0" />
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
