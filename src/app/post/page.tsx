import { getAllMdxMetadataAndSlug } from "@/utils/parseMdx";
import PostCard from "@/components/PostCard";

export default async function PostPage() {
  const posts = getAllMdxMetadataAndSlug();

  return (
    <main className="mt-12 flex flex-1 flex-col px-4">
      <ul className="sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard
              slug={post.slug}
              title={post.mdxMetaData.title}
              date={post.mdxMetaData.date}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
