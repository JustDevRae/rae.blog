"use client";

import { useMounted } from "@/shared/lib/hooks/useMounted";
import { cn } from "@/shared/lib/utils/utils";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const mounted = useMounted();
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPersent = (currentScrollPosition / height) * 100;

    setScrollTop(scrollPersent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed left-0 top-[50px]",
        "h-1 w-full",
        "block desktop:hidden",
      )}
    >
      <div
        className="h-1 bg-black dark:bg-white"
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  );
}
