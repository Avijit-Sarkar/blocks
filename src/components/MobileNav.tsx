"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/Button";

const CustomMobileLink = ({ href, title, className = "", toggle }: any) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`${className} relative group text-white  my-2`}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fix, setFix] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="outline"
        className="flex-col px-2 ml-2 justify-center items-center self-center md:hidden flex "
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </Button>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[90vw] sm:flex md:hidden flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80 dark:bg-white/30  rounded-lg backdrop-blur-sm py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/#about"
              title="About"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/admin/dashboard"
              title="Dashboard"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </div>
  );
};

export default MobileNav;
