import { FaPaw } from "react-icons/fa6";

export default function DashboardWelcome() {
  return (
    <section
      dir="rtl"
      className="relative mb-4 flex min-h-[90px] items-center justify-between overflow-hidden rounded-xl border border-teal-500/20 bg-gradient-to-l from-[#064044] via-[#033638] to-[#021F24] px-4 py-3 sm:px-6"
    >
      {/* تصویر حیوانات */}{" "}
      <div className="absolute bottom-0 left-0 top-0 w-1/2 sm:w-2/5 md:w-1/3">
        {" "}
        <img
          src="animals.png"
          alt="حیوانات"
          className="h-full w-full object-cover object-center"
        />
        {/* محو شدن تصویر در سمت راست */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#033638] via-[#033638]/20 to-transparent" />
      </div>
      {/* متن خوش‌آمدگویی */}
      <div className="relative z-10 flex items-center gap-3">
        <div>
          <h2 className="text-sm font-bold text-white sm:text-base">
            به داشبورد خوش آمدید
          </h2>

          <p className="mt-2 text-[10px] text-slate-300 sm:text-xs">
            امیدواریم امروز روز خوبی برای شما باشد.
          </p>
        </div>

        <FaPaw className="text-lg text-teal-400 sm:text-xl" />
      </div>
    </section>
  );
}
