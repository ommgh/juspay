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

const RevenueChart = () => (
  <div className="bg-card rounded-xl p-6 h-full flex flex-col">
    <div className="flex items-center gap-6 mb-6">
      <h3 className="text-sm font-semibold text-foreground ml-7">Revenue</h3>
      <span className="text-muted-foreground"> | </span>
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
          <span className="text-muted-foreground">
            Current Week{" "}
            <span className="text-foreground font-medium">$58,211</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
          <span className="text-muted-foreground">
            Previous Week{" "}
            <span className="text-foreground font-medium">$68,768</span>
          </span>
        </div>
      </div>
    </div>
    <div className="flex-1 w-full min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
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

          <Line
            type="monotone"
            dataKey="previous"
            stroke="#A8C5DA"
            strokeWidth={4}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#C6C7F8"
            strokeWidth={4}
            strokeDasharray="8 8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default RevenueChart;
