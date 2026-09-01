import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'building-scalable-web-applications',
    title: 'Building Scalable Web Applications in 2024',
    excerpt: 'A practical guide to architecture decisions that keep your application fast as it grows from 100 to 100K users.',
    category: 'technology',
    author: 'Code Voyagers Team',
    readTime: 8,
    date: '2024-03-15',
  },
  {
    id: 2,
    slug: 'ui-ux-design-principles',
    title: '7 UI/UX Principles Every Product Team Should Know',
    excerpt: 'The foundational design principles that separate products users love from ones they tolerate.',
    category: 'design',
    author: 'Priya Patel',
    readTime: 6,
    date: '2024-03-10',
  },
  {
    id: 3,
    slug: 'ai-chatbots-business-automation',
    title: 'How AI Chatbots Are Reshaping Customer Support',
    excerpt: 'Real-world case studies showing how businesses reduced support costs by 60% with intelligent automation.',
    category: 'ai',
    author: 'Chris Okafor',
    readTime: 10,
    date: '2024-03-05',
  },
  {
    id: 4,
    slug: 'seo-strategy-for-startups',
    title: 'SEO Strategy for Startups: A No-Nonsense Guide',
    excerpt: 'Skip the jargon. This is the exact SEO playbook we use for our clients, explained in plain language.',
    category: 'marketing',
    author: 'Maya Johnson',
    readTime: 7,
    date: '2024-02-28',
  },
  {
    id: 5,
    slug: 'react-native-vs-flutter',
    title: 'React Native vs Flutter in 2024: An Honest Comparison',
    excerpt: 'We have shipped production apps with both. Here is our honest take on when to use which.',
    category: 'technology',
    author: 'Sam Chen',
    readTime: 12,
    date: '2024-02-20',
  },
  {
    id: 6,
    slug: 'digital-transformation-roadmap',
    title: 'Your First 90 Days of Digital Transformation',
    excerpt: 'A step-by-step roadmap for businesses starting their digital transformation journey.',
    category: 'business',
    author: 'Alex Rivera',
    readTime: 9,
    date: '2024-02-15',
  },
]

const categoryColors = {
  technology: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  design: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  ai: 'bg-accent-500/10 text-accent-400 border-accent-500/30',
  marketing: 'bg-green-500/10 text-green-400 border-green-500/30',
  business: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
}

export default function BlogPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent-500 font-medium text-sm uppercase tracking-wider mb-3"
            >
              Blog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-neutral-50 mb-6"
            >
              Insights and perspectives
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-300"
            >
              Practical guides, honest comparisons, and real-world case studies from our team.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl border border-brand-700 bg-brand-800/30 overflow-hidden hover:border-accent-500/30 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-accent-500/5 group-hover:bg-accent-500/10 transition-colors" />
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-neutral-50 mb-2 group-hover:text-accent-500 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime} min
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-1 text-accent-500 hover:underline">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
