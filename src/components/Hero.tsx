import Image from "next/image";
import { FC } from "react";
import Banner from "./Banner";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section id="home" className="flex z-10 min-h-screen">
      <div className="w-full max-h-screen z-0 relative">
        <Image
          src="/img/pro-bg.webp"
          alt="Pro Background Image"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute dark:bg-dark/80 bg-dark/60 z-[3] w-full max-h-screen">
          <div className="container max-w-7xl mx-auto h-full">
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
