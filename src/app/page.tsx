import Navbar from "@/components/Navbar";
import HeroScroll from "@/components/HeroScroll";
import IntroSection from "@/components/IntroSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroScroll />
      <IntroSection />
      <WorkSection />
      <AboutSection />
      <ApproachSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
