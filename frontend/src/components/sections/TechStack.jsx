import { motion } from 'framer-motion'

const technologies = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Figma',
  'Python', 'TensorFlow', 'React Native', 'Flutter', 'GraphQL',
  'Redis', 'Kubernetes', 'Firebase', 'Supabase', 'Vercel',
]

export default function TechStack() {
  return (
    <section className="section-padding bg-base overflow-hidden">
      <div className="container-width mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium text-sm uppercase tracking-wider mb-3"
          >
            Our Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display-md font-display font-bold text-text-primary"
          >
            Built with the best tools
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base to-transparent z-10" />

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 w-max"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="px-5 py-2.5 rounded-md border border-border bg-surface text-sm text-text-body whitespace-nowrap hover:border-brand/30 hover:text-brand transition-colors"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
