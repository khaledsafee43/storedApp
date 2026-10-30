import { useState } from "react";
import SideBar from "./components/layout/SideBar";
import { FaArrowTrendUp, FaBox } from "react-icons/fa6";
import DashboardHeader from "./components/layout/NovBar";
import DashboardWelcome from "./components/DashboardComponents/DashboardWelcome";

function App() {
  return (
    <>
      <div className="flex min-h-screen" dir="rtl">
        <SideBar />
        <div className="min-w-0 flex-1">
          {" "}
          <DashboardHeader />
          <main>
            <section className="min-w-0 flex-1 p-4 pt-20 md:p-6">
              {/* Waellcom message */}
              <DashboardWelcome/>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Cards */}
                <div className=" rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-teal-900/20 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-400/15 p-3">
                      <FaBox className="text-2xl text-emerald-400" />
                    </div>

                    <span className="text-sm text-slate-300">محصولات</span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white">1,280</h2>

                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
                    <FaArrowTrendUp />
                    <span>34+ نسبت به ماه قبل</span>
                  </div>
                </div>
                {/* card 2 */}
                <div className="rounded-xl border border-[#F59E0B] bg-[#3A3020] p-5 text-[#F0F9FF]">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-400/15 p-3">
                      <FaBox className="text-2xl text-emerald-400" />
                    </div>

                    <span className="text-sm text-slate-300">محصولات</span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white">1,280</h2>

                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
                    <FaArrowTrendUp />
                    <span>34+ نسبت به ماه قبل</span>
                  </div>
                </div>
                {/* card 3 */}
                <div className="rounded-xl border border-[#06B6D4] bg-[#063D48] p-5 text-[#F0F9FF]">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-400/15 p-3">
                      <FaBox className="text-2xl text-emerald-400" />
                    </div>

                    <span className="text-sm text-slate-300">محصولات</span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white">1,280</h2>

                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
                    <FaArrowTrendUp />
                    <span>34+ نسبت به ماه قبل</span>
                  </div>
                </div>
                {/* card 4 */}
                <div className="rounded-xl border border-[#8B5CF6] bg-[#292747] p-5 text-[#F0F9FF]">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-400/15 p-3">
                      <FaBox className="text-2xl text-emerald-400" />
                    </div>

                    <span className="text-sm text-slate-300">محصولات</span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white">1,280</h2>

                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
                    <FaArrowTrendUp />
                    <span>34+ نسبت به ماه قبل</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
