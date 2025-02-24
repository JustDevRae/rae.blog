import Link from "next/link";
import { getAllMdxMetadataAndSlug } from "@/utils/parseMdx";

export default async function Home() {
  const posts = getAllMdxMetadataAndSlug();
  return (
    <main className="mt-[50px] flex flex-1 flex-col">
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`}>{post.mdxMetaData.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
