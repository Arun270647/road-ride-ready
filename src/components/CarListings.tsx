import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DoorOpen, Luggage } from "lucide-react";
import { Link } from "react-router-dom";

// Import car images
import pajeroImg from "@/assets/cars/xuv.webp";
import mocoImg from "@/assets/cars/bus.jpg";
import fittaImg from "@/assets/cars/glanza.jpg";
import lauraImg from "@/assets/cars/tempo.png";

const CarListings = () => {
  const cars = [
    {
      name: "Small vehicle",
      price: "₹12/km",
      image: fittaImg,
      luggage: 4,
      doors: 4,
      passenger: "4+1",
      description: "Ideal for city trips and small groups, offering great fuel efficiency and easy parking."
    },
    {
      name: "XUV",
      price: "₹18/km",
      image: pajeroImg,
      luggage: 6,
      doors: 4,
      passenger: "6+1",
      description: "Perfect for family vacations and off-road adventures, providing ample space and comfort."
    },
    {
      name: "Van / Bus",
      price: "Contact for Price",
      image: mocoImg,
      luggage: 10,
      doors: 5,
      passenger: "8+1",
      description: "The best choice for large groups, ensuring a comfortable and convenient travel experience."
    },
    {
      name: "Tempo",
      price: "Contact for Price",
      image: lauraImg,
      luggage: 15,
      doors: 4,
      passenger: "12+1",
      description: "Excellent for group outings and tours, with generous seating and storage capacity."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from a variety of vehicles to suit your travel needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  {car.price}
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
                <Link to="/listing" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarListings;