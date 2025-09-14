import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchBar } from "@/features/search-posts-by-keword/ui/search-bar";
import { PostList } from "@/widgets/post-list/ui/post-list";
import {
  extractUniqueTagsFromMDX,
  getAllPostMeta,
} from "@/entities/post/api/mdx";
import { TagList } from "@/widgets/tag-list/ui/tag-list";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "프론트엔드 개발에 관해서 제가 공부하고 정리한 게시글을 확인할 수 있습니다.",
};

export default function PostListPage() {
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
      <PostList postArray={postArray} />
    </Suspense>
  );
}
