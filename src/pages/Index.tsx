import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Reservation from "@/components/Reservation";
import CarListings from "@/components/CarListings";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Kanika Travels – Affordable Cab & Car Rental in Tamil Nadu</title>
        <meta
          name="description"
          content="Book affordable cab and car rental services with Kanika Travels. Airport transfers, outstation rides and local city taxis across Tamil Nadu including Chennai, Madurai and Tirunelveli."
        />
        <meta
          name="keywords"
          content="Kanika Travels, cab service Tamil Nadu, car rental Chennai, airport taxi, outstation cab booking, affordable cabs Tirunelveli"
        />
        <meta property="og:title" content="Kanika Travels – Affordable Cab & Car Rental in Tamil Nadu" />
        <meta
          property="og:description"
          content="Book affordable cab and car rental services with Kanika Travels. Airport transfers, outstation rides and local city taxis across Tamil Nadu."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanikatravels.com" />
        <meta property="og:image" content="https://kanikatravels.com/og-image.jpg" />
        <link rel="canonical" href="https://kanikatravels.com" />
      </Helmet>

      {/* ✅ Page Components */}
      <Header />
      <HeroSection />
      <HowItWorks />
      <Reservation />
      <CarListings />
      <Features />
      <Packages />
      <CallToAction />
    </div>
  );
};

export default Index;
