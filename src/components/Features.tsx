import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam."
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam."
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam."
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam."
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam."
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features
          </h2>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <a href="#" className="text-primary hover:underline font-semibold text-sm">
                  Learn more
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;