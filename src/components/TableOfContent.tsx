import { TOCProps } from "@/types/type";

export default function TOC({ headings }: TOCProps) {
  return (
    <div className="borde w-72 rounded-lg p-4">
      <ul className="list-none p-0">
        {headings.map((heading) => (
          <li
            key={heading.text}
            className={`mb-2 ${
              heading.level === 3 ? "ml-4 text-sm" : "text-base font-medium"
            }`}
          >
            <a
              href={`#${heading.text.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-blue-500 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
