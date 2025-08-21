import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background text-foreground border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3">
              <h1 className="font-display font-bold text-2xl text-foreground">
                Spice Route Co.
              </h1>
            </div>
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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-secondary">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium">
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