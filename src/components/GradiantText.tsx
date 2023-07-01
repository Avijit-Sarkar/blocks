import React from "react";

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto py-2 z-0 absolute flex justify-start items-start cursor-default select-none overflow-hidden bg-gradient-to-t dark:from-dark dark:via-slate-800 dark:to-slate-500 from-slate-100 via-slate-400/70 to-slate-700 ${className}`}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <h1 className="inline-block items-start justify-start font-bold capitalize text-[90px] md:text-[10rem] lg:text-[15rem]">
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index} className="inline-block">
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default GradientText;
