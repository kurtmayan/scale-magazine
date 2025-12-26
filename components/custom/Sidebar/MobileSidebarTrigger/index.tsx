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
  const isIndustriesRoute = pathname.startsWith("/blog/");
  const isMoreRoute = pathname.startsWith("/more");

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
              if (nav.hasChild && nav.label === "industries") {
                return (
                  <Accordion
                    key={index}
                    type="single"
                    collapsible
                    defaultValue={isIndustriesRoute ? "industries" : undefined}
                    className="w-full rounded-none"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`
                          py-2 px-5 uppercase font-semibold text-2xl font-alumni-sans rounded-none justify-between items-center
                          ${isIndustriesRoute ? "bg-neutral-900 text-white" : "bg-white text-black"}
                        `}
                      >
                        {nav.label}
                      </AccordionTrigger>
                      <AccordionContent
                        className={`flex flex-col ${
                          isIndustriesRoute ? "bg-neutral-900" : "bg-white"
                        }`}
                      >
                        {props.categories.map((e, index) => (
                          <SheetClose
                            key={index}
                            className={`
                              py-2 px-6 uppercase font-semibold text-2xl font-alumni-sans text-left 
                              ${
                                isIndustriesRoute
                                  ? pathname === "/blog/" + e.tag
                                    ? "bg-[#1E1E1E] text-white"
                                    : "text-neutral-300 hover:bg-[#1E1E1E] hover:text-white "
                                  : "text-black"
                              }
                            `}
                          >
                            <Link href={"/blog/" + e.tag}>{e.tag}</Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              if (nav.hasChild && nav.label === "more") {
                return (
                  <Accordion
                    key={index}
                    type="single"
                    collapsible
                    defaultValue={isMoreRoute ? "more" : undefined}
                    className="w-full rounded-none"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`
                          py-2 px-5 uppercase font-semibold text-2xl font-alumni-sans rounded-none justify-between items-center
                          ${isMoreRoute ? "bg-neutral-900 text-white" : "bg-white text-black"}
                        `}
                      >
                        {nav.label}
                      </AccordionTrigger>
                      <AccordionContent
                        className={`flex flex-col ${
                          isMoreRoute ? "bg-neutral-900" : "bg-white"
                        }`}
                      >
                        {nav.child?.map((e, index) => (
                          <SheetClose
                            key={index}
                            className={`
                              py-2 px-6 uppercase font-semibold text-2xl font-alumni-sans text-left 
                              ${
                                isMoreRoute
                                  ? pathname === e.label
                                    ? "bg-[#1E1E1E] text-white"
                                    : "text-neutral-300 hover:bg-[#1E1E1E] hover:text-white "
                                  : "text-black"
                              }
                            `}
                          >
                            <Link href={e.url}>{e.label}</Link>
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
