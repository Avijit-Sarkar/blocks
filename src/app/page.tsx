import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Works from "@/components/Works";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Works />
    </>
  );
}
