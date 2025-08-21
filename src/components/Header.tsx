import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-premium">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-primary p-3 rounded-lg">
              <h1 className="font-display font-bold text-2xl text-brand-gold">
                Spice Route Co.
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-brand-gold transition-colors font-medium">
              Home
            </a>
            <a href="#recipes" className="hover:text-brand-gold transition-colors font-medium">
              Shop by Recipe
            </a>
            <a href="#ingredients" className="hover:text-brand-gold transition-colors font-medium">
              Ingredients
            </a>
            <a href="#about" className="hover:text-brand-gold transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-brand-gold">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="sm" className="bg-gradient-green text-secondary-foreground font-medium shadow-green">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;