import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-width mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand-light text-brand text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse-soft" />
            Trusted by 30+ businesses worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-display-xl font-display font-bold text-text-primary leading-[1.1] mb-6 text-balance"
          >
            We architect digital{' '}
            <span className="text-brand">experiences</span>{' '}
            that move businesses{' '}
            <span className="text-brand">forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body-lg text-text-body max-w-2xl mx-auto mb-10"
          >
            From custom web applications to AI-powered automation, we build the technology infrastructure your business needs to scale with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Get a Free Audit
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-text-muted"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              No hidden fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              30-day guarantee
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              24/7 support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
