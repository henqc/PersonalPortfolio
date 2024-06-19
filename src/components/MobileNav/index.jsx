"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navList } from "@/utils/constants";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
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
          <Link className="font-gambarino" href="/">
            HC
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {navList.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={
                  "text-xl capitalize font-robotoSlab font-medium hover:text-blue transition-all"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
