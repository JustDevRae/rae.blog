"use client";

import { useSearchParams } from "next/navigation";
import { PostListPagination } from "@/features/paginate-posts";
import { PostList } from "@/widgets/post-list";

interface Post {
  slug: string;
  postMetaData: {
    title: string;
    description: string;
    tags: string[];
    date: string;
  };
}

interface PostArrayProps {
  postArray: Post[];
}

export default function PostListContainer({ postArray }: PostArrayProps) {
  const searchParams = useSearchParams();

  const selectedTags = searchParams.get("tag")?.split(",") || [];
  const searchQuery = searchParams.get("q") || "";

  const currentPage = Number(searchParams.get("page")) || 1;
  const postsPerPage = 3;

  const filteredPostArray = postArray.filter((post) => {
    const matchesTag = selectedTags.length
      ? selectedTags.every((tag) => post.postMetaData.tags.includes(tag))
      : true;
    const matchesKeyword = searchQuery
      ? post.postMetaData.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      : true;

    return matchesTag && matchesKeyword;
  });

  const totalPages = Math.ceil(filteredPostArray.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPostArray.slice(startIndex, endIndex);

  return (
    <div>
      <PostList posts={paginatedPosts} />
      {totalPages > 0 && <PostListPagination totalPages={totalPages} />}
    </div>
  );
}
