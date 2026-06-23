import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReviewsCarousel />
      <ServicesSection />
      <WhyChooseUs />
      <Gallery />
      <AboutSection />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
