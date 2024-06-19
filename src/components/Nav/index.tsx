"use client";
import { navList } from "@/utils/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@/app/globals.css";

export default function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {navList.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={
              "capitalize font-robotoSlab font-medium hover:text-blue transition-all"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
