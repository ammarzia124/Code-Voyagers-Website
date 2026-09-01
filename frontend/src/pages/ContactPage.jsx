import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SITE_CONFIG, SERVICES } from '@/lib/utils'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const preselectedService = searchParams.get('service') || 'general'
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', service: preselectedService,
  })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', service: 'general' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-neutral-50 mb-6"
            >
              Let&apos;s start a conversation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-300"
            >
              Tell us about your project. We will get back to you within 24 hours with a detailed response.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="p-5 rounded-xl border border-brand-700 bg-brand-800/20">
                <Mail className="w-5 h-5 text-accent-500 mb-3" />
                <h3 className="font-semibold text-neutral-50 mb-1">Email</h3>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-neutral-300 hover:text-accent-500 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="p-5 rounded-xl border border-brand-700 bg-brand-800/20">
                <Phone className="w-5 h-5 text-accent-500 mb-3" />
                <h3 className="font-semibold text-neutral-50 mb-1">Phone</h3>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-neutral-300 hover:text-accent-500 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="p-5 rounded-xl border border-brand-700 bg-brand-800/20">
                <MapPin className="w-5 h-5 text-accent-500 mb-3" />
                <h3 className="font-semibold text-neutral-50 mb-1">Office</h3>
                <p className="text-sm text-neutral-300">{SITE_CONFIG.address}</p>
              </div>
              <div className="p-5 rounded-xl border border-brand-700 bg-brand-800/20">
                <Clock className="w-5 h-5 text-accent-500 mb-3" />
                <h3 className="font-semibold text-neutral-50 mb-1">Response Time</h3>
                <p className="text-sm text-neutral-300">Within 24 hours on business days</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-xl border border-brand-700 bg-brand-800/20 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-1.5">Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-1.5">Email *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-1.5">Phone</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-1.5">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-brand-700 bg-brand-800/50 px-4 py-2 text-sm text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    >
                      <option value="general">General Inquiry</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-1.5">Subject *</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="What can we help you with?" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-1.5">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline..." rows={5} required />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                    <MessageSquare className="w-4 h-4" /> Message sent successfully! We will get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    <MessageSquare className="w-4 h-4" /> Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full group" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
