import HeroSection from "@/components/hero-section"
import PartnersSection from "@/components/partners-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import FounderSection from "@/components/founder-section"
import TreatmentsSection from "@/components/treatments-section"
import BridalSection from "@/components/bridal-section"
import PermanentMakeupSection from "@/components/permanent-makeup-section"
import AboutSection from "@/components/about-section"
import FaqSection from "@/components/faq-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <PortfolioSection />
      <FounderSection />
      <TreatmentsSection />
      <BridalSection />
      <PermanentMakeupSection />
      <AboutSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  )
}

