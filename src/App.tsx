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

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-deep text-off-white">

      <Navbar />

      <main>
        <HeroSection />
        <ProblemSection />
        <TargetSection />
        <WhySection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
      <MobileStickyCta />
    </div>
  );
}