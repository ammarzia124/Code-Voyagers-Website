import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe,
  Smartphone,
  Palette,
  Paintbrush,
  TrendingUp,
  Brain,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/config/constants'
import PageHero from '@/components/layout/PageHero'
import { useSEO } from '@/utils/seo'
import { useTheme } from '@/context/ThemeContext'

const iconMap = { Globe, Smartphone, Palette, Paintbrush, TrendingUp, Brain }

export default function Services() {
  useSEO({
    title: 'Our Services',
    description: 'Explore our full range of services — web development, UI/UX design, graphics, AI automation, video editing, and digital marketing.',
    path: '/services',
  })

  const { reducedMotion } = useTheme()

  return (
    <main className="pt-24">
      <PageHero
        title="Our Services"
        description="Straightforward IT help for businesses of every size."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="py-16">
        <div className="container-width mx-auto">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            const isReversed = i % 2 !== 0

            return (
              <motion.div
                key={service.id}
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reducedMotion ? undefined : { duration: 0.6, ease: 'easeOut' }}
                className={`py-16 ${
                  i < SERVICES.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isReversed ? 'direction-rtl' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brand" />
                    </div>

                    <h2 className="text-display-md font-display font-bold text-text-primary mt-6 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-body-md text-text-body mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-body-sm text-text-body"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button size="lg" className="group" asChild>
                      <Link to={`/contact?service=${service.id}`}>
                        Get a Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }
                  >
                    <div
                      className="aspect-[4/3] rounded-xl bg-surface border border-border flex items-center justify-center"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, #E4E7ED 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    >
                      <Icon className="w-32 h-32 text-brand-light opacity-60" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
