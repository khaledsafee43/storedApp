import { useState } from "react";
import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Area,
} from "recharts";
import { FaChartLine } from "react-icons/fa6";

const chartData = {
weekly: [
{ day: "شنبه", sales: 7 },
{ day: "یکشنبه", sales: 10 },
{ day: "دوشنبه", sales: 8 },
{ day: "سه‌شنبه", sales: 13 },
{ day: "چهارشنبه", sales: 10 },
{ day: "پنجشنبه", sales: 15 },
{ day: "جمعه", sales: 13 },
],
monthly: [
{ day: "هفته ۱", sales: 25 },
{ day: "هفته ۲", sales: 32 },
{ day: "هفته ۳", sales: 28 },
{ day: "هفته ۴", sales: 40 },
],
yearly: [
{ day: "حمل", sales: 30 },
{ day: "ثور", sales: 38 },
{ day: "جوزا", sales: 35 },
{ day: "سرطان", sales: 45 },
{ day: "اسد", sales: 42 },
{ day: "سنبله", sales: 50 },
],
};

export default function SalesChart() {
const [period, setPeriod] = useState("weekly");

const periods = [
{ key: "weekly", label: "هفته" },
{ key: "monthly", label: "ماهانه" },
{ key: "yearly", label: "سالانه" },
];

return ( <section className="min-w-0 rounded-xl border border-teal-500/40 bg-[#033638] p-4 text-white"> <div className="mb-5 flex flex-wrap items-center justify-between gap-3"> <h2 className="flex items-center gap-2 font-bold">
گزارش فروش <FaChartLine className="text-lg text-cyan-400" /> </h2>


    <div className="flex gap-2">
      {periods.map((item) => (
        <button
          key={item.key}
          onClick={() => setPeriod(item.key)}
          className={`rounded-lg px-3 py-2 text-xs transition ${
            period === item.key
              ? "bg-teal-600 text-white"
              : "bg-[#105257] text-slate-300 hover:bg-teal-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>

  <div className="h-64 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData[period]}
        margin={{ top: 10, right: 5, left: 0, bottom: 5 }}
      >
        <defs>
          <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D6C0" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#00D6C0" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#164E55" vertical={false} />

        <XAxis
          dataKey="day"
          tick={{ fill: "#A7C5D1", fontSize: 11 }}
          axisLine={{ stroke: "#164E55" }}
          tickLine={false}
        />

        <YAxis
          domain={[0, "auto"]}
          tickFormatter={(value) => `${value}M`}
          tick={{ fill: "#A7C5D1", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={35}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#063638",
            border: "1px solid #087C80",
            borderRadius: "8px",
            color: "#fff",
          }}
          formatter={(value) => [`${value} میلیون`, "فروش"]}
        />

        <Area
          type="monotone"
          dataKey="sales"
          stroke="none"
          fill="url(#salesFill)"
        />

        <Line
          type="monotone"
          dataKey="sales"
          stroke="#00D6C0"
          strokeWidth={2}
          dot={{ fill: "#00D6C0", strokeWidth: 2, r: 3 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</section>


);
}
