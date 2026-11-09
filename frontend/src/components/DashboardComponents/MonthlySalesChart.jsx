import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
} from "recharts";
import { FaGift } from "react-icons/fa6";

const data = [
{ month: "حمل", previous: 20, current: 26 },
{ month: "ثور", previous: 23, current: 20 },
{ month: "جوزا", previous: 18, current: 26 },
{ month: "سرطان", previous: 27, current: 37 },
{ month: "اسد", previous: 23, current: 32 },
{ month: "سنبله", previous: 20, current: 26 },
];

export default function MonthlySalesChart() {
return ( <section className="min-w-0 rounded-xl border border-teal-500/40 bg-[#033638] p-4 text-white"> <h2 className="mb-5 flex items-center gap-2 font-bold">
مقایسه فروش ماهانه <FaGift className="text-lg text-cyan-400" /> </h2>

  <div className="h-64 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barGap={4}
        margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
      >
        <CartesianGrid stroke="#164E55" vertical={false} />

        <XAxis
          dataKey="month"
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
          formatter={(value, name) => [
            `${value} میلیون`,
            name === "previous" ? "سال گذشته" : "سال جاری",
          ]}
        />

        <Legend
          formatter={(value) =>
            value === "previous" ? "سال گذشته" : "سال جاری"
          }
          wrapperStyle={{ fontSize: "12px", color: "#A7C5D1" }}
        />

        <Bar
          dataKey="previous"
          name="previous"
          fill="#10B981"
          radius={[2, 2, 0, 0]}
          maxBarSize={22}
        />

        <Bar
          dataKey="current"
          name="current"
          fill="#3B82F6"
          radius={[2, 2, 0, 0]}
          maxBarSize={22}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</section>


);
}
