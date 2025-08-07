import HeroSection from "@/components/sections/hero-section";
import PropertiesSection from "@/components/sections/properties-section";
import FeaturesSection from "@/components/sections/features-section";
import AppShowcaseSection from "@/components/sections/app-showcase-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PartnersSection from "@/components/sections/partners-section";
import BlogSection from "@/components/sections/blog-section";
import NewsletterSection from "@/components/sections/newsletter-section";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <PropertiesSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <TestimonialsSection />
      <PartnersSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}
