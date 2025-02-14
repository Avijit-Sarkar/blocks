"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
const LiIcon = ({ reference }: any) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="absolute left-0 stroke-black dark:stroke-white">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-prime dark:stroke-primeDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-slate-200 dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-prime dark:fill-primeDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
