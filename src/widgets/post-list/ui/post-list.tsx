"use client";

import { useSearchParams } from "next/navigation";
import { PostListPagination } from "@/features/paginate-posts";
import { Post } from "@/entities/post";
import { TempPostCard } from "@/entities/post/client";
import { AlertCircle } from "lucide-react";

interface PostListProps {
  postArray: Post[];
}

export default function PostList({ postArray }: PostListProps) {
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
      <div className="mt-6">
        <ul className="grid grid-cols-1 gap-4">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <li key={post.slug}>
                <TempPostCard />
              </li>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-zinc-600">
              <AlertCircle className="h-10 w-10" />
              <p className="text-xl">게시글을 찾을 수 없습니다.</p>
            </div>
          )}
        </ul>
      </div>
      {totalPages > 0 && <PostListPagination totalPages={totalPages} />}
    </div>
  );
}
