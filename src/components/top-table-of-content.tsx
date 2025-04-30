import { TOCSection } from "@/types/type";

export default function TopTableOfContent({ toc }: { toc: TOCSection[] }) {
  return (
    <aside className="block desktop:hidden">
      <h4 className="text-lg font-semibold">On This Page</h4>
      <ul>
        {toc.map((section) => (
          <li key={section.text}>
            <a
              className="text-base font-medium text-zinc-400 no-underline"
              href={`#${section.slug}`}
            >
              {section.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
