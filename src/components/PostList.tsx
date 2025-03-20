"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/PostCard";

type PostData = {
  mdxMetaData: {
    title: string;
    description: string;
    tags: string[];
    date: string;
  };
  slug: string;
};

type PostListProps = {
  posts: PostData[];
  availableTags: string[];
};

export default function PostList({ posts, availableTags }: PostListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const applyFilter = (tags: string[], keyword: string) => {
    let filtered = posts;
    if (tags.length > 0) {
      filtered = filtered.filter((post) =>
        tags.every((tag) => post.mdxMetaData.tags?.includes(tag)),
      );
    }
    if (keyword.trim()) {
      filtered = filtered.filter(
        (post) =>
          post.mdxMetaData.title.includes(keyword) ||
          post.mdxMetaData.description.includes(keyword),
      );
    }
    setFilteredPosts(filtered);
  };

  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      const updatedTags = [...selectedTags, tag];
      setSelectedTags(updatedTags);
      applyFilter(updatedTags, searchKeyword);
    }
    setIsDropdownOpen(false);
  };

  const removeTag = (tag: string) => {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
    applyFilter(updatedTags, searchKeyword);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    applyFilter(selectedTags, searchKeyword);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mx-auto mt-6 w-full max-w-2xl">
      {/* 검색 바 */}
      <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-2 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center rounded-full bg-blue-500 px-2 py-1 text-white"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-2 text-sm"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <Input
          type="text"
          placeholder="검색어 입력..."
          value={searchKeyword}
          onChange={handleKeywordChange}
          onFocus={() => setIsDropdownOpen(true)}
          className="flex-1 border-none focus:ring-0"
        />
        <Button onClick={handleSearch}>검색</Button>
      </div>

      {/* 태그 드롭다운 */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 w-full rounded-md bg-white p-2 shadow-lg"
        >
          {availableTags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => handleTagSelect(tag)}
              className="block w-full px-3 py-2 text-left hover:bg-blue-200 dark:text-black"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* 게시글 리스트 */}
      <div className="mt-6">
        <ul className="grid grid-cols-1 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.slug}>
                <PostCard
                  slug={post.slug}
                  title={post.mdxMetaData.title}
                  description={post.mdxMetaData.description}
                  tags={post.mdxMetaData.tags}
                  date={post.mdxMetaData.date}
                />
              </li>
            ))
          ) : (
            <p className="text-gray-500">검색된 게시글이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
