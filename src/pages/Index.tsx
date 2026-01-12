import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <DestinationsSection />
        <ExperiencesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
};
export default Index;
