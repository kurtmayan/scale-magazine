"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        pathname === "/about-us"
          ? "max-sm:h-142.5 sm:h-100 bg-[url(/about-us-bg.png)] bg-black/90 bg-center"
          : "",
      )}
    >
      {children}
    </div>
  );
}
