import { motion } from 'framer-motion'
import { ArrowRight, Users, ThumbsUp, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/ThemeContext'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const uptimeData = [
  { month: 'Jan', uptime: 99.2 },
  { month: 'Feb', uptime: 99.5 },
  { month: 'Mar', uptime: 99.8 },
  { month: 'Apr', uptime: 99.6 },
  { month: 'May', uptime: 99.9 },
  { month: 'Jun', uptime: 99.7 },
]

const trustBadges = [
  { icon: Users, label: '500+ Issues Resolved' },
  { icon: ThumbsUp, label: '98% Client Satisfaction' },
  { icon: Clock, label: '< 4hr Response Time' },
]

export default function HeroSection() {
  const { reducedMotion } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base">
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, var(--color-brand-light) 0%, transparent 60%)',
        }}
      />

      <div className="container-width mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? undefined : { duration: 0.6, ease: 'easeOut' }}
              className="text-display-xl font-display font-bold text-text-primary leading-[1.1] mb-6 text-balance"
            >
              Your Technology, Finally Working For You
            </motion.h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? undefined : { duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="text-body-lg text-text-body max-w-2xl mb-10"
            >
              We manage, secure, and optimize your IT infrastructure so you can
              focus on what matters — running your business. From proactive
              maintenance to emergency support, we keep your systems running
              smoothly.
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? undefined : { duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book a Free Consult
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reducedMotion ? undefined : { duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-text-muted"
            >
              {trustBadges.map((badge, i) => (
                <div key={badge.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden sm:inline text-border mr-2">
                      ·
                    </span>
                  )}
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reducedMotion ? undefined : { duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="shadow-elevated rounded-xl bg-surface overflow-hidden">
              <div className="h-1.5 bg-brand" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary font-display">
                      System Uptime Report
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      Last 6 months
                    </p>
                  </div>
                  <span className="text-xs font-medium text-success bg-success-light px-2.5 py-1 rounded-full">
                    Healthy
                  </span>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={uptimeData}>
                      <defs>
                        <linearGradient
                          id="uptimeGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--color-brand)"
                            stopOpacity={0.15}
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--color-brand)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }}
                      />
                      <YAxis
                        domain={[98.5, 100]}
                        hide
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 13,
                        }}
                        formatter={(value) => [`${value}%`, 'Uptime']}
                      />
                      <Area
                        type="monotone"
                        dataKey="uptime"
                        stroke="var(--color-brand)"
                        strokeWidth={2}
                        fill="url(#uptimeGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-text-muted">Average</p>
                    <p className="text-sm font-semibold text-text-primary">
                      99.6%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Lowest</p>
                    <p className="text-sm font-semibold text-text-primary">
                      99.2%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Incidents</p>
                    <p className="text-sm font-semibold text-text-primary">2</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
