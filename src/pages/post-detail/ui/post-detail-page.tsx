import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { parsePostDataBySlug } from "@/entities/post/api/mdx";
import { parseToc } from "@/entities/post/lib/parseToc";
import { cn } from "@/shared/lib/utils/utils";
import { components } from "@/shared/ui/mdx-custom-components";
import TableOfContent from "@/widgets/table-of-content/ui/table-of-content";
import PostGiscusComments from "@/widgets/post-comment/ui/post-giscus-comment";

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
          components={components}
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

      <PostGiscusComments />
    </article>
  );
}
