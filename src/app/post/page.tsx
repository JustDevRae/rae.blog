import { getAllPostData, getAllUniqueTags } from "@/lib/parseMdx";
import PostList from "@/components/PostList";

export default function BlogPage() {
  const posts = getAllPostData();
  const availableTags = getAllUniqueTags();

  return <PostList posts={posts} availableTags={availableTags} />;
}
