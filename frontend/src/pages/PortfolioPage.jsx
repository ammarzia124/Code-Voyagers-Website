import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SERVICES } from '@/lib/utils'

const portfolioItems = [
  { id: 1, title: 'Nextera Health Platform', service: 'web-development', client: 'Nextera Health', description: 'A HIPAA-compliant telehealth platform serving 50K+ patients with real-time video consultations and EHR integration.', tags: ['React', 'Node.js', 'WebRTC'], featured: true },
  { id: 2, title: 'UrbanFlux Mobile App', service: 'app-development', client: 'UrbanFlux', description: 'Cross-platform ride-sharing app with real-time tracking, in-app payments, and a 4.8-star app store rating.', tags: ['React Native', 'Firebase', 'Stripe'], featured: true },
  { id: 3, title: 'LogiTrack Dashboard', service: 'ui-ux-design', client: 'LogiTrack', description: 'Real-time logistics dashboard for tracking 10K+ shipments across 15 countries with predictive ETA analytics.', tags: ['Figma', 'Design System', 'Data Viz'], featured: true },
  { id: 4, title: 'BrightPath Marketing Suite', service: 'digital-marketing', client: 'BrightPath', description: 'Integrated digital marketing strategy that grew organic traffic by 340% in 6 months.', tags: ['SEO', 'Content', 'Analytics'], featured: false },
  { id: 5, title: 'EcoTech Brand Identity', service: 'graphics-designing', client: 'EcoTech', description: 'Complete brand redesign including logo, guidelines, marketing collateral, and environmental signage.', tags: ['Branding', 'Print', 'Digital'], featured: false },
  { id: 6, title: 'FinBot AI Assistant', service: 'ai-automation', client: 'FinBot Inc', description: 'AI-powered customer support chatbot handling 10K+ daily queries with 94% resolution rate.', tags: ['NLP', 'Python', 'GPT-4'], featured: true },
]

const filters = [
  { value: 'all', label: 'All Projects' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.service === activeFilter)

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent-500 font-medium text-sm uppercase tracking-wider mb-3"
            >
              Our Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-neutral-50 mb-6"
            >
              Projects that speak for themselves
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-300"
            >
              A selection of our recent work across industries and disciplines.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                  activeFilter === f.value
                    ? 'bg-accent-500 text-brand-900 border-accent-500'
                    : 'border-brand-700 text-neutral-300 hover:border-accent-500/50 hover:text-neutral-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl border border-brand-700 bg-brand-800/30 overflow-hidden hover:border-accent-500/30 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-500/5 group-hover:bg-accent-500/10 transition-colors" />
                  <span className="text-4xl font-bold text-brand-700/50">{item.id.toString().padStart(2, '0')}</span>
                  {item.featured && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-accent-500 text-brand-900 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-neutral-50 group-hover:text-accent-500 transition-colors">
                      {item.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-neutral-400 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-neutral-400 mb-3">{item.client}</p>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded bg-brand-700/50 text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
