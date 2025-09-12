import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      title: "Small Vehicle", // Changed title to be shorter
      price: "₹1500",
      image: "https://via.placeholder.com/150x100/ADD8E6/000000?text=Small+Car", // Placeholder image
      details: [
        "Minimum 5-hour rental",
        "Up to 50km coverage included",
        "Ideal for city usage",
        "4+1 seating capacity",
        "Fuel efficient and easy to park",
      ],
    },
    {
      title: "Large Vehicle", // Changed title to be shorter
      price: "₹2300",
      image: "https://via.placeholder.com/150x100/FFB6C1/000000?text=Large+Car", // Placeholder image
      details: [
        "5-hour rental duration",
        "Up to 50km coverage included",
        "6+1 seating capacity",
        "Spacious and comfortable for families",
      ],
    },
    {
      title: "Van & Tempo - Custom Packages",
      price: "Contact Us for Pricing",
      image: "https://via.placeholder.com/150x100/90EE90/000000?text=Van+%26+Tempo", // Placeholder image
      details: [
        "Pricing based on rental period",
        "Ideal for large groups and tours",
        "Ample luggage space",
        "Comfortable for long journeys",
      ],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Rental Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose a package that suits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="shadow-lg flex flex-col">
              <CardHeader className="p-6 pb-2"> {/* Adjusted padding */}
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-primary pt-4">{pkg.price}</CardDescription>
                  </div>
                  {pkg.image && (
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-24 h-auto rounded-md object-cover ml-4 mt-2" // Adjusted size and margin
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow"> {/* Adjusted padding */}
                <ul className="space-y-4">
                  {pkg.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-left">
                      <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;