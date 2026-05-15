import type { Metadata } from "next";
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
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Vladana Stanković | KBT Psihoterapeut" },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
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
