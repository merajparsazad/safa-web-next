import { ReactNode } from "react";
import SideNavigation from "@/app/_components/SideNavigation";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid h-full grid-cols-[14rem_1fr] gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
