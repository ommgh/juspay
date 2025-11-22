import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps<TData> {
  table: Table<TData>;
}

export function Pagination<TData>({ table }: PaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageOptions = table.getPageOptions();
  const pageCount = pageOptions.length;

  if (pageCount <= 1) return null;

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
            type="button"
            className={`h-8 w-8 p-0 ${prevDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => table.previousPage()}
            disabled={prevDisabled}
          >
            <ChevronLeft />
          </Button>

          <div className="inline-flex items-center space-x-1">
            {pageOptions.map((p) => {
              const isActive = p === pageIndex;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => table.setPageIndex(p)}
                  aria-current={isActive ? "page" : undefined}
                  className={`h-8 min-w-8 px-3 text-sm rounded-md
                    ${isActive ? "bg-muted/60 cursor-default" : "hover:bg-muted/40 cursor-pointer"}`}
                >
                  {p + 1}
                </button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="sm"
            type="button"
            className={`h-8 w-8 p-0 ${nextDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => table.nextPage()}
            disabled={nextDisabled}
          >
            <ChevronRight />
          </Button>
        </nav>
      </div>
    </div>
  );
}
