import Banner from "@/components/Banner";
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Experience = lazy(() => import("@/components/Experience"));
const Works = lazy(() => import("@/components/Works"));
import Image from "next/image";
import { Suspense, lazy } from "react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex z-10 min-h-screen bg-[url('/img/pro-bg.webp')] bg-no-repeat bg-cover bg-center w-full max-h-screen"
      >
        <Image
          src="/img/pro-bg.webp"
          alt="Pro Background Image"
          fill
          priority
          style={{ display: "none" }}
        />
        <div className="dark:bg-dark/80 bg-dark/60 w-full max-h-screen">
          <div className="container max-w-7xl mx-auto h-full ">
            <Banner />
          </div>
        </div>
      </section>
      <Suspense fallback>
        <About />
        <Experience />
        <Works />
        <Contact />
      </Suspense>
    </>
  );
}
