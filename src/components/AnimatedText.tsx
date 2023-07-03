import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const words = text.split(" ");

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <h1 className={`animated-text ${className}`}>
        {words.map((word, index) => (
          <span key={word + "-" + index} className="animated-word">
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
