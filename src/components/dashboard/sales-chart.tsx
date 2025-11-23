import { Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";

const salesData = [
  { name: "Direct", value: 300.56, color: "var(--chart-1)" },
  { name: "Affiliate", value: 135.18, color: "var(--chart-2)" },
  { name: "Sponsored", value: 154.02, color: "var(--chart-3)" },
  { name: "E-mail", value: 48.96, color: "var(--chart-4)" },
];
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const totalValue = salesData.reduce((sum, item) => sum + item.value, 0);

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const percent = ((data.value / totalValue) * 100).toFixed(1);

    return (
      <div className="bg-[#404741] text-white text-xs rounded-full shadow-lg p-2 border border-zinc-700 outline-none">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium">
            {percent}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const TotalSalesChart = () => (
  <div className="bg-card rounded-xl p-6 h-full flex flex-col">
    <h3 className="text-sm font-semibold text-foreground mb-6">Total Sales</h3>

    <div className="relative h-40 flex items-center justify-center">
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={salesData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={2}
            cornerRadius={6}
            dataKey="value"
            stroke="none"
          >
            {salesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="mt-4 space-y-3">
      {salesData.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-muted-foreground">{item.name}</span>
          </div>
          <span className="text-foreground font-medium">
            ${item.value.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TotalSalesChart;
