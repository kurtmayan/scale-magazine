"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function HeaderNavLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "w-full flex sm:justify-center justify-between gap-5 p-5 sm:items-end items-center border-b-2 border-gray-300 shadow-sm sticky top-0 z-50 bg-transparent ",
        pathname == "/about-us" ? "backdrop-blur-md text-white" : "bg-white",
      )}
    >
      {children}
    </div>
  );
}
