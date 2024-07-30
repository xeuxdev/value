import { Header } from "./components/header";
import { About } from "./components/sections/about";
import { ArticlesSection } from "./components/sections/articles";
import { CTASection } from "./components/sections/cta";
import { Footer } from "./components/sections/footer";
import { HeroSection } from "./components/sections/hero";
import { PricingSection } from "./components/sections/pricing";
import { WhyUsSection } from "./components/sections/why-us";

export default function App() {
  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-14">
        <HeroSection />
        <About />
        <WhyUsSection />
        <ArticlesSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
