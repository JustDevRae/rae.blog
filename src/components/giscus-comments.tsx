"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function GiscusComments() {
  const giscusRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    const script = document.createElement("script");
    script.crossOrigin = "anonymous";
    script.async = true;

    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "justdevrae/rae.blog");
    script.setAttribute("data-repo-id", "R_kgDONlUtkA");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kwDONlUtkM4CnNpT");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-lang", "ko");

    if (giscusRef.current) {
      giscusRef.current.innerHTML = "";
      giscusRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame",
    );

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme,
          },
        },
      },
      "https://giscus.app",
    );
  }, [theme]);

  return <section ref={giscusRef} />;
}
