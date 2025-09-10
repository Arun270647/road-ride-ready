import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="font-bold">Rent a car</span> is within
            <br />
            your finger tips.
          </h1>
          
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ferrari">Ferrari</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="lamborghini">Lamborghini</SelectItem>
                </SelectContent>
              </Select>
              
              <Input 
                type="date" 
                placeholder="Pick up"
                className="text-muted-foreground"
              />
              
              <Input 
                type="date" 
                placeholder="Drop off"
                className="text-muted-foreground"
              />
              
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Search Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;