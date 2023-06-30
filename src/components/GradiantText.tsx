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
      className={`w-full mx-auto py-2 z-0 absolute flex justify-start items-start cursor-default select-none overflow-hidden sm:py-0 bg-gradient-to-t from-dark via-slate-800 to-slate-500 ${className}`}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <h1 className="inline-block items-start justify-start w-full font-bold capitalize text-[15rem]">
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
