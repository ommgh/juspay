"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectionsChart from "@/components/dashboard/projection-chart";
import RevenueChart from "@/components/dashboard/revenue-chart";
import LocationMap from "@/components/dashboard/location-map";
import ProductTable from "@/components/dashboard/product-table";
import TotalSalesChart from "@/components/dashboard/sales-chart";

const statsData = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    trend: "up",
    bg: "bg-[#E3F5FF] dark:bg-[#E3F5FF]",
    textColor: "text-[#1C1C1C]",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
    bg: "bg-card",
    textColor: "text-foreground",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
    bg: "bg-card",
    textColor: "text-foreground",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
    bg: "bg-[#E5ECF6] dark:bg-[#E5ECF6]",
    textColor: "text-[#1C1C1C]",
  },
];

const StatCard = ({ data }: { data: (typeof statsData)[0] }) => (
  <div
    className={cn("rounded-xl p-6 flex flex-col justify-between h-32", data.bg)}
  >
    <h3
      className={cn("text-sm font-medium", data.textColor || "text-foreground")}
    >
      {data.title}
    </h3>
    <div className="flex items-end gap-2">
      <span
        className={cn(
          "text-2xl font-bold",
          data.textColor || "text-foreground",
        )}
      >
        {data.value}
      </span>
      <div className="flex items-center gap-1 text-xs mb-1.5">
        <span
          className={cn("font-medium", data.textColor || "text-foreground")}
        >
          {data.change}
        </span>
        {data.trend === "up" ? (
          <ArrowUpRight
            className={cn("h-3 w-3", data.textColor || "text-foreground")}
          />
        ) : (
          <ArrowDownRight
            className={cn("h-3 w-3", data.textColor || "text-foreground")}
          />
        )}
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 min-h-screen font-sans">
      <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
            {statsData.map((stat, i) => (
              <div key={i} className="col-span-2">
                <StatCard data={stat} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ProjectionsChart />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <RevenueChart />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <LocationMap />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <ProductTable />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <TotalSalesChart />
        </div>
      </div>
    </div>
  );
}
