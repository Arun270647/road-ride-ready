import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          {/* About Section */}
          <div className="max-w-xs">
            <h3 className="text-lg font-bold text-foreground mb-4">Kanika Travels</h3>
            <p className="text-muted-foreground">
              We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/listing" className="text-muted-foreground hover:text-primary">Listing</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>34 Street Name, City Name Here, United States</li>
              <li>+1 242 4942 290</li>
              <li>info@yourdomain.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CarRental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;