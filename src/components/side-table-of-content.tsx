"use client";

import { TOCSection } from "@/types/type";
import { cn } from "@/lib/utils";
import { useTocScroll } from "@/hooks/useToScroll";

export default function SideTableOfContent({ toc }: { toc: TOCSection[] }) {
  const { currentSectionSlug } = useTocScroll(toc);

  return (
    <aside className="not-prose absolute left-full top-0 hidden h-full desktop:block">
      <div
        className={cn(
          "space-y-2.5 font-sans text-sm",
          "sticky top-[200px] z-10 ml-[50%] mt-[200px] w-[200px]",
        )}
      >
        <h4 className="text-lg font-semibold">On This Page</h4>
        <ul className="pl-4">
          {toc.map((section) => (
            <li key={section.text} className="mb-1 flex">
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
    </aside>
  );
}
