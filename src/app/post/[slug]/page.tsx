import { getMdxFileDataBySlug, getHeadingsForTOC } from "@/utils/parseMdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomComponents from "@/components/mdx/CustomComponents";
import TableOfContent from "@/components/TableOfContent";

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
  const headings = getHeadingsForTOC(slug);

  return (
    <div>
      <aside className="w-full lg:w-1/4">
        <TableOfContent headings={headings} />
      </aside>
      <article className="prose mx-auto">
        <h1>{mdxMetaData.title}</h1>
        <p>{mdxMetaData.date}</p>
        <MDXRemote source={mdxContent} components={CustomComponents} />
      </article>
    </div>
  );
}
