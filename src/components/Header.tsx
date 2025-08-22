import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import logo from "@/assets/beinghome.jpg";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-background text-foreground border-b border-border fixed top-0 left-0 w-full z-50">
  <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Spice Craft Kitchen Logo"
              className="h-16 w-auto object-contain p-0 m-0 md:h-20"
              style={{ maxWidth: "100%" }}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-secondary transition-colors font-medium text-foreground">
              Home
            </a>
            <a
              href="#recipes"
              className="hover:text-secondary transition-colors font-medium text-foreground"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById("recipes");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
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
            {/* Mobile Drawer Trigger */}
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="fixed inset-y-0 right-0 top-0 h-full w-64 rounded-none border-l bg-background flex flex-col p-6">
                <nav className="flex flex-col items-start space-y-6 mt-8">
                  <button
                    className="hover:text-secondary transition-colors font-medium text-foreground text-lg text-left cursor-pointer bg-transparent border-none p-0 focus:outline-none active:text-secondary"
                    style={{ appearance: "none" }}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById("top-section");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }, 300);
                    }}
                  >
                    Home
                  </button>
                  <button
                    className="hover:text-secondary transition-colors font-medium text-foreground text-lg text-left cursor-pointer bg-transparent border-none p-0 focus:outline-none active:text-secondary"
                    style={{ appearance: "none" }}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById("recipes");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 300);
                    }}
                  >
                    Shop by Recipe
                  </button>
                  <Link to="/ingredients" className="hover:text-secondary transition-colors font-medium text-foreground text-lg" onClick={() => setOpen(false)}>
                    Ingredients
                  </Link>
                  <Link to="/about" className="hover:text-secondary transition-colors font-medium text-foreground text-lg" onClick={() => setOpen(false)}>
                    About
                  </Link>
                </nav>
                <DrawerClose asChild>
                  <Button variant="outline" className="mt-auto w-full">Close</Button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;