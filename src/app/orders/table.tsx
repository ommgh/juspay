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

import { DataTablePagination } from "./pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ColumnSorter } from "./sorting";
import { PiFunnelSimple, PiMagnifyingGlass, PiPlus } from "react-icons/pi";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

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
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div className="w-full space-y-4">
      {/* Toolbar - Single Line Layout */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted/30 p-2">
        {/* Left Controls Group */}
        <div className="flex items-center gap-2 pl-2">
          {/* Add Button */}
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-foreground hover:bg-muted"
          >
            <PiPlus className="h-5 w-5" />
          </Button>
          {/* Filter Button */}
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
            <SelectTrigger className="w-[40px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Pending">In_Progress</SelectItem>
              <SelectItem value="Preparing">Complete</SelectItem>
              <SelectItem value="Out for Delivery">Pending</SelectItem>
              <SelectItem value="Delivered">Approved</SelectItem>
              <SelectItem value="Cancelled">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <ColumnSorter column={table.getColumn("orderId")!} />
        </div>

        {/* Search Input */}
        <div className="relative w-64 sm:w-80 pr-2">
          <PiMagnifyingGlass className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
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
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
