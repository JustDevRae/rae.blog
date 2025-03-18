import { getPostDetailData, parseToc } from "@/lib/parseMdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Comments from "@/components/Comments";
import TableOfContent from "@/components/TableOfContents";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const { getAllPostData: getAllMdxMetadataAndSlug } = await import(
    "@/lib/parseMdx"
  );
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
  const { mdxContent, mdxMetaData } = getPostDetailData(slug);
  const toc = parseToc(mdxContent);

  return (
    <article className="prose prose-sm mt-[50px] px-4 dark:prose-invert">
      <section className="mb-6 flex flex-col items-center border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {mdxMetaData.title}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{mdxMetaData.date}</p>
      </section>
      <TableOfContent data-animate className="px-2 text-sm" toc={toc} />
      <MDXRemote
        source={mdxContent}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: {
                    className: ["anchor"],
                  },
                },
              ],
            ],
          },
        }}
      />
      <Comments />
    </article>
  );
}
