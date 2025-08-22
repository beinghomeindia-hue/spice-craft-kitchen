import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBiryani from "@/assets/hero-biryani.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={heroBiryani} 
                alt="Authentic Indian biryani with fragrant basmati rice and spices"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              {/* Small bowls positioned around the main dish */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Cook Authentic
              <span className="block text-foreground">Indian Meals with</span>
              <span className="block" style={{ color: '#2D5033' }}>Fresh Ingredient</span>
              <span className="block text-foreground">Packs</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover convenient, healthy, and authentic recipes 
              for fusion-forward sourced, raw-led packs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="font-semibold px-8 py-4 text-lg rounded-full text-white"
                style={{ backgroundColor: '#2D5033' }}
              >
                Shop Packs
              </Button>
              <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8 py-4 text-lg rounded-full">
                Explore Recipes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;