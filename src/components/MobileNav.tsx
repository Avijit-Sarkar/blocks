"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { Button } from "./ui/Button";
import { AlignJustify, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileNav = () => {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-2" size="icon">
          <AlignJustify className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Navigation Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link onClick={handleScroll} href="/#about">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link onClick={handleScroll} href="/#experience">
            Experience
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link onClick={handleScroll} href="/#works">
            Works
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link onClick={handleScroll} href="/#contact">
            Contact Us
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
