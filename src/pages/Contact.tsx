import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import aboutHero from "@/assets/about-hero.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <nav className="text-lg">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Contact Us Or Use This Form To Rent A Car
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, 
              dolorum necessitatibus eius earum voluptates sed!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="First name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Last name"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email address"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Write your message"
                    className="min-h-32 resize-none"
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Address:</h4>
                    <p className="text-muted-foreground">
                      34 Street Name, City Name Here,<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone:</h4>
                    <p className="text-muted-foreground">+1 242 4942 290</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email:</h4>
                    <p className="text-muted-foreground">info@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;