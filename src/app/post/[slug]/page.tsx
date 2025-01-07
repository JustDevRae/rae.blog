import { getMdxFileDataBySlug } from "@/utils/parseMdx";

export async function generateStaticParams() {
  const { getAllMdxMetadataAndSlug } = await import("@/utils/parseMdx");
  const mdxMetadataAndSlugs = getAllMdxMetadataAndSlug();

  return mdxMetadataAndSlugs.map(({ slug }) => ({
    slug,
  }));
}

interface PostPageProps {
  params: { slug: string };
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const { mdxContent, mdxMetaData } = getMdxFileDataBySlug(slug);

  return (
    <article className="prose mx-auto">
      <h1>{mdxMetaData.title}</h1>
      <p>{mdxMetaData.date}</p>
      <div>{mdxContent}</div>
    </article>
  );
}
