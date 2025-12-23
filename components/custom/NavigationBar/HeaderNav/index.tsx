import { Search } from "lucide-react";
import { headerNavLink } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { MobileSidebar } from "../../Sidebar";
import { client } from "@/sanity/lib/client";
import { GET_CATEGORIES } from "@/sanity/lib/queries";

export async function HeaderNav() {
  const categories = await client.fetch(GET_CATEGORIES);

  return (
    <div className="bg-background w-full flex sm:justify-center justify-between gap-5 p-5 sm:items-end items-center  border-b-2 border-gray-300 shadow-sm sticky top-0">
      <div>
        <div className="sm:hidden block">
          <MobileSidebar categories={categories} />
        </div>
      </div>
      <div className="grid gap-3">
        <div className="m-auto grid place-items-center">
          <Image
            src="/logo.svg"
            width={"100"}
            height={"100"}
            alt="appLogo"
            className="sm:w-[150px] w-[100px] h-[50px]"
            loading="eager"
          />
        </div>
        <div className="hidden sm:block">
          <div className="flex gap-10">
            {headerNavLink.map((nav) => (
              <Link key={nav.label} href={nav.url}>
                <p className="uppercase">{nav.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Search />
    </div>
  );
}
