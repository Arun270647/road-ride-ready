import reservationBg from "@/assets/hero-bg.jpg";
import { APIProvider } from '@vis.gl/react-google-maps';
import { ReservationForm } from "./ReservationForm";

const Reservation = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <section 
        className="relative py-20 bg-cover bg-center" 
        style={{ backgroundImage: `url(${reservationBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ReservationForm />
            <div className="text-white text-center lg:text-left">
              <h2 className="text-5xl font-bold leading-tight">Plan your trip now with Kanika Travels</h2>
              <h3 className="text-4xl font-bold">Book Cab at Ease</h3>
              <p className="mt-4 text-lg text-gray-300">Treat yourself in India</p>
            </div>
          </div>
        </div>
      </section>
    </APIProvider>
  );
};

export default Reservation;