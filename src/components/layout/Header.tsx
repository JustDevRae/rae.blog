"use client";

import { useShowAndHideHeader } from "@/hooks/useShowAndHideHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeDropdown from "../ThemeDropdown";
import Logo from "../Logo";
import ProgressBar from "../ProgressBar";

export default function Header() {
  const { visible } = useShowAndHideHeader();
  const pathname = usePathname();

  const isPostPage = pathname.startsWith("/post/");

  return (
    <header
      className={`fixed left-1/2 top-0 flex h-[50px] w-full -translate-x-1/2 transform items-center justify-around px-[100px] font-semibold backdrop-blur-sm transition-transform duration-300 mobile:justify-between mobile:px-[30px] ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Logo />
      <nav className="flex items-center gap-4">
        <Link href={{ pathname: "/post", query: { page: "1" } }}>Post</Link>

        <ThemeDropdown />
      </nav>
      {isPostPage && <ProgressBar />}
    </header>
  );
}
