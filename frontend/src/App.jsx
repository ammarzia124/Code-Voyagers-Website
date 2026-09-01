import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { ToastProvider } from '@/context/ToastContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageWrapper from '@/components/layout/PageWrapper'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import PortfolioPage from '@/pages/PortfolioPage'
import Blog from '@/pages/Blog'
import BlogPostPage from '@/pages/BlogPostPage'
import Contact from '@/pages/Contact'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen bg-base text-text-primary font-body">
            <Navbar />
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageWrapper>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  )
}
