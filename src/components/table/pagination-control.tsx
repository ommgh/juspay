import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay?: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 5,
  onPageChange,
}: PaginationProps) {
  const { pages } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  });

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none cursor-pointer aria-disabled:opacity-50"
            onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1}
            role="button"
          >
            <ChevronLeftIcon size={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={page === currentPage}
              role="button"
              className="cursor-pointer"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none cursor-pointer aria-disabled:opacity-50"
            onClick={() =>
              currentPage !== totalPages && onPageChange(currentPage + 1)
            }
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages}
            role="button"
          >
            <ChevronRightIcon size={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
