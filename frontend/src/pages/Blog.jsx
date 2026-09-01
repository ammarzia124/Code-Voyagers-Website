import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { blogPosts } from '@/data/blogPosts'
import PageHero from '@/components/layout/PageHero'
import { useSEO } from '@/utils/seo'
import { useTheme } from '@/context/ThemeContext'

const categories = ['All', 'Development', 'Design', 'AI & Automation', 'Marketing', 'Video & Media']

const categoryStyles = {
  Development: 'bg-brand-light text-brand',
  Design: 'bg-purple-50 text-purple-600',
  'AI & Automation': 'bg-accent-light text-accent',
  Marketing: 'bg-success-light text-success',
  'Video & Media': 'bg-warning-light text-warning',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Blog() {
  useSEO({
    title: 'Blog',
    description: 'Practical IT insights for business leaders — cybersecurity, cloud, networking, AI, and digital strategy articles.',
    path: '/blog',
  })

  const { reducedMotion } = useTheme()
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeTab)

  return (
    <main className="pt-24">
      <PageHero
        title="IT Insights for Business Leaders"
        description="Practical articles with no unnecessary jargon."
      />

      <section className="section-padding bg-base">
        <div className="container-width mx-auto">
          <Tabs defaultValue="All" onValueChange={setActiveTab}>
            <TabsList className="mb-10">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? undefined : { delay: i * 0.05 }}
                  className="group rounded-lg border border-border bg-surface shadow-card overflow-hidden hover:shadow-elevated transition-shadow flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className={`inline-flex self-start px-3 py-1 rounded-full text-body-sm font-medium mb-4 ${categoryStyles[post.category] || 'bg-brand-light text-brand'}`}
                    >
                      {post.category}
                    </span>

                    <h2 className="text-lg font-semibold text-text-primary mb-2 font-display line-clamp-2 group-hover:text-brand transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-body-sm text-text-body mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-body-sm text-text-muted pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-brand font-medium hover:underline"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-text-muted">
                No posts found in this category.
              </div>
            )}
          </Tabs>
        </div>
      </section>
    </main>
  )
}
