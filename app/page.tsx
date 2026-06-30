import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pains from "@/components/Pains";
import Tiers from "@/components/Tiers";
import Proof from "@/components/Proof";
import Network from "@/components/Network";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pains />
        <Tiers />
        <Proof />
        <Network />
        <CTA />
      </main>
    </>
  );
}
