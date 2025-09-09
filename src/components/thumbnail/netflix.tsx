"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils/utils";
import Link from "next/link";

interface Stripe {
  id: number;
  left: number;
  width: number;
  color: string;
}

export default function NetflixBox() {
  const [stripes, setStripes] = useState<Stripe[]>([]);
  const counter = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const containerWidth = containerRef.current?.offsetWidth || 300;
      // eslint-disable-next-line no-plusplus
      const id = counter.current++;
      const width = 1 + Math.random() * 3;
      const left = Math.random() * containerWidth;
      const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

      const stripe: Stripe = { id, left, width, color };
      setStripes((prev) => [...prev, stripe]);

      setTimeout(() => {
        setStripes((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Link href="https://www.netflix.com/">
      <div
        ref={containerRef}
        className="group relative h-[300px] w-[300px] overflow-hidden rounded-xl border bg-neutral-900 shadow-lg"
      >
        {stripes.map((stripe) => (
          <div
            key={stripe.id}
            className="absolute top-0 z-0 h-full animate-stripe opacity-0 mix-blend-color-dodge"
            style={{
              left: `${stripe.left}px`,
              width: `${stripe.width}px`,
              backgroundColor: stripe.color,
            }}
          />
        ))}

        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-[150px] w-[90px] -translate-x-1/2 -translate-y-1/2",
            "transition delay-150 duration-300 ease-in-out group-hover:-translate-y-[52%] group-hover:scale-110",
          )}
        >
          <div className="absolute left-[55px] z-10 h-[150px] w-[35px] bg-[#b1060f]" />
          <div className="absolute left-0 z-20 h-[150px] w-[35px] bg-[#b1060f]" />
          <div className="absolute left-[27.5px] z-30 h-[150px] w-[35px] skew-x-[20deg] bg-[#e50913] shadow-[0_0_20px_-4px_black]" />
        </div>
      </div>
    </Link>
  );
}
