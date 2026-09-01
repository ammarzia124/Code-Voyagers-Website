import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Wrench,
  Network,
  ShieldCheck,
  Cloud,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const services = [
  {
    title: 'IT Counseling',
    description: 'Strategic technology roadmapping for your business',
    icon: Briefcase,
    slug: 'it-counseling',
  },
  {
    title: 'IT Servicing & Repair',
    description: 'Fast, reliable hardware and software support',
    icon: Wrench,
    slug: 'it-servicing-repair',
  },
  {
    title: 'Network Design & Setup',
    description: 'Secure, scalable infrastructure from the ground up',
    icon: Network,
    slug: 'network-design-setup',
  },
  {
    title: 'Cybersecurity Audit',
    description: 'Identify vulnerabilities before attackers do',
    icon: ShieldCheck,
    slug: 'cybersecurity-audit',
  },
  {
    title: 'Cloud Migration',
    description: 'Move to the cloud without disrupting operations',
    icon: Cloud,
    slug: 'cloud-migration',
  },
  {
    title: 'Training & Workshops',
    description: 'Upskill your team with hands-on IT training',
    icon: GraduationCap,
    slug: 'training-workshops',
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

  return (
    <section className="section-padding bg-base">
      <div className="container-width mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-display font-bold text-text-primary mb-4 text-balance"
          >
            Everything Your Business Needs to Stay Ahead
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-text-body max-w-[60ch] mx-auto"
          >
            From strategic consulting to hands-on support, we deliver the IT
            services that keep your business running at its best.
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
