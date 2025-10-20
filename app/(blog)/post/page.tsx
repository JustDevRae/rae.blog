import type { Metadata } from "next";
import PostListPage from "@/views/post-list/ui/post-list-page";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "프론트엔드 개발에 관해서 제가 공부하고 정리한 게시글을 확인할 수 있습니다.",
};

export default function Page() {
  return <PostListPage />;
}
