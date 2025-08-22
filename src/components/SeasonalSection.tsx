import { Button } from "@/components/ui/button";

const SeasonalSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            This Month's Fresh Picks
          </h2>
          <p className="text-lg text-muted-foreground">
            Fresh Curry Leaves & Spice Blends
          </p>
        </div>

        <div className="mb-12">
          <Button
            className="font-semibold px-8 py-4 rounded-full text-white"
            style={{ backgroundColor: '#2D5033' }}
          >
            Shop Seasonal Ingredients
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;