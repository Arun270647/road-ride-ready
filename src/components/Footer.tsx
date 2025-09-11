import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12"> {/* Adjusted vertical padding */}
        <div className="flex flex-row justify-between items-start gap-2 md:gap-4"> {/* Reduced gap */}
          {/* About Section (Left-aligned) */}
          <div className="w-1/3 text-left">
            <h3 className="text-base font-bold text-foreground mb-2 leading-tight md:text-lg">Kanika Travels</h3> {/* Adjusted font size and line height */}
            <p className="text-xs text-muted-foreground leading-snug md:text-sm"> {/* Adjusted font size and line height */}
              Your trusted partner for cab services across Tamil Nadu.
            </p>
          </div>
          
          {/* Quick Links (Center-aligned) */}
          <div className="w-1/3 text-center">
            <h3 className="text-base font-semibold text-foreground mb-2 leading-tight md:text-lg">Quick Links</h3> {/* Adjusted font size and line height */}
            <ul className="space-y-1 text-xs md:text-sm"> {/* Reduced space between list items and font size */}
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/listing" className="text-muted-foreground hover:text-primary">Listing</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info (Right-aligned) */}
          <div className="w-1/3 text-right">
            <h3 className="text-base font-semibold text-foreground mb-2 leading-tight md:text-lg">Contact Info</h3> {/* Adjusted font size and line height */}
            <ul className="space-y-1 text-xs text-muted-foreground md:text-sm"> {/* Reduced space between list items and font size */}
              <li>Tirunelveli, Tamil Nadu, India</li>
              <li>+91 84389 96701</li>
              <li>contact@kanikatravels.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 border-t pt-4 md:pt-6 text-center text-xs md:text-sm text-muted-foreground"> {/* Adjusted padding and font size */}
          <p>&copy; {new Date().getFullYear()} Kanika Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;