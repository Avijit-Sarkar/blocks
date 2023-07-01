import { FC } from "react";
import WorkCard from "./WorkCard";
import GradiantText from "./GradiantText";

interface WorksProps {}

const Works: FC<WorksProps> = ({}) => {
  return (
    <section id="works" className="min-h-screen relative">
      <div className="container max-w-7xl mx-auto">
        <GradiantText text="Works" className="mt-[60px] md:mt-20 lg:mt-0" />
        <main className="flex items-center pt-20 md:pt-72 lg:pt-48 text-black w-full min-h-screen dark:text-white">
          <div className="w-full h-full rounded-md pt-24 md:pt-0 p-4 xl:p-24 lg:p-16 md:p-12 sm:p-10">
            <div className="flex flex-wrap  -m-4">
              <WorkCard />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Works;
