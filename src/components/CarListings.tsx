import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DoorOpen, Luggage } from "lucide-react";

// Import car images
import pajeroImg from "@/assets/cars/pajero.jpg";
import mocoImg from "@/assets/cars/moco.jpg";
import fittaImg from "@/assets/cars/fitta.jpg";
import lauraImg from "@/assets/cars/laura.jpg";
import laputaImg from "@/assets/cars/laputa.jpg";
import lacrosseImg from "@/assets/cars/lacrosse.jpg";

const CarListings = () => {
  const cars = [
    {
      name: "Mitsubishi Pajero",
      price: "$389.00",
      image: pajeroImg,
      luggage: 8,
      doors: 4,
      passenger: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      name: "Nissan Moco",
      price: "$389.00",
      image: mocoImg,
      luggage: 8,
      doors: 4,
      passenger: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      name: "Honda Fitta",
      price: "$389.00",
      image: fittaImg,
      luggage: 8,
      doors: 4,
      passenger: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      name: "Skoda Laura",
      price: "$389.00",
      image: lauraImg,
      luggage: 8,
      doors: 4,
      passenger: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      name: "Mazda LaPuta",
      price: "$389.00",
      image: laputaImg,
      luggage: 8,
      doors: 4,
      passenger: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    },
    {
      name: "Buick LaCrosse",
      price: "$389.00",
      image: lacrosseImg,
      luggage: 8,
      doors: 4,
      passenger: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Car Listings
          </h2>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {car.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-4">
                  {car.price}<span className="text-sm font-normal text-muted-foreground">/day</span>
                </div>
                
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
                
                <p className="text-muted-foreground text-sm mb-4">
                  {car.description}
                </p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Rent Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarListings;