import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, DoorOpen, Luggage } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import { smallVehicles, largeVehicles, vansAndBuses, tempos } from "@/lib/carData";

const Listing = () => {

  const renderCarCard = (car: any, index: number) => (
    <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-foreground mb-2">{car.name}</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1"><Luggage className="w-3 h-3" /> Luggage: {car.luggage}</Badge>
          <Badge variant="secondary" className="flex items-center gap-1"><DoorOpen className="w-3 h-3" /> Doors: {car.doors}</Badge>
          <Badge variant="secondary" className="flex items-center gap-1"><Users className="w-3 h-3" /> Passenger: {car.passenger}</Badge>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{car.description}</p>
        <Link to={`/booking/${car.name}`} className="w-full mt-auto">
          <Button className="w-full">Book Now</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Fleet</h1>
          <nav className="text-lg">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Listings</span>
          </nav>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12"><h2 className="text-4xl font-bold text-foreground mb-4">Small Vehicles</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">{smallVehicles.map(renderCarCard)}</div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12"><h2 className="text-4xl font-bold text-foreground mb-4">Large Vehicles</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">{largeVehicles.map(renderCarCard)}</div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12"><h2 className="text-4xl font-bold text-foreground mb-4">Vans / Buses</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">{vansAndBuses.map(renderCarCard)}</div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12"><h2 className="text-4xl font-bold text-foreground mb-4">Tempo Travellers</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">{tempos.map(renderCarCard)}</div>
        </div>
      </section>
    </div>
  );
};

export default Listing;