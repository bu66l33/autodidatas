import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Members from "@/components/Members";
import Tools from "@/components/Tools";
import Quote from "@/components/Quote";
import Filter from "@/components/Filter";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Manifesto />
      <Members />
      <Tools />
      <Quote />
      <Filter />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
