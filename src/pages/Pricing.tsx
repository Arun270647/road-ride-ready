import Header from "@/components/Header";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      title: "Small Vehicle - Local Package",
      price: "₹1500",
      details: [
        "Minimum 5-hour rental",
        "Ideal for city usage",
        "4+1 seating capacity",
        "Fuel efficient and easy to park",
      ],
    },
    {
      title: "XUV - 5 Hour Package",
      price: "₹2300",
      details: [
        "5-hour rental duration",
        "Up to 50km coverage included",
        "6+1 seating capacity",
        "Spacious and comfortable for families",
      ],
    },
    {
      title: "Van & Tempo - Custom Packages",
      price: "Contact Us for Pricing",
      details: [
        "Pricing based on rental period",
        "Ideal for large groups and tours",
        "Ample luggage space",
        "Comfortable for long journeys",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pricing & Packages</h1>
          <nav className="text-lg">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Pricing</span>
          </nav>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find the perfect plan for your trip. We offer competitive rates and flexible packages to meet your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-primary pt-4">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {pkg.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;