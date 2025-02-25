"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Logo() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<number | null>(null);
  const router = useRouter();

  return (
    <Link
      href="/"
      className="hover:text-cyan-400"
      onClick={(e) => {
        e.preventDefault();
        const now = Date.now();

        if (lastClickTime && now - lastClickTime > 1000) {
          setClickCount(1);
        } else {
          setClickCount((prev) => prev + 1);
        }

        setLastClickTime(now);

        if (clickCount + 1 === 10) {
          router.push("/easter-egg");
        }
      }}
    >
      Rae.
    </Link>
  );
}
