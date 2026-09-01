import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Users, Award, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const team = [
  { name: 'Alex Rivera', role: 'Founder & CEO', initials: 'AR' },
  { name: 'Jordan Kim', role: 'CTO', initials: 'JK' },
  { name: 'Priya Patel', role: 'Head of Design', initials: 'PP' },
  { name: 'Sam Chen', role: 'Lead Developer', initials: 'SC' },
  { name: 'Maya Johnson', role: 'Marketing Director', initials: 'MJ' },
  { name: 'Chris Okafor', role: 'AI Engineer', initials: 'CO' },
]

const milestones = [
  { year: '2019', title: 'Founded', description: 'Started as a two-person team with a vision to make premium digital services accessible.' },
  { year: '2020', title: 'First Major Client', description: 'Landed our first enterprise client and delivered a platform serving 50K+ users.' },
  { year: '2021', title: 'Team Grew to 10', description: 'Expanded our team to include specialists in AI, mobile, and cloud infrastructure.' },
  { year: '2022', title: 'AI Division Launched', description: 'Opened a dedicated AI & Automation division to meet growing demand.' },
  { year: '2023', title: '50+ Projects', description: 'Crossed the 50-project milestone with clients across 12 countries.' },
  { year: '2024', title: 'Global Remote Team', description: 'Transitioned to a fully remote team spanning 8 time zones.' },
]

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand font-medium text-sm uppercase tracking-wider mb-3"
            >
              About Code Voyagers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-display font-bold text-text-primary mb-6"
            >
              We build technology that works for people
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-text-body"
            >
              Code Voyagers was founded on a simple belief: great technology should feel invisible. It should solve problems, not create them. Every line of code we write, every design we craft, every strategy we build serves one purpose — making your business run better.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border bg-surface shadow-card"
            >
              <Target className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">Our Mission</h3>
              <p className="text-text-body">
                To empower businesses with technology that drives measurable growth. We partner with companies that want to move fast, build smart, and scale with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-lg border border-border bg-surface shadow-card"
            >
              <Eye className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">Our Vision</h3>
              <p className="text-text-body">
                To be the most trusted technology partner for businesses navigating digital transformation. Not the biggest — the most reliable.
              </p>
            </motion.div>
          </div>

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display-md font-display font-bold text-text-primary text-center mb-12"
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand border-4 border-base -translate-x-1/2 z-10" />
                    <div className="ml-12 md:ml-0 md:w-1/2 p-5 rounded-lg border border-border bg-surface shadow-card">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-brand" />
                        <span className="text-brand font-mono text-sm">{m.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-text-primary mb-1 font-display">{m.title}</h4>
                      <p className="text-sm text-text-body">{m.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display-md font-display font-bold text-text-primary text-center mb-12"
            >
              Meet the Team
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-lg border border-border bg-surface shadow-card text-center hover:shadow-elevated transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-light border border-brand/20 flex items-center justify-center mx-auto mb-4 text-brand font-semibold">
                    {member.initials}
                  </div>
                  <h4 className="font-semibold text-text-primary">{member.name}</h4>
                  <p className="text-sm text-text-muted">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
