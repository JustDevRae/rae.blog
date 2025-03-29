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
        "fixed left-1/2 top-0 z-50 w-full -translate-x-1/2",
        "flex h-[50px] transform items-center justify-around px-[100px]",
        "border-b font-semibold backdrop-blur-sm",
        "transition-transform duration-300",
        "mobile:justify-between mobile:px-[30px]",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {children}
    </header>
  );
}
