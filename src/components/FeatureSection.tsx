import { Button } from "@/components/ui/button";
import featureImage from "@/assets/feature-image.jpg";

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
              You can easily avail our promo for renting a car.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3" >
              Book now 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;