"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Logo() {
  const [clickCount, setClickCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (clickCount > 0) {
      timer = setTimeout(() => setClickCount(0), 500);
    }
    return () => clearTimeout(timer);
  }, [clickCount]);

  // TODO: Needs refactoring
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      router.push("/easter-egg");
    } else if (newCount === 1) {
      setTimeout(() => {
        if (clickCount < 5) {
          router.push("/");
        }
      }, 500);
    }
  };

  return (
    <Link href="/" onClick={handleClick}>
      Rae.
    </Link>
  );
}
