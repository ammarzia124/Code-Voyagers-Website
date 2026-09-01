import HeroSection from '@/components/sections/HeroSection'
import LogoStripSection from '@/components/sections/LogoStripSection'
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABannerSection from '@/components/sections/CTABannerSection'

export default function Home() {
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
