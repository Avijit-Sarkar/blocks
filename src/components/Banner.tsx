"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import AnimatedText from "./AnimatedText";
import {
  ExternalLink,
  Facebook,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import Link from "next/link";

function Banner() {
  return (
    <>
      <main className="flex items-center text-white w-full min-h-screen dark:text-light">
        <div className="w-full h-full inline-block z-0 bg-white/10 rounded-md dark:bg-black/40 p-8 xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="flex flex-col items-center self-center w-full md:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-left xl:!text-5xl md:!text-center lg:!text-6xl md:!text-5xl !text-3xl"
              />
              <span className="hidden md:flex mt-5 mb-8 mx-auto h-0.5 w-20 bg-blue-700"></span>
              <p className="my-4 text-base font-medium lg:px-5">
                “Tailwind CSS is the only framework that I’ve seen scale on
                large teams.”
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "text-dark dark:text-white cursor-pointer hover:bg-dark dark:hover:bg-white hover:text-white dark:hover:text-dark font-semibold"
                  )}
                >
                  Get In Touch
                  <ExternalLink className="w-6 ml-1" />
                  <span className="sr-only">Contact Us</span>
                </ScrollLink>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <Link
                    href={""}
                    className="md:ml-3 text-gray-300 hover:scale-110"
                  >
                    <Facebook
                      fill="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  </Link>
                  <Link
                    href={""}
                    className="ml-3 text-gray-300 hover:scale-110"
                  >
                    <Twitter
                      fill="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 "
                    />
                  </Link>
                  <Link
                    href={""}
                    className="ml-3 text-gray-300 hover:scale-110"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href={""}
                    className="ml-3 text-gray-300 hover:scale-110"
                  >
                    <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Banner;
