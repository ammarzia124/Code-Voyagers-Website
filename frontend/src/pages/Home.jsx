import HeroSection from '@/components/sections/HeroSection'
import LogoStripSection from '@/components/sections/LogoStripSection'
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABannerSection from '@/components/sections/CTABannerSection'
import { useSEO } from '@/utils/seo'

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'Code Voyagers provides IT consulting, web development, AI automation, and digital marketing services for businesses in Pakistan.',
    path: '/',
  })

  return (
    <main>
      <HeroSection />
      <LogoStripSection />
      <ServicesOverviewSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABannerSection />
    </main>
  )
}
