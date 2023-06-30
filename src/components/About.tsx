import { FC } from "react";
import AboutCard from "./AboutCard";
import GradiantText from "./GradiantText";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section id="about" className="min-h-screen">
      <GradiantText text="About" className="" />
      <div className="container max-w-7xl mx-auto h-full ">
        <main className="flex items-center pt-20 md:pt-12 lg:pt-32 text-black w-full min-h-screen dark:text-white">
          <div className="w-full h-full inline-block z-0  rounded-md pt-24 md:pt-0 p-4 xl:p-24 lg:p-16 md:p-12 sm:p-10">
            <AboutCard />
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;
