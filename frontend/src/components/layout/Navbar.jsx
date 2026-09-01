import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-card'
            : 'bg-transparent'
        )}
      >
        <nav className="container-width mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-0.5 shrink-0">
            <span className="text-display-md font-bold font-display text-text-primary">
              Code
            </span>
            <span className="text-display-md font-bold font-display text-brand">
              Voyagers
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative px-4 py-2 text-body-md font-medium transition-colors',
                  location.pathname === link.href
                    ? 'text-brand'
                    : 'text-text-body hover:text-text-primary'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-4 right-4 h-0.5 bg-brand rounded-full origin-left transition-transform duration-200',
                    location.pathname === link.href
                      ? 'scale-x-100'
                      : 'scale-x-0 hover:scale-x-100'
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="default"
              asChild
              className="rounded-full hover:shadow-brand hover:scale-[1.02] transition-all duration-200"
            >
              <Link to="/contact">Book a Free Consult</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-body hover:text-text-primary transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-base/95 backdrop-blur-xl" />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center h-full gap-2 pt-16"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      'block px-8 py-3 text-2xl font-medium rounded-lg transition-colors font-display',
                      location.pathname === link.href
                        ? 'text-brand'
                        : 'text-text-primary hover:text-brand'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-6"
              >
                <Button size="lg" asChild className="rounded-full">
                  <Link to="/contact">Book a Free Consult</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
