"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShowAndHideHeader } from "@/hooks/useShowAndHideHeader";
import ProgressBar from "@/features/track-scroll-progress/ui/progress-bar";
import ThemeDropdown from "@/features/toggle-theme/ui/theme-button";
import HeaderWrapper from "@/components/layout/header-wrapper";
import { EasterEggTrigger } from "@/features/trigger-easter-egg";
import { Logo } from "@/entities/brand";

export default function Header() {
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
        <ThemeDropdown />
      </nav>

      {isScrollAblePage && <ProgressBar />}
    </HeaderWrapper>
  );
}
