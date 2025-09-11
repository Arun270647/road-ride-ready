import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foreground">
              Kanika Travels
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "transition-colors",
                pathname === "/" 
                  ? "text-foreground font-semibold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Home
            </Link>
            <Link 
              to="/listing" 
              className={cn(
                "transition-colors",
                pathname === "/listing" 
                  ? "text-foreground font-semibold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Listing
            </Link>
            <Link 
              to="/pricing" 
              className={cn(
                "transition-colors",
                pathname === "/pricing" 
                  ? "text-foreground font-semibold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "transition-colors",
                pathname === "/about" 
                  ? "text-foreground font-semibold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "transition-colors",
                pathname === "/contact" 
                  ? "text-foreground font-semibold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;