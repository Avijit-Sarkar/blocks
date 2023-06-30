import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
