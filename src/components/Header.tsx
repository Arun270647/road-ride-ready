import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/listing", label: "Listing" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foreground">
              Kanika Travels
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className={cn(
                  "transition-colors",
                  pathname === link.to 
                    ? "text-foreground font-semibold" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        className={cn(
                          "text-lg transition-colors",
                           pathname === link.to
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;