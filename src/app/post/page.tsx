import { getAllPostMeta, getAllUniqueTags } from "@/lib/mdx";
import SearchBar from "@/components/SearchBar";
import PostListContainer from "@/components/PostListContainer";

import { Suspense } from "react";
import TagList from "@/components/TagList";

export default function PostPage() {
  const posts = getAllPostMeta();
  const uniqueTagArray = getAllUniqueTags();

  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center">
          게시글 페이지 로딩 중...
        </div>
      }
    >
      <SearchBar />
      <TagList tagArray={uniqueTagArray} />
      <PostListContainer posts={posts} />
    </Suspense>
  );
}
