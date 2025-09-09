import PostDetail from "@/views/post-detail/ui/post-detail-page";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <PostDetail params={params} />;
}
