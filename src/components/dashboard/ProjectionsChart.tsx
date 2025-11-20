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

const ProjectionsChart = () => (
  <div className="bg-card rounded-xl p-6 h-full flex flex-col">
    <h3 className="text-sm font-semibold text-foreground mb-6">
      Projections vs Actuals
    </h3>
    <div className="flex-1 w-full min-h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={projectionsData} barSize={24}>
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
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Bar
            dataKey="actual"
            stackId="a"
            fill="#A8C5DA"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#cfdfea"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ProjectionsChart;
