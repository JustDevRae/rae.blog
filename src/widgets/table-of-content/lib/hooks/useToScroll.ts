import { TOCSection } from "@/entities/post/model/type";
import { throttle } from "es-toolkit";
import { useEffect, useState } from "react";

export const useTocScroll = (tableOfContents: TOCSection[]) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<string>();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];

    const onResize = () => {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>("h2, h3"),
      ).map((element) => ({
        id: element.id,
        top: element.offsetTop,
      }));
    };

    const onScroll = throttle(() => {
      if (!headings) return;

      let current: typeof currentSectionSlug;

      headings.forEach((heading) => {
        if (window.scrollY >= heading.top) {
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
