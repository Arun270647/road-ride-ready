import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import aboutHero from "@/assets/about-hero.jpg";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const contactNumbers = ["919994664334", "918925699334"];
    const contactMessage = `Hello Kanika Travels,

I'm interested in your services. Please find my details below:

*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}

*Message:* ${message}

Thank you.`;

    // On mobile, open the phone dialer for the first number
    if (isMobile) {
      window.location.href = `tel:${contactNumbers[0]}`;
    } else {
      // On desktop, open WhatsApp with both numbers
      const whatsappUrl = `https://wa.me/${contactNumbers[0]}?text=${encodeURIComponent(contactMessage)}&secondary_number=${contactNumbers[1]}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Kanika Travels – Book Your Cab Today</title>
        <meta
          name="description"
          content="Get in touch with Kanika Travels for cab bookings, airport transfers, and outstation rides. Fill our contact form or reach us via phone or email."
        />
        <meta
          name="keywords"
          content="Kanika Travels contact, cab booking Tirunelveli, Chennai cab rental contact, airport taxi inquiry"
        />
        <meta property="og:title" content="Contact Kanika Travels – Book Your Cab Today" />
        <meta
          property="og:description"
          content="Reach out to Kanika Travels for cab bookings, airport transfers, and outstation rides. Fill our contact form or contact us directly."
        />
        <meta property="og:image" content={aboutHero} />
      </Helmet>

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
                    <p className="text-muted-foreground">+91 99946 64334</p>
                    <p className="text-muted-foreground">+91 89256 99334</p>
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