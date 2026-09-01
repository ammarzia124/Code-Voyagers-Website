import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/config/constants'
import { useInView } from '@/hooks/useInView'

const displayedTestimonials = TESTIMONIALS.slice(0, 3)

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="section-padding bg-base">
      <div className="container-width mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-display font-bold text-text-primary text-balance"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {displayedTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={item}
              className="p-6 rounded-lg bg-surface shadow-card border-l-[3px] border-l-brand"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-warning fill-warning"
                  />
                ))}
              </div>

              <p className="text-body-lg text-text-body italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div>
                <p className="text-body-md font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-body-sm text-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
