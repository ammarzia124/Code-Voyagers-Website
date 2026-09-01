import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useTheme } from '@/context/ThemeContext'

const steps = [
  {
    number: 1,
    title: 'Discovery Call',
    description:
      'We listen first. You explain your problem, we ask the right questions.',
  },
  {
    number: 2,
    title: 'Diagnosis & Proposal',
    description:
      'A written assessment with a clear action plan and transparent pricing.',
  },
  {
    number: 3,
    title: 'Execution',
    description:
      'Our engineers execute, keeping you informed at every milestone.',
  },
  {
    number: 4,
    title: 'Ongoing Support',
    description:
      "We don't disappear after delivery. Monthly check-ins included.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function ProcessSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { reducedMotion } = useTheme()

  return (
    <section className="section-padding bg-base">
      <div className="container-width mx-auto">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display-md font-display font-bold text-text-primary mb-16"
        >
          How We Work
        </motion.h2>

        <div ref={ref} className="relative">
          <div className="absolute left-[19px] top-[20px] bottom-[20px] w-0.5 bg-brand/20" />

          <motion.div
            className="absolute left-[19px] top-[20px] bottom-[20px] w-0.5 bg-brand origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 1.2, ease: 'easeOut' }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={item}
                className="flex items-start gap-6 mb-12 last:mb-0"
              >
                <div className="relative z-10 w-10 h-10 rounded-full bg-brand text-white text-sm font-semibold flex items-center justify-center shrink-0">
                  {step.number}
                </div>

                <div className="pt-1.5">
                  <h3 className="text-lg font-semibold text-text-primary font-display mb-1">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-text-body max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
