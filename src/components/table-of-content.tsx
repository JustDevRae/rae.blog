"use client";

import { TOCSection } from "@/lib/toc";
import { cn } from "@/lib/utils";

export default function TableOfContent({ toc }: { toc: TOCSection[] }) {
  return (
    <>
      {/* top-table-of-content */}
      <aside className="my-10 block border-b-2 desktop:hidden">
        <h4 className="text-2xl font-semibold">On This Page</h4>
        <ul className="ml-10 space-y-3 py-10">
          {toc.map((section) => (
            <li key={section.text}>
              <a
                className="text-base font-medium text-zinc-400 no-underline"
                href={`#${section.slug}`}
              >
                {section.text}
              </a>
              {section.subSections.length > 0 && (
                <ul className="ml-6 mt-3 space-y-2">
                  {section.subSections.map((sub) => (
                    <li key={sub.text}>
                      <a
                        className="text-sm text-zinc-400 no-underline"
                        href={`#${sub.slug}`}
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
      </aside>

      {/* side-table-of-content */}
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
              <li key={section.text} className="mb-1">
                <a className="text-zinc-400" href={`#${section.slug}`}>
                  {section.text}
                </a>
                {section.subSections.length > 0 && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {section.subSections.map((sub) => (
                      <li key={sub.text}>
                        <a className="text-zinc-400" href={`#${sub.slug}`}>
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
