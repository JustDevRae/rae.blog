"use client";

import { useSearchParams } from "next/navigation";
import PostListPagination from "@/features/paginate-posts/ui/post-list-pagination";
import { Post } from "@/entities/post/model/type";
import { PostList } from "@/widgets/post-list/ui/post-list";

interface PostListContainerProps {
  postArray: Post[];
}

export function PostListContainer({ postArray }: PostListContainerProps) {
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
