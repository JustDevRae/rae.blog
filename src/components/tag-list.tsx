import { TagButton } from "@/features/filter-tag";

interface UniqueTagListProps {
  uniqueTagArray: string[];
}

export default function TagList({ uniqueTagArray }: UniqueTagListProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {uniqueTagArray.map((uniqueTag) => (
        <li key={uniqueTag}>
          <TagButton uniqueTag={uniqueTag} />
        </li>
      ))}
    </ul>
  );
}
