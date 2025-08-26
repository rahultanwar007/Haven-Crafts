import AboutUsSection from "@/components/AboutUsSection";
import ContactInfoCTA from "@/components/ContactInfoCTA";
import FeaturedProductsSection from "@/components/featured products/FeaturedProducts";
import FeaturedProductsCarousel from "@/components/featured products/FeaturedProductsCarousel";
import HeroSection from "@/components/HeroSection";
import TopCategoriesSection from "@/components/TopCategories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <FeaturedProductsCarousel />
      <TopCategoriesSection />
      <AboutUsSection />
      <ContactInfoCTA />
    </>
  );
}
