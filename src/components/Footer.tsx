import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/beinghome.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Spice Craft Kitchen Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Bringing authentic Indian flavors to your home kitchen with premium ingredient packs and traditional recipes.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-brand-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-brand-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-brand-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Shop All Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Seasonal Specials
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  About Our Spices
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Recipe Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-semibold text-lg text-primary-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg text-primary-foreground mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-gold" />
                <span className="text-primary-foreground/80">1-800-SPICE-RT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-gold" />
                <span className="text-primary-foreground/80">beinghomeindia@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold mt-1" />
                <span className="text-primary-foreground/80">
                  123 Spice Street<br />
                  Flavor Town, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Being Home Foods LLP. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-brand-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-brand-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;