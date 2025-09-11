"use client";

import { cn } from "@/shared/lib/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface TagButtonProps {
  uniqueTag: string;
}

export function TagButton({ uniqueTag }: TagButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTags = searchParams.get("tag")?.split(",") || [];
  const isSelected = currentTags.includes(uniqueTag);

  const handleTagClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    const updatedTags = currentTags.includes(uniqueTag)
      ? currentTags.filter((t) => t !== uniqueTag)
      : [...currentTags, uniqueTag];

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
      className={cn("rounded border px-3 py-2 text-sm font-medium", {
        "bg-zinc-700 text-white": isSelected,
        "": !isSelected,
      })}
    >
      {uniqueTag}
    </button>
  );
}
