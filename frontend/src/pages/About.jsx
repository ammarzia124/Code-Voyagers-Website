import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Eye, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import PageHero from '@/components/layout/PageHero'

const stats = [
  { value: 500, suffix: '+', label: 'Issues Resolved' },
  { value: 50, suffix: '+', label: 'Business Clients' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 4, suffix: ' ', label: 'Years in Operation' },
]

const team = [
  {
    name: 'Ahmed Khan',
    role: 'Founder & CEO',
    initials: 'AK',
    bio: 'Former infrastructure lead at a Big Four consulting firm. 12 years in enterprise IT.',
  },
  {
    name: 'Fatima Malik',
    role: 'Head of Operations',
    initials: 'FM',
    bio: 'Managed IT service delivery for 200+ seat organizations. PMP certified.',
  },
  {
    name: 'Hassan Ali',
    role: 'Lead Network Engineer',
    initials: 'HA',
    bio: 'CCNP certified. Designed secure networks for healthcare and finance clients.',
  },
  {
    name: 'Zainab Raza',
    role: 'Cybersecurity Analyst',
    initials: 'ZR',
    bio: 'CEH and CompTIA Security+ certified. Former SOC analyst at a telecom provider.',
  },
]

const values = [
  {
    title: 'Client First',
    description:
      "We solve your actual problem, not the one that's easiest to bill. Every engagement starts with understanding your business goals, not selling pre-packaged solutions.",
    icon: Heart,
  },
  {
    title: 'Radical Transparency',
    description:
      'No surprise invoices. No technical smoke and mirrors. We explain what we\'re doing, why, and what it costs — before we do it.',
    icon: Eye,
  },
  {
    title: 'Built to Last',
    description:
      "We build solutions that outlive the project. Clean documentation, maintainable code, and systems your team can manage long after we're gone.",
    icon: Clock,
  },
]

const teamContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const teamItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function StatItem({ stat, isInView }) {
  const count = useCountUp(stat.value, 2000, isInView)

  return (
    <div className="flex flex-col items-center">
      <p className="text-display-lg font-display font-bold text-brand">
        {count}
        {stat.suffix}
      </p>
      <p className="text-body-md text-text-body">{stat.label}</p>
    </div>
  )
}

export default function About() {
  const { ref: statsRef, isInView: statsInView } = useInView({
    threshold: 0.3,
  })
  const { ref: teamRef, isInView: teamInView } = useInView()

  return (
    <main className="pt-24">
      <PageHero
        title="We Are Your IT Department"
        description="Code Voyagers was founded to give small and mid-sized businesses access to enterprise-grade IT support — without the enterprise-grade price tag. We believe every company deserves a technology partner that responds fast, explains clearly, and solves problems permanently."
      />

      <section ref={statsRef} className="bg-brand-light py-16">
        <div className="container-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} isInView={statsInView} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-base">
        <div className="container-width mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-display font-bold text-text-primary text-center mb-12"
          >
            The People Behind the Work
          </motion.h2>

          <motion.div
            ref={teamRef}
            variants={teamContainer}
            initial="hidden"
            animate={teamInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={teamItem}
                className="p-6 rounded-lg border border-border bg-surface shadow-card text-center hover:shadow-elevated transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-brand-light border border-brand/20 flex items-center justify-center mx-auto mb-4 text-brand font-semibold text-lg">
                  {member.initials}
                </div>
                <h4 className="font-semibold text-text-primary font-display">
                  {member.name}
                </h4>
                <p className="text-sm text-text-muted mb-3">{member.role}</p>
                <p className="text-sm text-text-body">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-base">
        <div className="container-width mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-display font-bold text-text-primary text-center mb-12"
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-surface shadow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary font-display mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-text-body">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
