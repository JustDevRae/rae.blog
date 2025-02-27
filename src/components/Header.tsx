"use client";

import { useShowAndHideHeader } from "@/hooks/useShowAndHideHeader";
import Link from "next/link";
import ThemeDropdown from "./ThemeDropdown";
import Logo from "./Logo";

export default function Header() {
  const { visible } = useShowAndHideHeader();

  return (
    <header
      className={`fixed left-1/2 top-0 flex h-[50px] w-full max-w-[1200px] -translate-x-1/2 transform items-center justify-around px-[30px] font-semibold transition-transform duration-300 mobile:justify-between ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/tag" className="hover:text-cyan-400">
          Tag
        </Link>
        <Link href="/aboutme" className="hover:text-cyan-400">
          About Me
        </Link>
        <ThemeDropdown />
      </div>
    </header>
  );
}
