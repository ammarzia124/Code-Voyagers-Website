import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import StatsCounter from '@/components/home/StatsCounter'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import TechStack from '@/components/home/TechStack'
import CtaBanner from '@/components/home/CtaBanner'

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
