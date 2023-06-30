import AnimatedText from "./AnimatedText";
function Banner() {
  return (
    <>
      <main className="flex items-center text-white w-full min-h-screen dark:text-light">
        <div className="w-full h-full inline-block z-0 bg-light  p-2 xl:p-24 lg:p-16 md:p-12 sm:p-8">
          {/* dark:bg-dark/70 */}
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className=" flex flex-col items-center self-center w-full md:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className=" !text-left xl:!text-5xl md:!text-center lg:!text-6xl md:!text-5xl !text-3xl"
              />
              <span className="hidden md:flex mt-5 mb-8 mx-auto h-0.5 w-20 bg-white"></span>
              <p className="my-4 text-base font-medium lg:px-5 ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Banner;
