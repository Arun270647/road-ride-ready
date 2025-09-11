import Header from "@/components/Header";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import carCompany from "@/assets/car-company.jpg";

const About = () => {
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
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <nav className="text-lg">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>About</span>
          </nav>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Welcome to Kanika Travels</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Founded by Venkat, Kanika Travels is your trusted partner for cab services across Tamil Nadu. Our mission is to make travel simple, affordable, and convenient, with a primary focus on major cities like Chennai, Coimbatore, Madurai, Tirunelveli (Nellai), and Trichy.
              </p>
              <p className="text-lg leading-relaxed">
                Our vision is to be the leading car rental service in the region, known for our diverse fleet and customer-centric approach. From small cars for city commutes to spacious XUVs for family adventures, we have a vehicle for every need. At Road Ride Ready, your next journey is just a call away.
              </p>
            </div>
            <div>
              <img 
                src={carCompany} 
                alt="Happy couple in car" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;