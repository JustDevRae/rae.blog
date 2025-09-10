"use client";

import { cn } from "@/shared/lib/utils/utils";
import { TOCSection } from "@/entities/post";
import { useTocScroll } from "../lib/useToScroll";

export function TableOfContent({ toc }: { toc: TOCSection[] }) {
  const { currentSectionSlug } = useTocScroll(toc);
  return (
    <>
      {/* top-table-of-content */}
      <aside className="my-10 block border-b-2 desktop:hidden">
        <h4 className="text-2xl font-semibold">On This Page</h4>
        <ul className="ml-10 space-y-2 py-10 text-base font-medium text-gray-700 no-underline dark:text-zinc-400">
          {toc.map((section) => (
            <li key={section.text}>
              <a href={`#${section.slug}`}>{section.text}</a>
              {section.subSections.length > 0 && (
                <ul className="ml-4 mt-1 space-y-2">
                  {section.subSections.map((sub) => (
                    <li key={sub.text}>
                      <a href={`#${sub.slug}`}>{sub.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* side-table-of-content */}
      <aside className="not-prose absolute left-full top-0 hidden h-full desktop:block">
        <div
          className={cn(
            "space-y-2.5 font-sans text-sm",
            "sticky top-[200px] z-10 mt-[200px] w-[200px]",
          )}
        >
          <h4 className="text-lg font-semibold">On This Page</h4>
          <ul className="space-y-2 pl-4 text-base font-medium text-gray-700 no-underline dark:text-zinc-400">
            {toc.map((section) => (
              <li key={section.text}>
                <a
                  href={`#${section.slug}`}
                  className={cn(
                    currentSectionSlug === section.slug &&
                      "font-semibold text-black dark:text-white",
                  )}
                >
                  {section.text}
                </a>
                {section.subSections.length > 0 && (
                  <ul className="ml-4 mt-1 space-y-2 text-base font-medium text-gray-700 no-underline dark:text-zinc-400">
                    {section.subSections.map((sub) => (
                      <li key={sub.text}>
                        <a
                          href={`#${sub.slug}`}
                          className={cn(
                            currentSectionSlug === sub.slug &&
                              "font-semibold text-black dark:text-white",
                          )}
                        >
                          {sub.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
