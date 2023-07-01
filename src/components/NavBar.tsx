"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      // Handle scroll logic for small screens (less than 768px width)

      if (window.scrollY >= 10) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handlescroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed -top-1 shadow inset-x-0 h-fit z-[50] py-2 ${
        fix
          ? "dark:bg-dark/50 bg-white text-dark dark:text-white transition-all duration-&lsqb;0.3s&rsqb; ease-in-out backdrop-blur-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container max-w-7xl h-full mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <Link
          href="/"
          className="flex title-font  font-bold items-center  mb-0"
        >
          <span className="ml-3 text-xl">Blocks</span>
        </Link>
        <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base font-semibold justify-center">
          <Link
            href={"/#about"}
            onClick={handleScroll}
            className="mr-5 hover:scale-110 dark:hover:text-white hover:text-dark"
          >
            About
          </Link>

          <Link
            href={"/#experience"}
            onClick={handleScroll}
            className="mr-5 hover:scale-110 dark:hover:text-white hover:text-dark"
          >
            Experience
          </Link>
          <Link
            href={""}
            className="mr-5 hover:scale-110 dark:hover:text-white hover:text-dark"
          >
            Works
          </Link>
          <Link
            href={""}
            className="mr-5 hover:scale-110 dark:hover:text-white hover:text-dark"
          >
            Contact Us
          </Link>
        </nav>
        <div className="inline-flex text-dark dark:text-white items-center mt-0 mr-2">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
