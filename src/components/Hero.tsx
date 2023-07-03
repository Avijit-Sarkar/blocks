import Image from "next/image";
import { FC } from "react";
import Banner from "./Banner";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
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
  );
};

export default Hero;
