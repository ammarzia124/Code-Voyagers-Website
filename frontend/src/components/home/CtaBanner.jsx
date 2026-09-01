import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CtaBanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-width mx-auto">
        <div className="relative rounded-2xl border border-brand-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-brand-800 to-brand-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-neutral-50 mb-4"
            >
              Ready to start your next project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-300 max-w-xl mx-auto mb-8"
            >
              Let&apos;s discuss how Code Voyagers can help you achieve your digital goals. Get a free project audit and a detailed roadmap.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Start the Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
