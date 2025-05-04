import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GameCardProps {
  href: string;
  title: string;
  children?: ReactNode;
}

export default function GameCard({ href, title, children }: GameCardProps) {
  return (
    <Link href={href}>
      <Card className={cn("group relative", "h-[300px] w-[300px]")}>
        <CardTitle
          className={cn(
            "text-lg font-semibold",
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "opacity-100 transition-opacity duration-500 group-hover:opacity-0",
          )}
        >
          {title}
        </CardTitle>
        <Button
          className={cn(
            "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
            "text-lg font-semibold",
            "px-6",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          )}
        >
          PlayNow →
        </Button>
        {children}
      </Card>
    </Link>
  );
}
