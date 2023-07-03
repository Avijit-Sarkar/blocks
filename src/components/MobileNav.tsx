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
              activeSection === "about" ? "text-white" : "text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
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
              activeSection === "experience" ? "text-white" : "text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
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
              activeSection === "works" ? "text-white" : "text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
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
              activeSection === "contact" ? "text-white" : "text-gray-300"
            } cursor-pointer mr-5 hover:scale-110`}
          >
            Contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
