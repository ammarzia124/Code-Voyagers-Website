import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function CTABannerSection() {
  return (
    <section className="py-24 w-full overflow-hidden">
      <div
        className="w-full"
        style={{
          background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        }}
      >
        <div className="container-width mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display-lg font-display font-bold text-white max-w-3xl mx-auto mb-6 text-balance">
              Stop Tolerating Technology That Slows You Down.
            </h2>

            <p className="text-body-lg text-white/80 max-w-[50ch] mx-auto mb-10">
              Let us audit your systems, eliminate the bottlenecks, and build an
              IT foundation that actually powers your growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-white/90 shadow-elevated"
                asChild
              >
                <Link to="/contact">
                  Book Your Free Consult
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="border border-white bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+15551234567">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
