import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { PiArrowsDownUp } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as React from "react";

interface ColumnSorterProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
}

export function ColumnSorter<TData, TValue>({
  column,
  className,
}: ColumnSorterProps<TData, TValue>) {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {}, []);

  if (!column.getCanSort()) {
    return (
      <div className={cn(className)}>
        <PiArrowsDownUp />
      </div>
    );
  }

  const sortedState = column.getIsSorted();

  const handleSort = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const currentSort = column.getIsSorted();

    if (currentSort === false) {
      column.toggleSorting(false, false);
    } else if (currentSort === "asc") {
      column.toggleSorting(true, false);
    } else {
      column.clearSorting();
    }

    forceUpdate();
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0"
        onClick={handleSort}
        aria-label={`Sort ${column.id}`}
      >
        {sortedState === "asc" ? (
          <ArrowUp className="h-4 w-4" />
        ) : sortedState === "desc" ? (
          <ArrowDown className="h-4 w-4" />
        ) : (
          <ArrowUpDown className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
