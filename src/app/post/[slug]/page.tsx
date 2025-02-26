import { getMdxFileDataBySlug } from "@/utils/parseMdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomComponents from "@/components/mdx/CustomComponents";
import Comments from "@/components/Comments";

export async function generateStaticParams() {
  const { getAllMdxMetadataAndSlug } = await import("@/utils/parseMdx");
  const mdxMetadataAndSlugs = getAllMdxMetadataAndSlug();

  return mdxMetadataAndSlugs.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { mdxContent, mdxMetaData } = getMdxFileDataBySlug(slug);

  return (
    <div>
      <article className="prose prose-sm dark:prose-invert">
        <h2>{mdxMetaData.title}</h2>
        <p>{mdxMetaData.date}</p>
        <MDXRemote source={mdxContent} components={CustomComponents} />
        <Comments />
      </article>
    </div>
  );
}
