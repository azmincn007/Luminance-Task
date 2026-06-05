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

export default function Page() {
  return (
    <div className="min-h-screen bg-background  ">
      <Header />
      <main>
        <HeroSection />
        <InteriorSolutionsReveal />
        {/* <SolutionsSection /> */}
        <div className="md:px-0 px-4">
          <WhySection />
        </div>
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
