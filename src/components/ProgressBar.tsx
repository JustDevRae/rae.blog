"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed left-0 top-[50px] h-1 w-full">
      <div className="h-1 bg-sky-400" style={{ width: `${scrollTop}%` }} />
    </div>
  );
}
