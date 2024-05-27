import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import SliderSection from "@/components/sections/SliderSection";
import NichesSection from "@/components/sections/NichesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import TextScroll from "@/components/sections/TextScroll";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between sticky z-20 ">
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <NichesSection />
      <SliderSection />
      <WhyUsSection />
      <PricingSection />
      <ContactSection />
      <TextScroll />
    </main>
  );
}
