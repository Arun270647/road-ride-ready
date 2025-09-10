import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeatureSection from "@/components/FeatureSection";
import CarListings from "@/components/CarListings";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FeatureSection />
      <CarListings />
      <Features />
      <Packages />
      <CallToAction />
    </div>
  );
};

export default Index;