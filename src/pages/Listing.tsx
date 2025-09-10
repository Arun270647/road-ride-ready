import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DoorOpen, Luggage } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import pajero from "@/assets/cars/xuv.webp";
import moco from "@/assets/cars/van.jpg";
import fitta from "@/assets/cars/glanza.jpg";
import laura from "@/assets/cars/tempo.png";

const Listing = () => {
  const cars = [
    {
      name: "Small vehicle",
      price: "₹12/km",
      image: fitta,
      luggage: 4,
      doors: 4,
      passenger: "4+1",
      description: "Ideal for city trips and small groups, offering great fuel efficiency and easy parking."
    },
    {
      name: "XUV",
      price: "₹18/km",
      image: pajero,
      luggage: 6,
      doors: 4,
      passenger: "6+1",
      description: "Perfect for family vacations and off-road adventures, providing ample space and comfort."
    },
    {
      name: "Van",
      price: "Contact for Price",
      image: moco,
      luggage: 10,
      doors: 5,
      passenger: "8+1",
      description: "The best choice for large groups, ensuring a comfortable and convenient travel experience."
    },
    {
      name: "Tempo",
      price: "Contact for Price",
      image: laura,
      luggage: 15,
      doors: 4,
      passenger: "12+1",
      description: "Excellent for group outings and tours, with generous seating and storage capacity."
    }
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
          <h1 className="text-5xl font-bold mb-4">Listings</h1>
          <nav className="text-lg">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Listings</span>
          </nav>
        </div>
      </section>

      {/* Car Listings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Fleet</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from a variety of vehicles to suit your travel needs. We offer a diverse range of cars to ensure you find the perfect one for your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{car.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">
                    {car.price}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Luggage className="w-3 h-3" />
                    Luggage: {car.luggage}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <DoorOpen className="w-3 h-3" />
                    Doors: {car.doors}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Passenger: {car.passenger}
                  </Badge>
                </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {car.description}
                  </p>
                  
                  <Link to="/contact" className="w-full">
                    <Button className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;