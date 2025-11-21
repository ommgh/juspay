"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import type { Orders } from "@/lib/types";

export const columns: ColumnDef<Orders>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "orderId",
    header: "Order Id",
  },
  {
    id: "user",
    accessorFn: (row) => row.user.name,
    header: "User",
    cell: ({ row }) => {
      const user = row.original.user;
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">{user.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="h-4 w-4 opacity-50" />
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const statusStyles: Record<string, string> = {
        Pending: "text-sky-400 before:bg-sky-400",
        "In Progress": "text-blue-500 before:bg-blue-500",
        Complete: "text-emerald-500 before:bg-emerald-500",
        Rejected: "text-gray-400 before:bg-gray-400",
        Approved: "text-amber-400 before:bg-amber-400",
      };

      return (
        <div
          className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${statusStyles[status]}`}
        >
          ● {status}
        </div>
      );
    },
  },
];
