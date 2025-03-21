import PostCard from "@/components/PostCard";

interface Post {
  slug: string;
  mdxMetaData: {
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
                title={post.mdxMetaData.title}
                description={post.mdxMetaData.description}
                tags={post.mdxMetaData.tags}
                date={post.mdxMetaData.date}
              />
            </li>
          ))
        ) : (
          <p className="text-gray-500">해당 게시글이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
