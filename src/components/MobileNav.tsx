"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/Button";
import { Link } from "react-scroll";

interface MobileNavProps {
  activeSection: string;
  handleSetActive: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  handleSetActive,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-2 inline-flex md:hidden"
          size="icon"
        >
          <AlignJustify className="h-[1.2rem] w-[1.2rem] " />
          <span className="sr-only">Navigation Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Navigation Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "about"
                ? "dark:text-white"
                : "dark:text-gray-300"
            }  mr-5 `}
          >
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "experience"
                ? "dark:text-white"
                : "dark:text-gray-300"
            }  mr-5 `}
          >
            Experience
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "works"
                ? "dark:text-white"
                : "dark:text-gray-300"
            }  mr-5 `}
          >
            Works
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "contact"
                ? "dark:text-white"
                : "dark:text-gray-300"
            }  mr-5 `}
          >
            Contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
