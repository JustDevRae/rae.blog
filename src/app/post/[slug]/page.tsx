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

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { mdxContent, mdxMetaData } = getMdxFileDataBySlug(slug);

  return (
    <article className="prose prose-sm mt-[50px] dark:prose-invert">
      <section className="mb-6 flex flex-col items-center border-b pb-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {mdxMetaData.title}
        </h2>
        <p className="mt-1 text-sm text-gray-500">{mdxMetaData.date}</p>
      </section>

      <section>
        <MDXRemote source={mdxContent} components={CustomComponents} />
      </section>

      <section>
        <Comments />
      </section>
    </article>
  );
}
