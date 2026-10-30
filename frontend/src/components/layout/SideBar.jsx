import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
FaPaw,
FaHouse,
FaBox,
FaWarehouse,
FaLandmark,
FaUsers,
FaUser,
FaMoneyBillWave,
FaCoins,
FaFileInvoiceDollar,
FaChartLine,
FaChartColumn,
FaGear,
FaBars,
FaXmark,
FaChevronLeft,
} from "react-icons/fa6";

export default function SideBar() {
const [isOpen, setIsOpen] = useState(false);

const menuItems = [
{ title: "صفحه اصلی", path: "/", icon: FaHouse },
{ title: "محصولات", path: "/products", icon: FaBox },
{ title: "گدام ها", path: "/MedicineWarehouse", icon: FaWarehouse },
{ title: "بانک ها", path: "/MedicineBank", icon: FaLandmark },
{ title: "کارمندان", path: "/Employeement", icon: FaUsers },
{ title: "مشتریان", path: "/customer_accounts", icon: FaUsers },
{
title: "مصارف متفرقه",
path: "/miscellaneous_expenses",
icon: FaMoneyBillWave,
},
{
title: "عواید متفرقه",
path: "/miscellaneous_income",
icon: FaCoins,
},
{
title: "بدیهی ها",
path: "/obvious",
icon: FaFileInvoiceDollar,
},
{
title: "گزارش ماهانه",
path: "/monthly_report",
icon: FaChartLine,
},
{
title: "گزارش سالانه",
path: "/annual_report",
icon: FaChartColumn,
},
{ title: "مدیریت", path: "/management", icon: FaGear },
];

return (
<>
{/* دکمه موبایل */}
<button
type="button"
onClick={() => setIsOpen(!isOpen)}
className="fixed right-4 top-4 z-[60] rounded-lg border border-teal-400/30 bg-[#063638] p-2 text-xl text-teal-300 shadow-lg md:hidden"
aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
aria-expanded={isOpen}
>
{isOpen ? <FaXmark /> : <FaBars />} </button>


  {isOpen && (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-40 bg-black/60 md:hidden"
    />
  )}

  <aside
    dir="ltr"
    className={`fixed right-0 top-0 z-50 flex h-dvh w-72 max-w-[85vw] flex-col border-l border-teal-500/20 bg-gradient-to-b from-[#042F32] to-[#021F24] shadow-2xl transition-transform duration-300 md:sticky md:top-0 md:h-screen md:w-64 md:max-w-none md:translate-x-0 md:shrink-0 ${
      isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
    }`}
  >
    <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-5 py-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10">
        <FaPaw className="text-2xl text-teal-300" />
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          دواخانه حیوانات
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          سیستم مدیریت دواخانه
        </p>
      </div>
    </div>

    <div className="px-5 pb-2 pt-5">
      <p className="text-xs font-semibold text-right text-teal-400/80">
        منوی اصلی
      </p>
    </div>

    <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden px-3 pb-4">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
          dir="rtl"
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `group flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border border-teal-400/20 bg-teal-500/20 text-teal-300 shadow-md shadow-teal-950/20"
                  : "border border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`shrink-0 text-lg ${
                    isActive
                      ? "text-teal-300"
                      : "text-slate-400 transition-colors group-hover:text-teal-300"
                  }`}
                />

                <span className="min-w-0 flex-1">
                  {item.title}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>

    <div className="shrink-0 border-t border-white/10 p-4">
      <div className="rounded-xl border border-teal-400/10 bg-teal-400/5 p-3">
        <div className="flex items-center gap-2">
          <FaPaw className="text-lg text-teal-300" />

          <p className="text-xs font-semibold text-slate-200">
            مدیریت آسان‌تر
          </p>
        </div>

        <p className="mt-2 text-xs leading-5 text-slate-400">
          تمام اطلاعات دواخانه در یک مکان.
        </p>
      </div>
    </div>
  </aside>
</>


);
}
