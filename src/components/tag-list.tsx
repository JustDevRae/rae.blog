import TagButton from "@/components/tag-button";

interface TagListProps {
  tagArray: string[];
}

export default function TagList({ tagArray }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {tagArray.map((tag) => (
        <li key={tag}>
          <TagButton tag={tag} />
        </li>
      ))}
    </ul>
  );
}
