import { getAllPostData, getAllUniqueTags } from "@/lib/parseMdx";
import SearchBar from "@/components/SearchBar";
import PostListContainer from "@/components/PostListContainer";

import { Suspense } from "react";
import TagList from "@/components/TagList";

export default function PostPage() {
  const posts = getAllPostData();
  const uniqueTagArray = getAllUniqueTags();

  return (
    <Suspense fallback={<div>게시글 페이지 로딩 중...</div>}>
      <SearchBar />
      <TagList tagArray={uniqueTagArray} />
      <PostListContainer posts={posts} />
    </Suspense>
  );
}
