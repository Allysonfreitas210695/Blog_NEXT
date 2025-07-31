import { CallToAction } from "@/templates/landingPage/section/call-to-action";
import { CustomerStorySection } from "@/templates/landingPage/section/customer-story-section";
import { FeatureSection } from "@/templates/landingPage/section/feature-section";
import { HeroSection } from "@/templates/landingPage/section/hero-section";
import { SupportSection } from "@/templates/landingPage/section/support-section";

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
