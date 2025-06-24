import { CallToAction } from "@/templates/LandingPage/Section/CallToAction";
import { CustomerStorySection } from "@/templates/LandingPage/Section/CustomerStorySection";
import { FeatureSection } from "@/templates/LandingPage/Section/FeatureSection";
import { HeroSection } from "@/templates/LandingPage/Section/HeroSection";
import { SupportSection } from "@/templates/LandingPage/Section/SupportSection";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
};
