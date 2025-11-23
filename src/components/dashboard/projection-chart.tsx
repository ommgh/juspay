"use client";

import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const projectionsData = [
  { month: "Jan", actual: 16, projection: 20 },
  { month: "Feb", actual: 19, projection: 22 },
  { month: "Mar", actual: 17, projection: 24 },
  { month: "Apr", actual: 11, projection: 19 },
  { month: "May", actual: 14, projection: 20 },
  { month: "Jun", actual: 19, projection: 26 },
];

const ProjectionsChart: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [barSize, setBarSize] = useState<number>(24);

  useEffect(() => {
    setMounted(true);

    const calcBarSize = () => {
      const w = window.innerWidth;
      if (w < 420) return 12;
      if (w < 640) return 16;
      if (w < 1024) return 20;
      return 24;
    };

    setBarSize(calcBarSize());

    const onResize = () => setBarSize(calcBarSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 h-full flex flex-col">
      <h3 className="text-sm font-semibold text-foreground mb-4 sm:mb-6 ml-0">
        Projections vs Actuals
      </h3>

      <div className="w-full h-[180px] sm:h-[220px] md:h-[180px]">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={projectionsData}
              margin={{ top: 8, right: 14, left: 0, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                dy={8}
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

              <Bar
                dataKey="actual"
                stackId="a"
                fill="#A8C5DA"
                radius={[0, 0, 0, 0]}
                barSize={barSize}
              />
              <Bar
                dataKey="projection"
                stackId="a"
                fill="#cfdfea"
                radius={[6, 6, 0, 0]}
                barSize={barSize}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectionsChart;
