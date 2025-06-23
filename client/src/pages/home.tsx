import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DemoSection from "@/components/demo-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg))] text-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <Footer />
    </div>
  );
}
