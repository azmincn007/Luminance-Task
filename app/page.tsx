"use client";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import GallerySection from "@/components/sections/GallerySection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import InteriorSolutionsReveal from "@/components/sections/IntervelSolution";
import Report from "@/components/Report";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InteriorSolutionsReveal />
        {/* <SolutionsSection /> */}
        <WhySection />
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactSection />
        <Report/>
      </main>
      <Footer />
    </div>
  );
}
