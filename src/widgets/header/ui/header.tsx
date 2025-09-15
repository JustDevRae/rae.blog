"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils/utils";
import Logo from "@/entities/brand/ui/logo";
import EasterEggTrigger from "@/features/trigger-easter-egg/ui/easter-egg-trigger";
import ThemeButton from "@/features/toggle-theme/ui/theme-button";
import ProgressBar from "@/features/track-scroll-progress/ui/progress-bar";
import { useShowAndHideHeader } from "../lib/hooks/useShowAndHideHeader";

export default function Header() {
  const pathname = usePathname();
  const isScrollAblePage = pathname.startsWith("/post/");
  const { visible } = useShowAndHideHeader();

  const showHeader = isScrollAblePage ? visible : true;

  return (
    <header
      className={cn(
        "fixed left-1/2 top-0 z-50 w-full -translate-x-1/2",
        "flex h-[50px] transform items-center",
        "border-b font-semibold backdrop-blur-sm",
        "transition-transform duration-300",
        "justify-between px-[30px]",
        "tablet:px-[50px]",
        "desktop:justify-around desktop:px-[100px]",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <EasterEggTrigger>
        <Logo />
      </EasterEggTrigger>

      <nav className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <ThemeButton />
      </nav>

      {isScrollAblePage && <ProgressBar />}
    </header>
  );
}
