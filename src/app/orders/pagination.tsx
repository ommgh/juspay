import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex;

  if (pageCount === 0) return null;

  const maxButtons = 5;
  const half = Math.floor(maxButtons / 2);

  let start = Math.max(0, pageIndex - half);
  if (start + maxButtons > pageCount) {
    start = Math.max(0, pageCount - maxButtons);
  }
  const visibleCount = Math.min(maxButtons, pageCount);
  const pages = Array.from({ length: visibleCount }, (_, i) => start + i);

  const prevDisabled = !table.getCanPreviousPage();
  const nextDisabled = !table.getCanNextPage();

  return (
    <div className="w-full px-2">
      <div className="flex justify-end">
        <nav
          aria-label="Table pagination"
          className="inline-flex items-center space-x-2"
        >
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${prevDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => table.previousPage()}
            disabled={prevDisabled}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </Button>

          <div className="inline-flex items-center space-x-1">
            {pages.map((p) => {
              const isActive = p === pageIndex;
              return (
                <button
                  key={p}
                  onClick={() => table.setPageIndex(p)}
                  disabled={isActive}
                  aria-current={isActive ? "page" : undefined}
                  className={`h-8 min-w-8 px-2 text-sm rounded-md
                    flex items-center justify-center
                    ${
                      isActive
                        ? "bg-muted/50  border-transparent pointer-events-none"
                        : "bg-transparent text-sm hover:bg-muted/50"
                    }
                    ${isActive ? "" : "cursor-pointer"}`}
                >
                  {p + 1}
                </button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${nextDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => table.nextPage()}
            disabled={nextDisabled}
            aria-label="Next page"
          >
            <ChevronRight />
          </Button>
        </nav>
      </div>
    </div>
  );
}
