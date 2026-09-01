import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import StatsCounter from '@/components/sections/StatsCounter'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
import TechStack from '@/components/sections/TechStack'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <StatsCounter />
      <WhyChooseUs />
      <TestimonialCarousel />
      <TechStack />
      <CtaBanner />
    </main>
  )
}
