import PostCard from "@/entities/post/ui/post-card";
import { AlertCircle } from "lucide-react";

interface Post {
  slug: string;
  postMetaData: {
    title: string;
    description: string;
    tags: string[];
    date: string;
  };
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="mt-6">
      <ul className="grid grid-cols-1 gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.slug}>
              <PostCard
                slug={post.slug}
                title={post.postMetaData.title}
                description={post.postMetaData.description}
                tags={post.postMetaData.tags}
                date={post.postMetaData.date}
              />
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
  );
}
