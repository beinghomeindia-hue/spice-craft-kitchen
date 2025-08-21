import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecipeSection from "@/components/RecipeSection";
import SeasonalSection from "@/components/SeasonalSection";
import RecipeInspiration from "@/components/RecipeInspiration";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      <RecipeSection />
      <SeasonalSection />
      <RecipeInspiration />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
