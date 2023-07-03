"use client";

import { useState, useLayoutEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useLayoutEffect(() => {
    const storedNavbarBg = localStorage.getItem("navbarBg");
    if (storedNavbarBg) {
      setNavbarBg(JSON.parse(storedNavbarBg));
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("navbarBg", JSON.stringify(navbarBg));
  }, [navbarBg]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <nav
      className={`fixed top-0  w-full shadow inset-x-0 h-fit z-[50] py-2 transition-colors duration-300 ease-in-out ${
        navbarBg
          ? "dark:bg-dark/50 bg-white text-dark dark:text-white  backdrop-blur-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container max-w-7xl h-full mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          onSetActive={handleSetActive}
          className={`${
            activeSection === "home"
          } cursor-pointer flex title-font  font-bold items-center  mb-0`}
        >
          <span className="ml-3 text-xl" aria-label="Home">
            BLOCKS
          </span>
        </Link>

        <div className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base font-semibold justify-center">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "about"
                ? "text-prime dark:text-white scale-110"
                : "dark:text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "experience"
                ? "text-prime dark:text-white scale-110"
                : "dark:text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "works"
                ? "text-prime dark:text-white scale-110"
                : "dark:text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
          >
            Works
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "contact"
                ? "text-prime dark:text-white scale-110"
                : "dark:text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
          >
            Contact Us
          </Link>
        </div>
        <div className="inline-flex text-dark dark:text-white items-center mt-0 mr-2">
          <ModeToggle />
          <MobileNav
            activeSection={activeSection}
            handleSetActive={handleSetActive}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
