"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShowAndHideHeader } from "@/hooks/useShowAndHideHeader";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import ThemeDropdown from "@/components/ThemeDropdown";
import HeaderWrapper from "@/components/layout/header-wrapper";

export default function Header() {
  const pathname = usePathname();
  const isScrollAblePage = pathname.startsWith("/post/");
  const { visible } = useShowAndHideHeader();

  const showHeader = isScrollAblePage ? visible : true;

  return (
    <HeaderWrapper isVisible={showHeader}>
      <Logo />

      <nav className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <ThemeDropdown />
      </nav>

      {isScrollAblePage && <ProgressBar />}
    </HeaderWrapper>
  );
}
