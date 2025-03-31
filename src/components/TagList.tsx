import TagButton from "@/components/TagButton";

interface TagListProps {
  tagArray: string[];
}

export default function TagList({ tagArray }: TagListProps) {
  return (
    <ul className="flex gap-3">
      {tagArray.map((tag) => (
        <li key={tag}>
          <TagButton tag={tag} />
        </li>
      ))}
    </ul>
  );
}
