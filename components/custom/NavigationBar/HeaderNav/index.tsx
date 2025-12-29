import { Search } from "lucide-react";
import { headerNavLink } from "@/constants";
import Link from "next/link";
import { MobileSidebar } from "../../Sidebar";
import { client } from "@/sanity/lib/client";
import { GET_CATEGORIES } from "@/sanity/lib/queries";
import Logo from "@/components/icons/logo";
import HeaderNavLayout from "./layout";

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
          <Logo className={"sm:w-[150px] w-[100px] h-[50px]"} />
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
    </HeaderNavLayout>
  );
}
