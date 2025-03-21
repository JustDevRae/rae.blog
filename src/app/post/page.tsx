import { getAllPostData, getAllUniqueTags } from "@/lib/parseMdx";
import SearchBar from "@/components/SearchBar";
import TagButton from "@/components/TagButton";
import PostListContainer from "@/components/PostListContainer";

export default function PostPage() {
  const posts = getAllPostData();
  const uniqueTagArray = getAllUniqueTags();

  return (
    <div>
      <SearchBar />
      <div className="flex gap-3">
        {uniqueTagArray.map((tag) => (
          <TagButton key={tag} tag={tag} />
        ))}
      </div>
      <PostListContainer posts={posts} />
    </div>
  );
}
