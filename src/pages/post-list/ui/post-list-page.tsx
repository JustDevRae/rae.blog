import { Suspense } from "react";
import SearchBar from "@/features/search-posts-by-keword/ui/search-bar";
import PostList from "@/widgets/post-list/ui/post-list";
import {
  extractUniqueTagsFromMDX,
  getAllPostMeta,
} from "@/entities/post/api/mdx";
import TagList from "@/widgets/tag-list/ui/tag-list";

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
