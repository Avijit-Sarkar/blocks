import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Dribbble,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = ({}) => {
  return (
    <div className="flex-grow z-10 flex flex-wrap justify-center  md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/3 w-full px-4 md:ml-4">
        <nav className="list-none mb-10 lg:mb-0 space-y-4">
          <li>
            <Link
              href={""}
              className="text-dark flex gap-2 text-lg font-semibold  dark:text-gray-400 dark:hover:text-white"
            >
              <Facebook fill="currentColor" />
              fb/example
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-dark flex gap-2 text-lg font-semibold  dark:text-gray-400 dark:hover:text-white"
            >
              <Twitter fill="currentColor" />
              @exampleLink
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-dark flex gap-2 text-lg font-semibold  dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin />
              in/example_link
            </Link>
          </li>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/3 w-full px-4 md:ml-4">
        <nav className="list-none mb-10 lg:mb-0 space-y-4">
          <li>
            <Link
              href={""}
              className="text-dark flex gap-2 text-lg font-semibold  dark:text-gray-400 dark:hover:text-white"
            >
              <Github fill="currentColor" />
              github/example
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-dark flex gap-2 text-lg font-semibold  dark:text-gray-400 dark:hover:text-white"
            >
              <Dribbble color="currentColor" />
              dribbble/example
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-dark flex gap-2 text-lg font-semibold  dark:text-gray-400 dark:hover:text-white"
            >
              <Youtube color="currentColor" /> youtube/example
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default ContactSection;
