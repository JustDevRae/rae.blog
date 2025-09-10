import { cn } from "@/shared/lib/utils/utils";
import { ReactNode } from "react";

type HeaderWrapperProps = {
  isVisible: boolean;
  children: ReactNode;
};

export function HeaderWrapper({ isVisible, children }: HeaderWrapperProps) {
  return (
    <header
      className={cn(
        "fixed left-1/2 top-0 z-50 w-full -translate-x-1/2",
        "flex h-[50px] transform items-center",
        "border-b font-semibold backdrop-blur-sm",
        "transition-transform duration-300",
        "desktop:justify-around desktop:px-[100px]",
        "tablet:justify-between tablet:px-[50px]",
        "mobile:justify-between mobile:px-[30px]",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {children}
    </header>
  );
}
