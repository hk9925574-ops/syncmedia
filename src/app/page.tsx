import Navbar from "@/components/navbar/Navbar";
import HeroScene from "@/components/hero/HeroScene";
import HeroContent from "@/components/hero/HeroContent";
import Capabilities from "@/components/sections/Capabilities";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative w-screen bg-black">
      <Navbar />

      <section className="relative h-screen w-screen overflow-hidden">
        <HeroScene />
        <HeroContent />
      </section>

      <Capabilities />
      <Work />
      <CTA />
    </main>
  );
}
