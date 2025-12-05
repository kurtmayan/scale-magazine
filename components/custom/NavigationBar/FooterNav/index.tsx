import { footerNavLink } from "@/constants/Navigation";
import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FooterNav() {
  return (
    <div className=" w-full border-t-2 p-5 bg-background grid gap-5">
      <div className="grid gap-3">
        <Image src={"/logo.svg"} width={100} height={100} alt="Logo" />
        <div className="grid grid-cols-2 gap-2">
          {footerNavLink.map((nav) => (
            <Link href={nav.url} key={nav.label}>
              <p className="capitalize text-sm">{nav.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        <div className="flex justify-center gap-2">
          <Image
            src={"/instagram.svg"}
            width={30}
            height={30}
            alt="Instagram"
          />
          <Image src={"/linkedIn.svg"} width={30} height={30} alt="Linked In" />
          <Image src={"/facebook.svg"} width={30} height={30} alt="Facebook" />
        </div>
        <p className="text-center text-xs flex items-center gap-1 justify-center">
          <Copyright size={"12px"} /> 2025 Scale Magazine. All rights reserved.
        </p>
      </div>
    </div>
  );
}
