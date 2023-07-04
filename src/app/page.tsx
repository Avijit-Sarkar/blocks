import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"));
const Contact = dynamic(() => import("@/components/Contact"));
const Experience = dynamic(() => import("@/components/Experience"));
const Works = dynamic(() => import("@/components/Works"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Contact />
    </>
  );
}
