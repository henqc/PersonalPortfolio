"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navList } from "@/utils/constants";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { use } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-blue" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <ScrollLink
            className="font-gambarino cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            HC
          </ScrollLink>
        </div>
        <nav className="flex flex-col justify-center items-center gap-4">
          {navList.map((link, index) => {
            return (
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                key={index}
                className={
                  "capitalize font-robotoSlab font-medium cursor-pointer hover:text-blue transition-all"
                }
              >
                {link.label}
              </ScrollLink>
            );
          })}
        </nav>
        <ScrollLink
          className="capitalize text-center font-robotoSlab font-medium cursor-pointer hover:text-blue transition-all"
          to="contact"
          smooth={true}
          duration={500}
        >
          Get in Contact
        </ScrollLink>
      </SheetContent>
    </Sheet>
  );
}
