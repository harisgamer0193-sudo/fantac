import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Collections from "@/components/sections/Collections";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Showroom from "@/components/sections/Showroom";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <Collections />
      <Craftsmanship />
      <Showroom />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
