import HeroSection from "@/components/hero section/Hero";
import TrendingProducts from "@/components/trending products/TrendingProducts";
import CTASection from "@/components/CTA";
import CategorySection from "@/components/Categories";
import ReviewsSection from "@/components/Reviews";
import BannerSection from "@/components/Banner";
import WhatsAppCTA from "@/components/WhatsappCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingProducts />
      <CTASection />
      <CategorySection />
      <ReviewsSection />
      <BannerSection />
      <WhatsAppCTA />
    </>
  );
}
