import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, Calendar } from "lucide-react";

const SeasonalSection = () => {
  const seasonalItems = [
    {
      name: "Winter Warming Spices",
      description: "Cinnamon, cardamom, and black pepper blend perfect for cold days",
      badge: "Limited Edition",
      price: "$19.99",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      name: "Fresh Curry Leaves",
      description: "Just harvested curry leaves with intense aroma and flavor",
      badge: "Farm Fresh", 
      price: "$12.99",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      name: "Festival Special Kit",
      description: "Premium ingredients for traditional Diwali sweets and savories",
      badge: "Seasonal",
      price: "$45.99", 
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-brand-gold mr-3" />
            <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm">
              Seasonal Specials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Fresh & Seasonal Ingredients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our rotating selection of seasonal ingredients and limited-edition spice blends, 
            carefully sourced at peak freshness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {seasonalItems.map((item, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-premium transition-all duration-300 group border-0">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-green rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-secondary-foreground">
                    {item.icon}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                    {item.name}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-secondary">
                    {item.price}
                  </span>
                </div>

                <Button className="w-full bg-gradient-green text-secondary-foreground font-semibold shadow-green hover:shadow-lg transition-all">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-premium">
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Never Miss Seasonal Favorites
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our seasonal newsletter and get exclusive access to limited-edition ingredients and recipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-brand-gold"
            />
            <Button className="bg-gradient-green text-secondary-foreground font-semibold px-8 shadow-green">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;