"use client";
import React, { useRef, FC } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface ExperienceCardProps {}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl ">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-prime dark:text-primeDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-white/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const ExperienceCard: FC<ExperienceCardProps> = ({}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });
  return (
    <div ref={ref} className="mx-auto relative w-full">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute  top-0 w-[4px] h-full bg-prime origin-top dark:bg-primeDark md:w-[2px] md:left-[30px] left-[18px]"
      />
      <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
          position="Software Engineer"
          company="Google"
          companyLink="https://www.google.com"
          time="2023-Present"
          address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
        />
        <Details
          position="Software Engineer"
          company="Google"
          companyLink="https://www.google.com"
          time="2023-Present"
          address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
        />
        <Details
          position="Software Engineer"
          company="Google"
          companyLink="https://www.google.com"
          time="2023-Present"
          address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
        />
        <Details
          position="Software Engineer"
          company="Google"
          companyLink="https://www.google.com"
          time="2023-Present"
          address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
        />
        <Details
          position="Software Engineer"
          company="Google"
          companyLink="https://www.google.com"
          time="2023-Present"
          address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
        />
      </ul>
    </div>
  );
};

export default ExperienceCard;
