"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/shared/ui/pagination";

export function PostListPagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Pagination className="mt-6 flex justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?${new URLSearchParams({ page: (currentPage - 1).toString() }).toString()}`}
            onClick={(e) => {
              e.preventDefault();
              changePage(currentPage - 1);
            }}
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
            size={undefined}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?${new URLSearchParams({ page: page.toString() }).toString()}`}
              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();
                changePage(page);
              }}
              size={undefined}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`?${new URLSearchParams({ page: (currentPage + 1).toString() }).toString()}`}
            onClick={(e) => {
              e.preventDefault();
              changePage(currentPage + 1);
            }}
            className={
              currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
            }
            size={undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
