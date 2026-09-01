import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const blogPosts = {
  'building-scalable-web-applications': {
    title: 'Building Scalable Web Applications in 2024',
    category: 'technology',
    author: 'Code Voyagers Team',
    readTime: 8,
    date: '2024-03-15',
    content: `
## Start with the architecture you actually need

The biggest mistake teams make is over-engineering from day one. A startup with 100 users does not need microservices. A platform with 100K users probably does. The key is designing for where you will be in 12 months, not 10 years.

## Choose boring technology for critical paths

Your database, authentication, and payment processing should use battle-tested tools. Save your innovation budget for the features that differentiate your product.

## The scaling checklist

- **Stateless services**: Every request should be independently processable. No in-memory sessions.
- **Database indexing**: Profile your queries. Add indexes for every WHERE clause and JOIN condition you use frequently.
- **Caching layers**: Redis for session data, CDN for static assets, application-level caching for expensive computations.
- **Load testing**: Run load tests before you launch, not after your first outage.

## Monitor everything, alert on what matters

Set up monitoring from day one. But do not alert on everything — alert on symptoms (error rate, latency p99), not causes (CPU usage, memory).

The best time to build for scale is before you need it. The second best time is now.
    `,
  },
}

const defaultPost = {
  title: 'Blog Post',
  category: 'technology',
  author: 'Code Voyagers Team',
  readTime: 5,
  date: '2024-03-15',
  content: 'This is a sample blog post. Full content coming soon.',
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts[slug] || { ...defaultPost, title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }

  return (
    <main className="pt-24">
      <article className="section-padding">
        <div className="container-width mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-light text-brand border border-brand/20">
                {post.category}
              </span>
            </div>
            <h1 className="text-display-lg font-display font-bold text-text-primary mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm text-text-muted mb-12">
              <span>{post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} min read</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-none"
          >
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="text-display-md font-display font-bold text-text-primary mt-12 mb-4">{block.replace('## ', '')}</h2>
              }
              if (block.startsWith('- ')) {
                return (
                  <ul key={i} className="space-y-2 mb-6 ml-4">
                    {block.split('\n').map((li, j) => (
                      <li key={j} className="text-text-body flex items-start gap-2">
                        <span className="text-brand mt-1.5">•</span>
                        <span dangerouslySetInnerHTML={{ __html: li.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )
              }
              return <p key={i} className="text-text-body mb-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>') }} />
            })}
          </motion.div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Button variant="outline" className="group" asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  All Posts
                </Link>
              </Button>
              <button className="flex items-center gap-2 text-sm text-text-muted hover:text-brand transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
