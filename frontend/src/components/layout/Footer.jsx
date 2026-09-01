import { Link } from 'react-router-dom'
import { Rocket, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/config/constants'

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'App Development', href: '/services/app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'Graphics Design', href: '/services/graphics-designing' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'AI & Automation', href: '/services/ai-automation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-base">
      <div className="section-padding">
        <div className="container-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand/10">
                  <Rocket className="w-5 h-5 text-brand" />
                </div>
                <span className="text-lg font-bold text-text-primary font-display">
                  Code<span className="text-brand">Voyagers</span>
                </span>
              </Link>
              <p className="text-sm text-text-body leading-relaxed mb-6">
                Building digital experiences that move businesses forward. From concept to deployment, we engineer solutions that scale.
              </p>
              <div className="flex items-center gap-3">
                <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border text-text-muted hover:text-brand hover:border-brand/30 transition-colors" aria-label="GitHub">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border text-text-muted hover:text-brand hover:border-brand/30 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border text-text-muted hover:text-brand hover:border-brand/30 transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-text-body hover:text-brand transition-colors flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-text-body hover:text-brand transition-colors flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-text-body hover:text-brand transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-text-body hover:text-brand transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <span className="text-sm text-text-body">{SITE_CONFIG.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Code Voyagers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-text-muted hover:text-brand transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-text-muted hover:text-brand transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
