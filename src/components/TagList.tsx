import TagButton from "@/components/TagButton";

interface TagListProps {
  tagArray: string[];
}

export default function TagList({ tagArray }: TagListProps) {
  return (
    <div className="flex gap-3">
      {tagArray.map((tag) => (
        <TagButton key={tag} tag={tag} />
      ))}
    </div>
  );
}
