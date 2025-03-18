import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string; // 기본 경로 설정 가능 (기본값: "/post/page/")
}

export default function CustomPagination({
  currentPage,
  totalPages,
  basePath = "/post/page/",
}: CustomPaginationProps) {
  return (
    <div className="mt-6 flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* 이전 페이지 버튼 */}
          <PaginationItem>
            <PaginationPrevious
              href={currentPage > 1 ? `${basePath}${currentPage - 1}` : "#"}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {/* 페이지 숫자 버튼 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`${basePath}${page}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* 다음 페이지 버튼 */}
          <PaginationItem>
            <PaginationNext
              href={
                currentPage < totalPages ? `${basePath}${currentPage + 1}` : "#"
              }
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
