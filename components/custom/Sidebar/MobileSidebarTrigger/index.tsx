"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLink } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileSidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="font-bold" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SheetHeader className="p-0">
          <SheetTitle className="py-10 px-5">
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              alt="Logo"
              loading="eager"
            />
          </SheetTitle>
          <SheetDescription />
          <div className="grid gap-5">
            {navLink.map((nav) => (
              <SheetClose
                asChild
                key={nav.label}
                className={`${nav.url == pathname ? "bg-black text-white" : "bg-transparent text-black"} py-2 px-5 uppercase font-semibold text-sm`}
              >
                <Link href={nav.url}>{nav.label}</Link>
              </SheetClose>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
