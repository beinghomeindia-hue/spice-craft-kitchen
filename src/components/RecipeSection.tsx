import recipeDishes from "@/assets/recipe-dishes.jpg";

const RecipeSection = () => {
  const recipes = [
    {
      name: "Biryani Pack",
      image: recipeDishes,
    },
    {
      name: "Paneer Butter Masala Pack", 
      image: recipeDishes,
    },
    {
      name: "Saag Paneer Pack",
      image: recipeDishes,
    },
    {
      name: "Dosa Pack",
      image: recipeDishes,
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Shop by Recipe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 transition-transform group-hover:scale-105">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {recipe.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;