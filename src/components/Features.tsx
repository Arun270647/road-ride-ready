import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "24/7 Customer Support",
      description: "Our team is available around the clock to assist you with any inquiries or support you may need."
    },
    {
      title: "Wide Range of Vehicles",
      description: "From compact cars to spacious SUVs and vans, we have the perfect vehicle for every occasion."
    },
    {
      title: "Flexible Rental Plans",
      description: "Choose from hourly, daily, weekly, or monthly plans to fit your schedule and budget."
    },
    {
      title: "Easy Online Booking",
      description: "Rent your desired car in just a few clicks with our simple and secure online booking system."
    },
    {
      title: "Well-Maintained Cars",
      description: "All our vehicles are regularly serviced and maintained to ensure a safe and comfortable ride."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Our pricing is straightforward, so you know exactly what you're paying for."
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
            We provide the best car rental services for your needs.
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