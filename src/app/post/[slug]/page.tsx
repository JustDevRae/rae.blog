import { getMdxFileDataBySlug } from "@/utils/parseMdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomComponents from "@/components/mdx/CustomComponents";
import { PostPageProps } from "@/types/post";

export async function generateStaticParams() {
  const { getAllMdxMetadataAndSlug } = await import("@/utils/parseMdx");
  const mdxMetadataAndSlugs = getAllMdxMetadataAndSlug();

  return mdxMetadataAndSlugs.map(({ slug }) => ({
    slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const { mdxContent, mdxMetaData } = getMdxFileDataBySlug(slug);

  return (
    <article className="prose mx-auto">
      <h1>{mdxMetaData.title}</h1>
      <p>{mdxMetaData.date}</p>
      <MDXRemote source={mdxContent} components={CustomComponents} />
    </article>
  );
}
