import { parsePostDataBySlug } from "@/lib/mdx";
import { parseToc } from "@/lib/toc";
import { MDXRemote } from "next-mdx-remote/rsc";
import Comments from "@/components/giscus-comments";
import TableOfContent from "@/components/table-of-content";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { postMetaData } = parsePostDataBySlug(slug);

  return {
    title: postMetaData.title,
    description: postMetaData.description,
    openGraph: {
      title: postMetaData.title,
      description: postMetaData.description,
    },
  };
}

export async function generateStaticParams() {
  const { extractSlugsFromMDXFiles } = await import("@/lib/mdx");
  const mdxMetadataAndSlugs = extractSlugsFromMDXFiles();

  return mdxMetadataAndSlugs.map((slug) => ({
    slug,
  }));
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { postContent, postMetaData } = parsePostDataBySlug(slug);
  const toc = parseToc(postContent);

  return (
    <article className="relative mt-[50px] px-4">
      <section className="flex flex-col items-center gap-5 border-b pb-16">
        <h1 className="text-2xl font-bold">{postMetaData.title}</h1>
        <p className="mt-1 text-sm text-gray-500">{postMetaData.date}</p>
      </section>
      <TableOfContent toc={toc} />

      <section
        className={cn("prose dark:prose-invert", "my-10 border-b pb-10")}
      >
        <MDXRemote
          source={postContent}
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
