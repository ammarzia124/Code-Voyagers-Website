import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/config/constants'
import { Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain } from 'lucide-react'

const iconMap = { Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain }

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We analyze your goals, users, and technical requirements to build a clear roadmap.' },
  { step: '02', title: 'Strategy & Design', description: 'Wireframes, prototypes, and a design system built for scale and consistency.' },
  { step: '03', title: 'Development', description: 'Agile sprints with regular demos. You see progress every week, not just at the end.' },
  { step: '04', title: 'Testing & Launch', description: 'Rigorous QA, performance optimization, and a smooth deployment to production.' },
  { step: '05', title: 'Support & Growth', description: 'Post-launch monitoring, bug fixes, and ongoing optimization to keep things running perfectly.' },
]

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.id === slug)

  if (!service) {
    return (
      <main className="pt-24 section-padding">
        <div className="container-width mx-auto text-center">
          <h1 className="text-display-md font-display font-bold text-text-primary mb-4">Service not found</h1>
          <Button asChild><Link to="/services">Back to Services</Link></Button>
        </div>
      </main>
    )
  }

  const Icon = iconMap[service.icon]

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to all services
            </Link>
          </motion.div>

          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 rounded-lg bg-brand-light">
                <Icon className="w-8 h-8 text-brand" />
              </div>
              <h1 className="text-display-lg font-display font-bold text-text-primary">{service.title}</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-text-body"
            >
              {service.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-display-md font-display font-bold text-text-primary mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-surface"
                >
                  <Check className="w-5 h-5 text-success shrink-0" />
                  <span className="text-text-body">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-display-md font-display font-bold text-text-primary mb-8 text-center">Our Process</h2>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-lg border border-border bg-surface shadow-card"
                >
                  <span className="text-3xl font-bold font-mono text-brand/20 shrink-0">{step.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1 font-display">{step.title}</h3>
                    <p className="text-sm text-text-body">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-display-md font-display font-bold text-text-primary mb-4">Ready to get started?</h2>
            <p className="text-text-body mb-8">Let&apos;s discuss how {service.title} can help your business grow.</p>
            <Button size="lg" className="group" asChild>
              <Link to={`/contact?service=${service.id}`}>
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
