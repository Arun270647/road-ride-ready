import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import pajero from "@/assets/cars/pajero.jpg";
import moco from "@/assets/cars/moco.jpg";
import fitta from "@/assets/cars/fitta.jpg";
import laura from "@/assets/cars/laura.jpg";
import laputa from "@/assets/cars/laputa.jpg";
import lacrosse from "@/assets/cars/lacrosse.jpg";

const Listing = () => {
  const cars = [
    {
      id: 1,
      name: "Mitsubishi Pajero",
      price: 389,
      image: pajero,
      luggage: 8,
      doors: 4,
      passengers: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      id: 2,
      name: "Nissan Moco",
      price: 389,
      image: moco,
      luggage: 8,
      doors: 4,
      passengers: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      id: 3,
      name: "Honda Fitta",
      price: 389,
      image: fitta,
      luggage: 8,
      doors: 4,
      passengers: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      id: 4,
      name: "Honda Laura",
      price: 389,
      image: laura,
      luggage: 8,
      doors: 4,
      passengers: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      id: 5,
      name: "Suzuki Laputa",
      price: 389,
      image: laputa,
      luggage: 8,
      doors: 4,
      passengers: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      id: 6,
      name: "Buick Lacrosse",
      price: 389,
      image: lacrosse,
      luggage: 8,
      doors: 4,
      passengers: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
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
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Car Listings</h2>
            <p className="text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                    ${car.price}.00<span className="text-lg text-muted-foreground font-normal">/day</span>
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Luggage:</span>
                      <span className="text-foreground font-medium ml-1">{car.luggage}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Doors:</span>
                      <span className="text-foreground font-medium ml-1">{car.doors}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Passenger:</span>
                      <span className="text-foreground font-medium ml-1">{car.passengers}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {car.description}
                  </p>
                  
                  <Button className="w-full">
                    Rent Now
                  </Button>
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