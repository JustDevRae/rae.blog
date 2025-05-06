import { getAllPostMeta, extractUniqueTagsFromMDX } from "@/lib/mdx";
import SearchBar from "@/components/search-bar";
import TagList from "@/components/tag-list";
import PostListContainer from "@/components/post-list-container";
import { Suspense } from "react";

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
