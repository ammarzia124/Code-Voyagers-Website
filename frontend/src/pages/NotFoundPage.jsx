import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl font-bold font-mono text-accent-500/20 mb-4">404</div>
          <h1 className="text-3xl font-bold text-neutral-50 mb-3">Page not found</h1>
          <p className="text-neutral-300 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" className="group" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Go Home
              </Link>
            </Button>
            <Button className="group" asChild>
              <Link to="/contact">
                <Home className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
