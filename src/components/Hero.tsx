import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Vibrant Indian spices and fresh ingredients"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1 bg-brand-gold/20 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                <span className="text-sm font-medium text-brand-gold ml-2">
                  Trusted by 10k+ Home Chefs
                </span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Authentic Indian
              <span className="text-brand-gold block">Flavors at Home</span>
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Premium ingredient packs for traditional Indian recipes. Fresh spices, carefully curated ingredients, 
              and step-by-step guides delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-green text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-green hover:shadow-lg transition-all">
                Shop Recipe Packs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-primary-foreground/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-gold">500+</div>
                <div className="text-sm">Authentic Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-gold">24h</div>
                <div className="text-sm">Fresh Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-gold">100%</div>
                <div className="text-sm">Quality Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-premium">
                <div className="bg-primary p-6 rounded-xl mb-4">
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                    Featured This Week
                  </h3>
                  <p className="text-primary-foreground/80">Butter Chicken Masala Kit</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Fresh Garam Masala</span>
                    <span className="text-secondary">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tomato Base</span>
                    <span className="text-secondary">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Kashmiri Chili</span>
                    <span className="text-secondary">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Recipe Card</span>
                    <span className="text-secondary">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;