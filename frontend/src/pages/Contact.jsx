import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Video,
  MessageSquare,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ErrorBanner } from '@/components/ui/ErrorBanner'
import { SERVICES } from '@/config/constants'
import { useSEO } from '@/utils/seo'

const contactInfo = {
  email: 'hello@codevoyagers.com',
  phone: '+92 300 1234567',
  address: 'Office 12, Blue Area, Peshawar, KP, Pakistan',
  hours: 'Mon–Fri: 9:00 AM – 6:00 PM PKT',
  whatsapp: 'https://wa.me/923001234567',
  linkedin: 'https://linkedin.com/company/codevoyagers',
}

function validateField(name, value) {
  switch (name) {
    case 'name':
      if (!value || value.trim().length < 2) return 'Name must be at least 2 characters.'
      return ''
    case 'email':
      if (!value || !/^\S+@\S+\.\S+$/.test(value)) return 'Please provide a valid email address.'
      return ''
    case 'message':
      if (!value || value.trim().length < 10) return 'Message must be at least 10 characters.'
      return ''
    default:
      return ''
  }
}

export default function Contact() {
  useSEO({
    title: 'Contact',
    description: 'Get in touch with Code Voyagers. Free consultation, fast response times, and honest advice about your IT challenges.',
    path: '/contact',
  })

  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('service') || 'general'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterested: preselected,
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const allErrors = {}
    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key, value)
      if (error) allErrors[key] = error
    }

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors)
      setTouched({ name: true, email: true, message: true })
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json()
        if (data.errors) setErrors(data.errors)
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-width mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto p-8 rounded-lg border border-success/30 bg-success-light text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-text-primary mb-2 font-display">
                Message Sent
              </h2>
              <p className="text-body-md text-text-body">
                We&apos;ll respond within 4 business hours.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-12 lg:gap-16">
            <div>
              <h1 className="text-display-lg font-display font-bold text-text-primary mb-3">
                Let&apos;s Talk About Your IT Problem
              </h1>
              <p className="text-body-lg text-text-body mb-8">
                No pitch call. Just an honest conversation about what&apos;s
                slowing you down.
              </p>

              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-lg border border-border bg-surface shadow-card space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="mb-1.5 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {touched.name && errors.name && (
                      <p id="name-error" role="alert" className="text-error text-body-sm flex items-center gap-1 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1.5 block">
                      Business Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@company.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" role="alert" className="text-error text-body-sm flex items-center gap-1 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="company" className="mb-1.5 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceInterested" className="mb-1.5 block">
                      Service Interested In
                    </Label>
                    <select
                      id="serviceInterested"
                      name="serviceInterested"
                      value={formData.serviceInterested}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:border-brand transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-1.5 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    placeholder="Tell us about your IT challenge..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                    {touched.message && errors.message && (
                      <p id="message-error" role="alert" className="text-error text-body-sm flex items-center gap-1 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                </div>

                {status === 'error' && !Object.keys(errors).length && (
                  <ErrorBanner
                    message="Something went wrong. Please try again or email us directly."
                    onRetry={() => setStatus('idle')}
                  />
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  {status === 'submitting'
                    ? 'Sending...'
                    : 'Send Message'}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="p-5 rounded-lg border border-border bg-surface shadow-card">
                <Mail className="w-5 h-5 text-brand mb-3" />
                <h3 className="font-semibold text-text-primary mb-1 font-display">
                  Email
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-text-body hover:text-brand transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="p-5 rounded-lg border border-border bg-surface shadow-card">
                <Phone className="w-5 h-5 text-brand mb-3" />
                <h3 className="font-semibold text-text-primary mb-1 font-display">
                  Phone
                </h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-text-body hover:text-brand transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="p-5 rounded-lg border border-border bg-surface shadow-card">
                <MapPin className="w-5 h-5 text-brand mb-3" />
                <h3 className="font-semibold text-text-primary mb-1 font-display">
                  Office
                </h3>
                <p className="text-sm text-text-body">{contactInfo.address}</p>
              </div>

              <div className="p-5 rounded-lg border border-border bg-surface shadow-card">
                <Clock className="w-5 h-5 text-brand mb-3" />
                <h3 className="font-semibold text-text-primary mb-1 font-display">
                  Business Hours
                </h3>
                <p className="text-sm text-text-body">{contactInfo.hours}</p>
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-surface shadow-card text-sm font-medium text-text-primary hover:shadow-elevated transition-shadow"
                >
                  <Video className="w-4 h-4 text-brand" />
                  Book a Video Call
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-surface shadow-card text-sm font-medium text-text-primary hover:shadow-elevated transition-shadow"
                >
                  <MessageSquare className="w-4 h-4 text-success" />
                  WhatsApp
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-surface shadow-card text-sm font-medium text-text-primary hover:shadow-elevated transition-shadow"
                >
                  <ExternalLink className="w-4 h-4 text-brand" />
                  LinkedIn
                </a>
              </div>

              <div className="aspect-video rounded-xl bg-base border border-border flex flex-col items-center justify-center">
                <MapPin className="w-10 h-10 text-text-muted mb-2" />
                <p className="text-sm text-text-muted">
                  Peshawar, KP, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
