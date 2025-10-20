import { Metadata } from "next";
import PostDetailPage from "@/views/post-detail/ui/post-detail-page";
import { parsePostDataBySlug } from "@/entities/post/api/mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
  const { extractSlugsFromMDXFiles } = await import("@/entities/post/api/mdx");
  const mdxMetadataAndSlugs = extractSlugsFromMDXFiles();

  return mdxMetadataAndSlugs.map((slug) => ({
    slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <PostDetailPage params={params} />;
}
