import { Button } from "@/components/ui/button";
import recipeInspiration from "@/assets/recipe-inspiration.jpg";

const RecipeInspiration = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={recipeInspiration} 
                alt="Traditional Indian curry with spices and garnishes"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              {/* Decorative spice elements positioned around the dish */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">
                Recipe Inspiration
              </h2>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Sourced from Indian Farms
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We bring you the finest, authentic ingredients, 
                sourced directly from trusted Indian farms.
              </p>

              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-full">
                Join Our Foodie Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeInspiration;