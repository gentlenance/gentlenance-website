import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import TargetSection from "./components/TargetSection";
import WhySection from "./components/WhySection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import MobileStickyCta from "./components/MobileStickyCta";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-emerald-deep text-off-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main>
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <ProblemSection />
        <TargetSection />
        <WhySection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer />
      <MobileStickyCta onOpenContact={() => setIsContactOpen(true)} />

      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}