"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderWrapper } from "@/shared/ui";
import { Logo } from "@/entities/brand";
import { EasterEggTrigger } from "@/features/trigger-easter-egg";
import { ThemeButton } from "@/features/toggle-theme";
import { ProgressBar } from "@/features/track-scroll-progress";
import { useShowAndHideHeader } from "../lib/useShowAndHideHeader";

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
