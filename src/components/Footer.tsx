import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-row justify-between items-start gap-4">
        <div className="mt-8 border-t pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kanika Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
