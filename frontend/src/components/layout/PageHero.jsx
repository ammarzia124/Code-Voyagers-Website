import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ title, description, breadcrumbs }) {
  return (
    <section className="h-[50vh] min-h-[400px] flex items-center relative overflow-hidden bg-base">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, var(--color-brand-light) 0%, transparent 60%)',
        }}
      />

      <div className="container-width mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-body-sm text-text-muted mb-6"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <ChevronRight className="w-3.5 h-3.5" />
                )}
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-text-primary">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-display-lg font-display font-bold text-text-primary mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-body-lg text-text-body max-w-2xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
