import { getAllPostData, getAllUniqueTags } from "@/lib/parseMdx";
import SearchBar from "@/components/SearchBar";
import TagButton from "@/components/TagButton";
import PostListContainer from "@/components/PostListContainer";

import { Suspense } from "react";
import TagList from "@/components/TagList";

export default function PostPage() {
  const posts = getAllPostData();
  const uniqueTagArray = getAllUniqueTags();

  return (
    <div>
      <Suspense fallback={<div>검색창 로딩 중...</div>}>
        <SearchBar />
      </Suspense>

      <Suspense fallback={<div>태그 목록 로딩 중...</div>}>
        <TagList tagArray={uniqueTagArray} />
      </Suspense>

      <Suspense fallback={<div>게시글 목록 로딩 중...</div>}>
        <PostListContainer posts={posts} />
      </Suspense>
    </div>
  );
}
