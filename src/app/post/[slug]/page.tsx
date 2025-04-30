import { getPostDetailData, parseToc } from "@/lib/parseMdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Comments from "@/components/giscus-comments";
import TableOfContent from "@/components/top-table-of-content";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { mdxMetaData } = getPostDetailData(slug);

  return {
    title: mdxMetaData.title,
    description: mdxMetaData.description,
    openGraph: {
      title: mdxMetaData.title,
      description: mdxMetaData.description,
    },
  };
}

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
    <article className="relative mt-[50px] px-4">
      <section className="flex flex-col items-center border-b pb-16">
        <h1 className="text-2xl font-bold tracking-tight">
          {mdxMetaData.title}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{mdxMetaData.date}</p>
      </section>
      <TableOfContent toc={toc} />

      <section className={cn("prose dark:prose-invert", "border-b pb-4")}>
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
      </section>

      <Comments />
    </article>
  );
}
