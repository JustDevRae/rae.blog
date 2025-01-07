import Link from "next/link";
import { getAllMdxMetadataAndSlug } from "@/utils/parseMdx";

export default async function Home() {
  const posts = getAllMdxMetadataAndSlug();
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`}>{post.mdxMetaData.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
