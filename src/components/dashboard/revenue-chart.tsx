"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Jan", current: 12, previous: 8 },
  { name: "Feb", current: 8, previous: 16 },
  { name: "Mar", current: 14, previous: 10 },
  { name: "Apr", current: 20, previous: 15 },
  { name: "May", current: 22, previous: 24 },
  { name: "Jun", current: 14, previous: 32 },
];

const RevenueChart: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-foreground ml-0">
            Revenue
          </h3>
          <span className="text-muted-foreground hidden sm:inline">|</span>
        </div>

        <div className="flex items-start sm:items-center gap-3 text-xs flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-muted-foreground">
              Current Week{" "}
              <span className="text-foreground font-medium">$58,211</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            <span className="text-muted-foreground">
              Previous Week{" "}
              <span className="text-foreground font-medium">$68,768</span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[200px] sm:h-[260px] md:h-[350px]">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={revenueData}
              margin={{ top: 8, right: 14, left: 0, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                dy={8}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                tickFormatter={(value) => `${value}M`}
                width={40}
              />

              <Tooltip
                wrapperStyle={{ display: "none" }}
                cursor={{ display: "none" }}
              />

              <Line
                type="monotone"
                dataKey="previous"
                stroke="#A8C5DA"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="current"
                stroke="#C6C7F8"
                strokeWidth={3}
                strokeDasharray="8 8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueChart;
