"use client";

import { TOCSection } from "@/types/type";
import { cn } from "@/lib/utils";
import { useTocScroll } from "@/hooks/useToScroll";

export default function TableOfContent({
  toc,
  className,
}: {
  toc: TOCSection[];
  className?: string;
}) {
  const { currentSectionSlug } = useTocScroll(toc);

  return (
    <div className={cn("space-y-2.5 font-sans text-sm", className)}>
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
