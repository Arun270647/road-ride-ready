import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import aboutHero from "@/assets/about-hero.jpg";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const contactNumber = "918438996701";
    
    if (isMobile) {
      // On mobile, open the phone dialer
      window.location.href = `tel:${contactNumber}`;
    } else {
      // On desktop, open WhatsApp
      const fullMessage = `
Hello Kanika Travels,

I'm interested in your services. Please find my details below:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}

Thank you.
`;
      const whatsappUrl = `https://wa.me/${contactNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappUrl, "_blank");
    }
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
              We're here to help you with your travel needs. Reach out to us for bookings and inquiries.
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
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Last name"
                      className="h-12"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    type="email" 
                    placeholder="Email address"
                    className="h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Phone number"
                    className="h-12"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Write your message"
                    className="min-h-32 resize-none"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Contact Us
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
                      Tirunelveli, Tamil Nadu,<br />
                      India
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone:</h4>
                    <p className="text-muted-foreground">+91 84389 96701</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email:</h4>
                    <p className="text-muted-foreground">contact@kanikatravels.com</p>
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