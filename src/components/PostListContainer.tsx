"use client";

import { useSearchParams } from "next/navigation";
import PostList from "@/components/PostList";
import CustomPagination from "./custom-pagination";

interface Post {
  slug: string;
  mdxMetaData: {
    title: string;
    description: string;
    tags: string[];
    date: string;
  };
}

interface PostListProps {
  posts: Post[];
}

export default function PostListContainer({ posts }: PostListProps) {
  const searchParams = useSearchParams();

  const selectedTags = searchParams.get("tag")?.split(",") || [];
  const searchQuery = searchParams.get("q") || "";

  const currentPage = Number(searchParams.get("page")) || 1;
  const postsPerPage = 3;

  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTags.length
      ? selectedTags.every((tag) => post.mdxMetaData.tags.includes(tag))
      : true;
    const matchesKeyword = searchQuery
      ? post.mdxMetaData.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesTag && matchesKeyword;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div>
      <PostList posts={paginatedPosts} />
      {totalPages > 0 && <CustomPagination totalPages={totalPages} />}
    </div>
  );
}
