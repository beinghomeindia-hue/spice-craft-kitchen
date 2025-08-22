import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import logo from "@/assets/beinghome.jpg";

const Header = () => {
  return (
    <header className="bg-background text-foreground border-b border-border">
  <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Spice Craft Kitchen Logo"
              className="h-20 w-auto object-contain p-0 m-0"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-secondary transition-colors font-medium text-foreground">
              Home
            </a>
            <a href="#recipes" className="hover:text-secondary transition-colors font-medium text-foreground">
              Shop by Recipe
            </a>
            <a href="#ingredients" className="hover:text-secondary transition-colors font-medium text-foreground">
              Ingredients
            </a>
            <a href="#about" className="hover:text-secondary transition-colors font-medium text-foreground">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-secondary">
              <Search className="h-5 w-5" />
            </Button>
              <Button className="font-medium text-white" style={{ backgroundColor: '#2D5033' }}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;