import { Search } from "lucide-react";
import { headerNavLink } from "@/constants";
import Link from "next/link";
import { MobileSidebar } from "../../Sidebar";
import { client } from "@/sanity/lib/client";
import { GET_CATEGORIES } from "@/sanity/lib/queries";
import Logo from "@/components/icons/logo";
import HeaderNavLayout from "../../Layouts/HeaderNavLayout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlumniSans } from "@/components/custom/Typography";

export async function HeaderNav() {
  const categories = await client.fetch(GET_CATEGORIES);

  return (
    <HeaderNavLayout>
      <div>
        <div className="sm:hidden block">
          <MobileSidebar categories={categories} />
        </div>
      </div>
      <div className="grid gap-3">
        <div className="m-auto grid place-items-center">
          <Logo className={"sm:w-37.5 w-25 h-12.5"} />
        </div>
        <div className="hidden sm:block">
          <div className="flex gap-10">
            {headerNavLink.map((nav, index) => {
              if (nav.hasChild && nav.label == "industries") {
                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <AlumniSans className="uppercase font-medium sm:text-[28px]">
                        {nav.label}
                      </AlumniSans>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-7 border border-[#111111]/50 rounded-none mt-4.5">
                      {categories.map((e, index) => (
                        <Link key={index} href={"/blog/" + e.tag}>
                          <AlumniSans className=" uppercase text-[32px] font-medium text-[#111111]">
                            {e.tag}
                          </AlumniSans>
                        </Link>
                      ))}
                    </PopoverContent>
                  </Popover>
                );
              }

              if (nav.label == "more") {
                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <AlumniSans className="uppercase font-medium sm:text-[28px]">
                        {nav.label}
                      </AlumniSans>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-7 border border-[#111111]/50 rounded-none mt-4.5">
                      {nav.child?.map((e) => (
                        <Link key={index} href={e.url}>
                          <AlumniSans className=" uppercase text-[32px] font-medium text-[#111111]">
                            {e.label}
                          </AlumniSans>
                        </Link>
                      ))}
                    </PopoverContent>
                  </Popover>
                );
              }

              return (
                <Link key={index} href={nav.url}>
                  <AlumniSans className="uppercase font-medium sm:text-[28px]">
                    {nav.label}
                  </AlumniSans>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Search className="sm:hidden" />
    </HeaderNavLayout>
  );
}
