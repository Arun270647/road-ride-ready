import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Wide Range of Vehicles",
      description: "From compact cars for city driving to spacious SUVs and vans for family trips, we have a vehicle for every need."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Our pricing is straightforward, so you know exactly what you're paying for."
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you with any inquiries or issues."
    },
    {
      title: "Easy Booking Process",
      description: "Rent a car in just a few clicks through our user-friendly online booking platform."
    },
    {
      title: "Flexible Rental Periods",
      description: "We offer flexible rental options, including hourly, daily, and long-term rentals to suit your schedule."
    },
    {
      title: "Well-Maintained Cars",
      description: "All our vehicles are regularly serviced and maintained to ensure a safe and comfortable driving experience."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a seamless and reliable car rental experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;