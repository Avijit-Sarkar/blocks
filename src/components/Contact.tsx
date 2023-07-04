import { FC } from "react";
import ContactSection from "./ContactSection";
import GradiantText from "./GradiantText";
import Footer from "./Footer";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section id="contact" className="min-h-screen flex flex-col">
      <div className="container max-w-7xl mx-auto flex-grow">
        <GradiantText
          text="Contact:"
          className="mt-[70px] md:mt-16 lg:mt-9"
          textSizes="!text-[4rem] md:!text-[8rem] lg:!text-[12rem]"
        />
        <main className="flex items-center pt-20 md:pt-12 lg:pt-32 text-black w-full min-h-[75vh] md:min-h-[90vh] lg:min-h-[65vh]  dark:text-white">
          <div className="w-full h-full inline-block  rounded-md pt-24 md:mt-24  lg:mt-40 lg:mb-24 p-2 xl:p-24 lg:p-16 md:p-12 sm:p-10">
            <h2 className="title-font text-slate-700 font-semibold dark:text-white tracking-[16px] uppercase text-2xl mb-3">
              Find Me On
            </h2>
            <ContactSection />
          </div>
        </main>
      </div>
      <hr className="border-t border-solid border-slate-400 dark:border-slate-700" />
      <Footer />
    </section>
  );
};

export default Contact;
