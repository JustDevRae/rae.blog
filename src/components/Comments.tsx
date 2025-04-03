"use client";

import Giscus from "@giscus/react";

export default function MyApp() {
  return (
    <section className="py-7">
      <Giscus
        id="comments"
        repo="JustDevRae/rae.blog"
        repoId="R_kgDONlUtkA"
        category="Comments"
        categoryId="DIC_kwDONlUtkM4CnNpT"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="ko"
      />
    </section>
  );
}
