"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

interface TagButtonProps {
  tag: string;
}

export default function TagButton({ tag }: TagButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTags = searchParams.get("tag")?.split(",") || [];
  const isSelected = currentTags.includes(tag);

  const handleTagClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];

    if (updatedTags.length) {
      params.set("tag", updatedTags.join(","));
    } else {
      params.delete("tag");
    }

    params.set("page", "1");

    router.push(`?${decodeURIComponent(params.toString())}`);
  };

  return (
    <button
      type="button"
      onClick={handleTagClick}
      className={clsx("rounded border px-3 py-2 text-sm font-medium", {
        "border-blue-500 bg-blue-500 text-white": isSelected,
        "border-gray-300 bg-white text-black": !isSelected,
      })}
    >
      {tag}
    </button>
  );
}
