import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="text-gray-800 dark:text-gray-400  body-font">
      <div className="container max-w-7xl bottom-0 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-dark dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Blocks</span>
        </a>
        <p className="text-sm text-gray-800 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 Blocks —
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={""} className="text-gray-500 dark:text-gray-400">
            <Facebook fill="currentColor" size={20} />
          </Link>
          <Link href={""} className="ml-3 text-gray-500 dark:text-gray-400">
            <Twitter fill="currentColor" size={20} />
          </Link>
          <Link href={""} className="ml-3 text-gray-500 dark:text-gray-400">
            <Instagram size={20} />
          </Link>
          <Link href={""} className="ml-3 text-gray-500 dark:text-gray-400">
            <LinkedinIcon size={20} />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
