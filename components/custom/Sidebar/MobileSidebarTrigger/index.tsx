"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerNavLink } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/sanity.types";

export function MobileSidebar(props: { categories: Array<Category> }) {
  const pathname = usePathname();

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
            {headerNavLink.map((nav, index) => {
              if (nav.hasChild) {
                return (
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    key={index}
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="py-2 px-5 uppercase font-semibold text-2xl font-alumni-sans">
                        {nav.label}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col">
                        {props.categories.map((e, index) => (
                          <SheetClose
                            key={index}
                            className={`${"/blog/" + e.tag == pathname ? "bg-black text-white" : "bg-transparent text-black"} py-2 px-6 uppercase font-semibold text-2xl font-alumni-sans text-left`}
                          >
                            <Link href={"/blog/" + e.tag}>{e.tag}</Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              return (
                <SheetClose
                  asChild
                  key={index}
                  className={`${nav.url == pathname ? "bg-black text-white" : "bg-transparent text-black"} py-2 px-5 uppercase font-semibold text-2xl font-alumni-sans`}
                >
                  <Link href={nav.url}>{nav.label}</Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
