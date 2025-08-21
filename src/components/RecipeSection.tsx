import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

const RecipeSection = () => {
  const recipes = [
    {
      name: "Butter Chicken",
      time: "45 mins",
      serves: "4",
      difficulty: "Easy",
      price: "$24.99",
      description: "Creamy tomato-based curry with tender chicken",
      ingredients: ["Garam Masala", "Tomato Base", "Cream", "Spices"]
    },
    {
      name: "Biryani Kit", 
      time: "60 mins",
      serves: "6",
      difficulty: "Medium", 
      price: "$32.99",
      description: "Fragrant basmati rice with aromatic spices",
      ingredients: ["Basmati Rice", "Saffron", "Biryani Masala", "Onions"]
    },
    {
      name: "Paneer Makhani",
      time: "30 mins", 
      serves: "4",
      difficulty: "Easy",
      price: "$22.99",
      description: "Rich and creamy cottage cheese curry",
      ingredients: ["Paneer", "Tomato Gravy", "Cashews", "Spices"]
    },
    {
      name: "Dosa & Sambar",
      time: "40 mins",
      serves: "4", 
      difficulty: "Medium",
      price: "$18.99",
      description: "South Indian crispy crepe with lentil curry",
      ingredients: ["Dosa Batter", "Sambar Mix", "Coconut", "Curry Leaves"]
    },
    {
      name: "Tandoori Chicken",
      time: "2 hours",
      serves: "4",
      difficulty: "Medium", 
      price: "$28.99",
      description: "Marinated chicken with authentic tandoori spices",
      ingredients: ["Tandoori Masala", "Yogurt", "Ginger-Garlic", "Lemon"]
    },
    {
      name: "Dal Tadka",
      time: "35 mins",
      serves: "4",
      difficulty: "Easy",
      price: "$16.99", 
      description: "Tempered lentils with aromatic spices",
      ingredients: ["Yellow Dal", "Cumin Seeds", "Turmeric", "Ghee"]
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Shop by Recipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our curated collection of authentic Indian recipes. Each kit includes 
            pre-measured ingredients and detailed cooking instructions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-premium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                    {recipe.name}
                  </h3>
                  <span className="text-2xl font-bold text-secondary bg-gradient-green px-3 py-1 rounded-full text-sm">
                    {recipe.price}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Serves {recipe.serves}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat className="h-4 w-4" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ingredient, i) => (
                      <span key={i} className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-green text-secondary-foreground font-semibold shadow-green hover:shadow-lg transition-all">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
            View All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;