import { FooterNav, HeaderNav } from "@/components/custom/NavigationBar";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderNav />
      <main>{children}</main>
      <FooterNav />
    </div>
  );
}
