import PostDetailPage from "@/views/post-detail/ui/post-detail-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <PostDetailPage params={params} />;
}
