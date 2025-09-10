import { Button } from "@/components/ui/button";
import featureImage from "@/assets/feature-image.jpg";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={featureImage} 
              alt="Car rental promo" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Unlock Great Deals on Kanika Travels 
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Discover our exclusive promotions and enjoy a seamless booking experience. Whether you're planning a road trip or need a car for your daily commute, we offer a wide range of vehicles to suit your needs. Our straightforward rental process ensures you get on the road quickly and hassle-free.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;