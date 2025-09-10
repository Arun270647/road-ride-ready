import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01.",
      title: "Select a car",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!"
    },
    {
      number: "02.",
      title: "Fill up form",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!"
    },
    {
      number: "03.",
      title: "Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!"
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
          <a href="#" className="text-primary hover:underline font-semibold">
            Video how it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;