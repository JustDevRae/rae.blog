"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderWrapper } from "@/shared/ui/layout/header-wrapper";
import { Logo } from "@/entities/brand/ui/logo";
import { EasterEggTrigger } from "@/features/trigger-easter-egg/ui/easter-egg-trigger";
import { ThemeButton } from "@/features/toggle-theme/ui/theme-button";
import { ProgressBar } from "@/features/track-scroll-progress/ui/progress-bar";
import { useShowAndHideHeader } from "../lib/hooks/useShowAndHideHeader";

export function Header() {
  const pathname = usePathname();
  const isScrollAblePage = pathname.startsWith("/post/");
  const { visible } = useShowAndHideHeader();

  const showHeader = isScrollAblePage ? visible : true;

  return (
    <HeaderWrapper isVisible={showHeader}>
      <EasterEggTrigger>
        <Logo />
      </EasterEggTrigger>

      <nav className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <ThemeButton />
      </nav>

      {isScrollAblePage && <ProgressBar />}
    </HeaderWrapper>
  );
}
