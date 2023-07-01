import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <section className="flex z-10 min-h-screen bg-[url('/img/pro-bg.webp')] bg-no-repeat bg-cover bg-center w-full max-h-screen ">
        <div className="dark:bg-dark/80 bg-dark/60 w-full max-h-screen">
          <div className="container max-w-7xl mx-auto h-full ">
            <Banner />
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Works />
    </>
  );
}
