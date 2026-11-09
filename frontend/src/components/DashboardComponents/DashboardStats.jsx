import {
FaBox,
FaChartLine,
FaCoins,
FaArrowTrendUp,
FaArrowTrendDown,
} from "react-icons/fa6";

const cardStyle =
"rounded-xl border border-teal-500/40 bg-[#033638] p-4 text-white";

export default function DashboardStats() {
return ( <section className="grid grid-cols-1 gap-3 w-full md:grid-cols-12 py-4">

  {/* وضعیت موجودی دواها */}
  <div className={`${cardStyle} md:col-span-5`}>
    <div className="mb-5 flex items-center justify-between">
      <h2 className="font-bold">وضعیت موجودی دواها</h2>
      <FaBox className="text-xl text-cyan-400" />
    </div>

    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <div
        className="flex h-36 w-36 shrink-0 flex-col items-center justify-center rounded-full"
        style={{
          background:
            "conic-gradient(#10b981 0% 80%, #fbbf24 80% 94%, #f43f5e 94% 100%)",
        }}
      >
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#033638]">
          <strong className="text-2xl">1,280</strong>
          <span className="mt-1 text-xs text-slate-400">
            کل محصولات
          </span>
        </div>
      </div>

      <div className="w-full flex-1 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            موجودی کافی
          </span>
          <span className="text-cyan-300">1,024</span>
          <span>80%</span>
        </div>

        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            کم‌موجود
          </span>
          <span className="text-slate-300">180</span>
          <span>14%</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            تمام‌شده
          </span>
          <span className="text-slate-300">76</span>
          <span>6%</span>
        </div>
      </div>
    </div>
  </div>

  {/* فروش امروز */}
  <div className={`${cardStyle} md:col-span-3`}>
    <div className="mb-6 flex items-center justify-between">
      <h2 className="font-bold">فروش امروز</h2>
      <FaChartLine className="text-xl text-cyan-400" />
    </div>

    <p className="text-center text-sm text-slate-300">
      مجموع فروش امروز
    </p>

    <p className="mt-3 text-center text-xl font-bold text-cyan-400 sm:text-2xl">
      ۱۲٬۴۵۰٬۰۰۰ افغانی
      <FaArrowTrendUp className="mr-2 inline text-sm text-emerald-400" />
    </p>

    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-sm">
      <span className="text-slate-400">تعداد فروش:</span>
      <strong>32</strong>
    </div>

    <div className="mt-3 flex items-center justify-between text-sm">
      <span className="text-slate-400">میانگین هر فروش:</span>
      <span className="text-cyan-300">389,000 افغانی</span>
    </div>
  </div>

  {/* مصارف و عواید */}
  <div className={`${cardStyle} md:col-span-3`}>
    <div className="mb-5 flex items-center justify-between">
      <h2 className="font-bold">مصارف و عواید</h2>
      <FaCoins className="text-xl text-cyan-400" />
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <span className="text-slate-300">عواید</span>
        <span className="font-semibold text-teal-300">
          48,750,000
          <FaArrowTrendUp className="mr-2 inline text-emerald-400" />
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <span className="text-slate-300">مصارف</span>
        <span className="font-semibold text-slate-100">
          32,400,000
          <FaArrowTrendDown className="mr-2 inline text-rose-400" />
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="text-slate-300">سود خالص</span>
        <span className="font-bold text-cyan-400">
          16,350,000
          <FaArrowTrendUp className="mr-2 inline text-emerald-400" />
        </span>
      </div>
    </div>
  </div>

</section>

);
}
