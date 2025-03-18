import { getPaginatedPostData } from "@/lib/parseMdx";
import PostCard from "@/components/PostCard";
import CustomPagination from "@/components/CustomPagination";

export default async function PostPage({
  params,
}: {
  params: { page: string };
}) {
  const currentPage = parseInt(params.page, 10) || 1;
  const itemsPerPage = 4;

  const { posts, totalPages } = getPaginatedPostData(currentPage, itemsPerPage);

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard
              slug={post.slug}
              title={post.mdxMetaData.title}
              description={post.mdxMetaData.description}
              tags={post.mdxMetaData.tags}
              date={post.mdxMetaData.date}
            />
          </li>
        ))}
      </ul>

      {/* Custom Pagination 적용 */}
      <CustomPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
