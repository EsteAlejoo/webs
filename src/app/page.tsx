import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import QuickFeatures from "@/components/sections/QuickFeatures";
import ProfessionalDesigns from "@/components/sections/ProfessionalDesigns";
import CuttingEdge from "@/components/sections/CuttingEdge";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickFeatures />
        <ProfessionalDesigns />
        <CuttingEdge />
        <Experience />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
