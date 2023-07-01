import { FC } from "react";
import GradiantText from "./GradiantText";
import ExperienceCard from "./ExperienceCard";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section id="experience" className="min-h-screen">
      <div className="container max-w-7xl mx-auto  ">
        <GradiantText
          text="Experience"
          className="mt-[90px] md:mt-16 lg:mt-8"
          textSizes="!text-[3rem] md:!text-[7rem] lg:!text-[12rem]"
        />
        <main className="flex items-center pt-20 md:pt-12 lg:pt-32 text-black w-full min-h-screen dark:text-white">
          <div className="w-full h-full inline-block z-0  rounded-md pt-24 md:mt-24 lg:mt-[4rem] p-2 xl:p-24 lg:p-16 md:p-12 sm:p-10">
            <ExperienceCard />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Experience;
