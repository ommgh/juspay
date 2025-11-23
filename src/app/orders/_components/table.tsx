"use client";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import type { FilterFn } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ColumnSorter } from "../../../components/table/sorting";
import { PiMagnifyingGlass, PiPlus, PiFunnelSimple } from "react-icons/pi";
import PaginationControls from "@/components/table/pagination-control";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const globalSearchFn: FilterFn<any> = (row, _columnId, filterValue) => {
  const search = String(filterValue).toLowerCase().trim();
  if (!search) return true;

  const original = row.original as any;

  const haystack = [
    original.orderId,
    original.user?.name,
    original.project,
    original.address,
    original.date,
    original.status,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(search);
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,

    globalFilterFn: globalSearchFn,
    onGlobalFilterChange: setGlobalFilter,

    state: {
      sorting,
      columnFilters,
      rowSelection,
      globalFilter,
    },
  });

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  const orderIdColumn = table.getColumn("orderId");

  return (
    <div className="w-full space-y-4">
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted/30 p-2">
        <div className="flex items-center gap-2 pl-2">
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-foreground hover:bg-muted"
          >
            <PiPlus className="h-5 w-5" />
          </Button>

          <Select
            value={
              (table.getColumn("status")?.getFilterValue() as string) ?? "All"
            }
            onValueChange={(value) => {
              table
                .getColumn("status")
                ?.setFilterValue(value === "All" ? undefined : value);
              table.setPageIndex(0);
            }}
          >
            <SelectTrigger
              className="w-8 h-8 p-2 rounded-md border-none shadow-none hover:bg-muted mr-2 dark:bg-transparent"
              showChevron={false}
              aria-label="Filter by status"
            >
              <PiFunnelSimple size={10} />

              <SelectValue className="sr-only" placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Complete">Complete</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          {orderIdColumn && (
            <ColumnSorter
              key={`sorter-${sorting.length}-${sorting[0]?.id}-${sorting[0]?.desc}`}
              column={orderIdColumn}
            />
          )}
        </div>

        <div className="relative w-40 sm:w-60 pr-2">
          <PiMagnifyingGlass className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={globalFilter}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
            className="pl-9 bg-background border-border shadow-sm focus-visible:ring-1"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-md border">
        <Table className="min-w-[700px]">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="py-2">
        {totalPages > 1 && (
          <div className="w-full flex justify-end px-2 sm:px-0">
            <div className="shrink-0">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  table.setPageIndex(page - 1);
                }}
                paginationItemsToDisplay={5}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
