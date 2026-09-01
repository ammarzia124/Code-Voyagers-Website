import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe,
  Paintbrush,
  Palette,
  Brain,
  Video,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useTheme } from '@/context/ThemeContext'

const services = [
  {
    title: 'Website & App Development',
    description: 'Custom websites and mobile applications built for performance and scale',
    icon: Globe,
    slug: 'web-development',
  },
  {
    title: 'Graphics Designing',
    description: 'Visual identities and marketing materials that command attention',
    icon: Paintbrush,
    slug: 'graphics-designing',
  },
  {
    title: 'UI/UX Designing',
    description: 'Research-driven interfaces that convert visitors into loyal customers',
    icon: Palette,
    slug: 'ui-ux-design',
  },
  {
    title: 'Agentic AI & AI Automation',
    description: 'Intelligent AI agents and workflows that eliminate manual overhead',
    icon: Brain,
    slug: 'ai-automation',
  },
  {
    title: 'Video Editing',
    description: 'Professional video production and editing for marketing and branding',
    icon: Video,
    slug: 'video-editing',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that amplify your reach and drive measurable growth',
    icon: TrendingUp,
    slug: 'digital-marketing',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesOverviewSection() {
  const { ref, isInView } = useInView()
  const { reducedMotion } = useTheme()

  return (
    <section className="section-padding bg-base">
      <div className="container-width mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-display font-bold text-text-primary mb-4 text-balance"
          >
            Everything Your Business Needs to Stay Ahead
          </motion.h2>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? undefined : { delay: 0.1 }}
            className="text-body-lg text-text-body max-w-[60ch] mx-auto"
          >
            From web development to AI automation, we deliver the digital
            solutions that keep your business running at its best.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full p-6 rounded-lg border border-border bg-surface shadow-card hover:shadow-elevated transition-shadow duration-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-200">
                    <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-200" />
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-2 font-display">
                    {service.title}
                  </h3>

                  <p className="text-body-sm text-text-body mb-4">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Learn More{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
