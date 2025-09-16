import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01.",
      title: "Choose Your Vehicle",
      description: "Browse our diverse fleet and select the perfect car, van, or bus that fits your travel needs and budget."
    },
    {
      number: "02.",
      title: "Enter Your Details",
      description: "Fill out our simple booking form with your pickup/drop-off locations, date, and time to get an instant trip estimate."
    },
    {
      number: "03.",
      title: "Confirm & Travel",
      description: "Confirm your booking with us, and you're all set! Enjoy a safe and comfortable journey to your destination."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works?
          </h2>
          <p className="text-muted-foreground text-lg">
            Easy steps to get you started
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-none">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="text-primary font-semibold text-lg mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/listing" className="text-primary hover:underline font-semibold">
            Check out our fleet now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;