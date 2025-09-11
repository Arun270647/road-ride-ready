import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      title: "Small Vehicle - Local",
      price: "₹1500",
      description: "Minimum 5-hour package with up to 50km coverage, perfect for city commutes.",
    },
    {
      title: "XUV - Explorer",
      price: "₹2300",
      description: "5-hour package with up to 50km coverage, ideal for family outings.",
    },
    {
      title: "Van & Tempo - Group Travel",
      price: "Custom",
      description: "Flexible pricing based on your rental duration and needs. Perfect for large groups.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
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
            <Card 
              key={index} 
              className="flex flex-col border-0 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-primary mb-4">{pkg.price}</p>
                <p className="text-muted-foreground">
                  {pkg.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/pricing" className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;