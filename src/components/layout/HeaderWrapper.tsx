import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type HeaderWrapperProps = {
  isVisible: boolean;
  children: ReactNode;
};

export default function HeaderWrapper({
  isVisible,
  children,
}: HeaderWrapperProps) {
  return (
    <header
      className={cn(
        "fixed left-1/2 top-0 z-50 flex h-[50px] w-full -translate-x-1/2 transform items-center justify-around border-b px-[100px] font-semibold backdrop-blur-sm transition-transform duration-300 mobile:justify-between mobile:px-[30px]",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {children}
    </header>
  );
}
