import { getAllPostMeta, extractUniqueTagsFromMDX } from "@/lib/mdx";
import SearchBar from "@/components/search-bar";
import TagList from "@/components/tag-list";
import PostListContainer from "@/components/post-list-container";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rae | 게시글 목록",
  description:
    "프론트엔드 개발에 관해서 제가 공부하고 정리한 게시글을 확인할 수 있습니다.",
};

export default function PostPage() {
  const postArray = getAllPostMeta();
  const uniqueTagArray = extractUniqueTagsFromMDX();

  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center">
          게시글 페이지 로딩 중...
        </div>
      }
    >
      <SearchBar />
      <TagList uniqueTagArray={uniqueTagArray} />
      <PostListContainer postArray={postArray} />
    </Suspense>
  );
}
