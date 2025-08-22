import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Heart, BookOpen } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "San Francisco, CA",
      rating: 5,
      text: "The biryani kit was absolutely perfect! Every spice was perfectly measured and the recipe card made it so easy. My family couldn't believe I made it at home.",
      recipe: "Biryani Kit"
    },
    {
      name: "Raj Patel", 
      location: "Toronto, ON",
      rating: 5,
      text: "As someone who grew up with authentic Indian cooking, I'm impressed by the quality. The spices are so fresh and aromatic - just like my grandmother's.",
      recipe: "Butter Chicken"
    },
    {
      name: "Sarah Johnson",
      location: "London, UK", 
      rating: 5,
      text: "I've always been intimidated by Indian cooking, but these kits make it accessible. The instructions are clear and the results are restaurant-quality!",
      recipe: "Paneer Makhani"
    }
  ];

  const inspirations = [
    {
      title: "Weeknight Dal Recipe",
      time: "25 min",
      difficulty: "Easy",
      description: "A comforting lentil dish perfect for busy evenings"
    },
    {
      title: "Sunday Biryani Special", 
      time: "90 min",
      difficulty: "Medium",
      description: "Make weekend special with this fragrant rice dish"
    },
    {
      title: "Quick Curry Base",
      time: "15 min", 
      difficulty: "Easy",
      description: "Master base that transforms into multiple curries"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-brand-gold mr-3" />
            <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Home Chefs Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of home cooks creating authentic Indian meals with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-premium transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-gold fill-brand-gold" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-brand-gold mb-4" />

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{testimonial.location}</div>
                  <div className="text-xs px-2 py-1 rounded-full inline-block" style={{ backgroundColor: '#2D5033', color: 'white' }}>
                    {testimonial.recipe}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recipe Inspiration */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 mr-3" color="#2D5033" />
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                <span style={{ color: '#2D5033' }}>Recipe Inspiration</span>
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Weekly Recipe Ideas
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get inspired with these chef-curated recipes perfect for home cooking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {inspirations.map((recipe, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card">
                <h4 className="font-display font-semibold text-xl text-foreground mb-2">
                  {recipe.title}
                </h4>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <span>⏱️ {recipe.time}</span>
                  <span>👨‍🍳 {recipe.difficulty}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {recipe.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="font-semibold px-8 py-4 rounded-full text-white"
              style={{ backgroundColor: '#2D5033', border: 'none' }}
            >
              Join our foodie community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;