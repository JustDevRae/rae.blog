"use client";

import { throttle } from "es-toolkit";
import { useEffect, useState } from "react";

import { TOCSection } from "@/types/type";
import { cn } from "@/lib/utils";

const useTocScroll = (tableOfContents: TOCSection[]) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<string>();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];
    let pageTop = 0;

    const onResize = () => {
      headings = Array.from(document.querySelectorAll<HTMLElement>("h2")).map(
        (element) => ({
          id: element.id,
          top: element.offsetTop,
        }),
      );

      pageTop = parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--page-top")
          .match(/[\d.]+/)?.[0] ?? "0",
      );
    };

    const onScroll = throttle(() => {
      if (!headings) return;

      let current: typeof currentSectionSlug;
      const top = window.scrollY + pageTop;
      const HEADING_OFFSET = 10;

      headings.forEach((heading) => {
        if (top >= heading.top - HEADING_OFFSET) {
          current = heading.id;
        }
      });

      setCurrentSectionSlug(current);
    }, 100);

    onResize();
    onScroll();

    window.addEventListener("scroll", onScroll, { capture: true });
    window.addEventListener("resize", onResize, { capture: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { currentSectionSlug };
};

export default function TableOfContent({
  toc,
  className,
  ...props
}: {
  toc: TOCSection[];
  className?: string;
}) {
  const { currentSectionSlug } = useTocScroll(toc);

  return (
    <div {...props} className={cn("space-y-2.5 font-sans text-sm", className)}>
      <h4 className="text-base font-semibold">On This Page</h4>
      <ul>
        {toc.map((section) => (
          <li key={section.text} className="flex">
            <a
              className={cn(
                "link text-base font-medium text-zinc-400 no-underline",
                currentSectionSlug === section.slug &&
                  "text-black dark:text-white",
              )}
              href={`#${section.slug}`}
            >
              {section.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
