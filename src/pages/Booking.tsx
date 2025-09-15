import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { ReservationForm } from "@/components/ReservationForm";
import { allCars } from "@/lib/carData";
import { Badge } from "@/components/ui/badge";
import { Users, DoorOpen, Luggage } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Helmet } from "react-helmet-async";

const Booking = () => {
  const { carName } = useParams();
  const car = allCars.find((c) => c.name === carName);

  // Handle car not found
  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Header />
        <div className="text-center">
          <Helmet>
            <title>Car Not Found – Kanika Travels</title>
            <meta
              name="description"
              content="The car you are looking for does not exist. Browse our full listing of cars and book your ride easily."
            />
          </Helmet>
          <h1 className="text-3xl font-bold mb-4">Car not found!</h1>
          <p className="text-muted-foreground">
            The car you are looking for does not exist.
          </p>
          <Link
            to="/listing"
            className="mt-4 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            View all cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Book {car.name} – Kanika Travels</title>
          <meta
            name="description"
            content={`Reserve the ${car.name} now. Enjoy affordable rides, airport transfers, and outstation travel with Kanika Travels.`}
          />
          <meta
            name="keywords"
            content={`Book ${car.name}, Kanika Travels booking, ${car.name} Chennai cab rental`}
          />
          <meta
            property="og:title"
            content={`Book ${car.name} – Kanika Travels`}
          />
          <meta
            property="og:description"
            content={`Reserve the ${car.name} now. Affordable rides, airport transfers, and outstation travel with Kanika Travels.`}
          />
          <meta property="og:image" content={car.image} />
        </Helmet>

        <Header />

        {/* Hero Section */}
        <section
          className="relative h-80 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Book Your Ride</h1>
            <nav className="text-lg">
              <Link
                to="/listing"
                className="hover:text-primary transition-colors"
              >
                Listing
              </Link>
              <span className="mx-2">/</span>
              <span>{car.name}</span>
            </nav>
          </div>
        </section>

        {/* Booking Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Car Details */}
              <div>
                <h2 className="text-4xl font-bold mb-6">{car.name}</h2>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-3/4 max-w-lg mx-auto rounded-lg shadow-lg mb-8 object-cover"
                />
                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 text-base font-semibold py-2 px-4"
                  >
                    <Luggage className="w-4 h-4" /> Luggage: {car.luggage}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 text-base font-semibold py-2 px-4"
                  >
                    <DoorOpen className="w-4 h-4" /> Doors: {car.doors}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 text-base font-semibold py-2 px-4"
                  >
                    <Users className="w-4 h-4" /> Passenger: {car.passenger}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {car.description}
                </p>
              </div>

              {/* Reservation Form */}
              <div className="lg:pl-8">
                <ReservationForm defaultCar={car.name} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </APIProvider>
  );
};

export default Booking;
