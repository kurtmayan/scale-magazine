import LayoutShell from "@/components/custom/Layouts/LayoutShell";
import { FooterNav, HeaderNav } from "@/components/custom/NavigationBar";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutShell>
      <HeaderNav />
      <main>{children}</main>
      <FooterNav />
    </LayoutShell>
  );
}
