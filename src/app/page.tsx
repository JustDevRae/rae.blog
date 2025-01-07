import Link from "next/link";
import { getAllMdxMetadataAndSlug } from "@/utils/parseMdx";

export default async function Home() {
  const posts = getAllMdxMetadataAndSlug();
  return (
    <div>
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
