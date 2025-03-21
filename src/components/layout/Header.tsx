"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShowAndHideHeader } from "@/hooks/useShowAndHideHeader";
import { clsx } from "clsx";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import ThemeDropdown from "@/components/ThemeDropdown";

export default function Header() {
  const pathname = usePathname();
  const isScrollAblePage = pathname.startsWith("/post/");
  const { visible } = useShowAndHideHeader();

  const showHeader = isScrollAblePage ? visible : true;

  return (
    <header
      className={clsx(
        "fixed left-1/2 top-0 flex h-[50px] w-full -translate-x-1/2 transform items-center justify-around px-[100px] font-semibold backdrop-blur-sm transition-transform duration-300 mobile:justify-between mobile:px-[30px]",
        {
          "translate-y-0": showHeader,
          "-translate-y-full": !showHeader,
        },
      )}
    >
      <Logo />
      <nav className="flex items-center gap-4">
        <Link href="/post?page=1">Post</Link>
        <ThemeDropdown />
      </nav>
      {isScrollAblePage && <ProgressBar />}
    </header>
  );
}
