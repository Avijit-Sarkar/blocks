import { FC } from "react";

interface WorkCardProps {}

const WorkCard: FC<WorkCardProps> = ({}) => {
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 bg-emerald-300 border-opacity-75 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-black font-bold title-font mb-2">
            Ramona Falls
          </h2>
          <p className="leading-relaxed text-base text-black">
            Fingerstache flexitarian street art 8-bit waist co, subway tile poke
            farm.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 bg-emerald-300  border-opacity-75 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-black font-bold title-font mb-2">
            Ramona Falls
          </h2>
          <p className="leading-relaxed text-base text-black">
            Fingerstache flexitarian street art 8-bit waist co, subway tile poke
            farm.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 bg-emerald-300  border-opacity-75 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-black font-bold title-font mb-2">
            Ramona Falls
          </h2>
          <p className="leading-relaxed text-base text-black">
            Fingerstache flexitarian street art 8-bit waist co, subway tile poke
            farm.
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
