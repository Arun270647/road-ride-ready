import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, DoorOpen, Luggage } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

// Placeholder images from your assets
import swiftImg from "@/assets/cars/swift.jpeg";
import glanzaImg from "@/assets/cars/glanzag.avif"; // Placeholder for Swift
import balenoImg from "@/assets/cars/baleno.jpg"; 
import celeroImg from "@/assets/cars/thar.avif";
import ignisImg from "@/assets/cars/creta.jpg";// Placeholder for Baleno
import xuvImg from "@/assets/cars/xuv.webp"; 
import pajImg from "@/assets/cars/pajero.avif";
import innovaImg from "@/assets/cars/innova.avif";// Placeholder for XUV
import scorpioImg from "@/assets/cars/scorpio.jpg"; // Placeholder for Scorpio
import vanImg from "@/assets/cars/moco.jpg";
import van2Img from "@/assets/cars/minibus.jpg";
import tempo2Img from "@/assets/cars/ltem.jpg";
import kiaImg from "@/assets/cars/caren.avif"; // Placeholder for Van
import tempoImg from "@/assets/cars/tempo.png"; // Placeholder for Tempo

const Listing = () => {
  const smallVehicles = [
    { name: "Swift Dzire", image: swiftImg, passenger: "4+1", luggage: 2, doors: 4, description: "A popular choice for its sporty look and fuel efficiency. The Swift is perfect for navigating city streets with ease, offering a zippy performance and a comfortable ride." },
    { name: "Glanza", image: glanzaImg, passenger: "4+1", luggage: 2, doors: 4, description: "Known for its premium features and comfortable ride. The Toyota Glanza combines elegant design with advanced technology, making it an excellent choice for both city commutes and weekend getaways." },
    { name: "Baleno", image: balenoImg, passenger: "4+1", luggage: 2, doors: 4, description: "A stylish hatchback with a spacious interior and modern tech. The Baleno offers a premium cabin experience, ample boot space, and a smooth, refined engine for a delightful driving experience." },
    { name: "Thar", image: celeroImg, passenger: "3+1", luggage: 2, doors: 4, description: "An iconic off-roader with a rugged design and go-anywhere capabilities. Perfect for adventurous trips and making a style statement." },
    { name: "Creta", image: ignisImg, passenger: "4+1", luggage: 3, doors: 4, description: "A popular compact SUV that offers a perfect blend of style, comfort, and performance. Ideal for families and long drives." },
  ];

  const largeVehicles = [
    { name: "XUV", image: xuvImg, passenger: "6+1", luggage: 4, doors: 4, description: "A feature-packed SUV with a commanding road presence. It offers three-row seating, advanced safety features, and a powerful engine, making it ideal for large families and long road trips." },
    { name: "Pajero", image: pajImg, passenger: "6+1", luggage: 5, doors: 4, description: "A legendary off-roader known for its ruggedness and reliability. The Pajero can conquer any terrain with its robust build and powerful 4x4 capabilities, ensuring a safe and thrilling adventure." },
    { name: "Innova Crysta", image: innovaImg, passenger: "6+1", luggage: 4, doors: 4, description: "The benchmark for comfort and space in the MPV segment. The Innova is renowned for its captain seats, premium interior, and reliable performance, making it a top choice for family travel." },
    { name: "Kia Carens", image: kiaImg, passenger: "6+1", luggage: 4, doors: 4, description: "A stylish and modern MPV, the Kia Carens offers a premium cabin, advanced safety features, and a comfortable ride for the whole family." },
    { name: "Scorpio", image: scorpioImg, passenger: "6+1", luggage: 4, doors: 4, description: "A tough and durable SUV with a powerful engine. The Scorpio's muscular design and high seating position provide a commanding view of the road, perfect for both city and rural landscapes." },
  ];

  const vansAndBuses = [
    { name: "Van", image: vanImg, passenger: "8+", luggage: 10, doors: 4, description: "Ideal for group travel, offering ample space for passengers and luggage. Our vans are perfect for corporate outings, family functions, or any event requiring comfortable group transportation." },
    { name: "Mini Bus", image: van2Img, passenger: "8+", luggage: 10, doors: 4, description: "Suitable for larger groups and short-distance tours, providing comfortable seating for everyone on board." }
  ];

  const tempos = [
    { name: "Tempo Traveller", image: tempoImg, passenger: "12+", luggage: 15, doors: 4, description: "The perfect solution for large group outings and long-distance travel. With comfortable seating for 12+ passengers and plenty of room for luggage, it's the ultimate choice for group tours." },
    { name: "Luxury Tempo Traveller", image: tempo2Img, passenger: "12+", luggage: 15, doors: 4, description: "Experience premium travel with recliner seats, AC, and entertainment systems for ultimate comfort on the go." },
  ];

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
        <Link to="/contact" className="w-full mt-auto">
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

      {/* Small Vehicles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Small Vehicles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smallVehicles.map(renderCarCard)}
          </div>
        </div>
      </section>

      {/* Large Vehicles Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Large Vehicles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {largeVehicles.map(renderCarCard)}
          </div>
        </div>
      </section>

      {/* Van/Bus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Vans / Buses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vansAndBuses.map(renderCarCard)}
          </div>
        </div>
      </section>

      {/* Tempo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Tempo Travellers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tempos.map(renderCarCard)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing; 