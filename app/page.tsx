import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorksWith from "@/components/WorksWith";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Line from "@/components/Line";

export const metadata = {
  title: "Vladana Stanković | KBT Psihoterapeut",
  description:
    "Psihološka podrška — prostor za razumevanje sebe, emocija i odnosa. Online individualne seanse, zajednica mama i radionice asertivne komunikacije.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorksWith />
        <Services />
        <Quote />
        <HowItWorks />
        <Faq />
        <Line />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
