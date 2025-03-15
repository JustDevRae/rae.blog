import { getAllMdxMetadataAndSlug } from "@/lib/parseMdx";
import PostCard from "@/components/PostCard";

export default async function PostPage() {
  const posts = getAllMdxMetadataAndSlug();

  return (
    <ul className="mt-12 grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard
            slug={post.slug}
            title={post.mdxMetaData.title}
            description={post.mdxMetaData.description}
            tags={post.mdxMetaData.tags}
            date={post.mdxMetaData.date}
          />
        </li>
      ))}
    </ul>
  );
}
