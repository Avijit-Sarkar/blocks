import Image from "next/image";
import { FC } from "react";

interface AboutCardProps {}

const AboutCard: FC<AboutCardProps> = ({}) => {
  return (
    <div>
      <figure className="md:flex items-center justify-center bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-60 md:h-auto md:rounded-md object-cover rounded-full mx-auto"
          src="/img/charlie.jpg"
          alt="profile image"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 md:px-16 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-base md:text-lg font-medium">
              “Tailwind CSS is the only framework that I’ve seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <div className="flex items-center lg:justify-end">
            <figcaption className=" font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default AboutCard;
