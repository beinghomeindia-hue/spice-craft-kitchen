import recipeDishes from "@/assets/recipe-dishes.jpg";
import pongal from "@/assets/pongal.jpg";
import bisibele from "@/assets/bisibele.jpg";
import biryani from "@/assets/biryani.jpg";
import dalbati from "@/assets/dalbati.jpg";

const RecipeSection = () => {
  const recipes = [
    {
      name: "Biryani",
      image: biryani,
    },
    {
      name: "Bisi Bele Bath", 
      image: bisibele,
    },
    {
      name: "Ven Pongal",
      image: pongal,
    },
    {
      name: "Dal Baati Churma",
      image: dalbati,
    }
  ];

  return (
    <section id="recipes" className="py-20 scroll-mt-24" style={{ backgroundColor: '#0C1612' }}>
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
                <button
                  className="mt-4 px-6 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#2D5033' }}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;