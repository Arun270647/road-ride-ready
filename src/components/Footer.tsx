import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-row justify-between items-start gap-4">
          {/* About Section (Left-aligned) */}
          <div className="w-1/3 text-left">
            <h3 className="text-lg font-bold text-foreground mb-4">Kanika Travels</h3>
            <p className="text-muted-foreground">
              Your trusted partner for cab services across Tamil Nadu. We have the perfect car to meet your needs.
            </p>
          </div>
          
          {/* Quick Links (Center-aligned) */}
          <div className="w-1/3 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/listing" className="text-muted-foreground hover:text-primary">Listing</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info (Right-aligned) */}
          <div className="w-1/3 text-right">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tirunelveli, Tamil Nadu, India</li>
              <li>+91 99946 64334</li>
              <li>contact@kanikatravels.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kanika Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;