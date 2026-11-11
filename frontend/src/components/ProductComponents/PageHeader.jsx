import { NavLink } from "react-router-dom";
import { FaBox } from "react-icons/fa6";
export default function PageHeader() {
  return (
    <header
      className="
  sticky top-0 z-20
  w-full
  border-b border-teal-400/30
  bg-gradient-to-l
  from-[#064E45]
  via-[#032B2D]
  to-[#021F24]
  shadow-[0_4px_25px_rgba(0,214,192,0.12)]
  backdrop-blur-xl
    p-3
    rounded-b-2xl
    text-[#F0F9FF]
    flex items-center justify-between
    text-sm text-[#F0F9FF]
    transition-all duration-300
    md:px-6
    "
    >
      <nav className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            `group relative flex items-center gap-3 rounded-xl px-4 py-3
  text-sm font-semibold transition-all duration-300
  ${
    isActive
      ? "border border-teal-400/40 bg-gradient-to-l from-[#087F70] via-[#075B55] to-[#064044] text-white shadow-[0_0_15px_rgba(20,184,166,0.25)]"
      : "border border-transparent text-slate-300 hover:border-teal-400/20 hover:bg-teal-400/10 hover:text-teal-300"
  }`
          }
          to="/products/add"
        >
          {({ isActive }) => (
            <FaBox
              className={`text-lg transition-all duration-300 
                 ${
                  isActive
                    ? "scale-110 text-[#5EEAD4]"
                    : "text-slate-400 group-hover:scale-110 group-hover:text-teal-300"
                }
              `}
            />
          )}{" "}
          ثبت محصول
        </NavLink>
        <NavLink
          to="/products/add-category"
          className={({ isActive }) =>
            `group relative flex items-center gap-3 rounded-xl px-4 py-3
  text-sm font-semibold transition-all duration-300
  ${
    isActive
      ? "border border-teal-400/40 bg-gradient-to-l from-[#087F70] via-[#075B55] to-[#064044] text-white shadow-[0_0_15px_rgba(20,184,166,0.25)]"
      : "border border-transparent text-slate-300 hover:border-teal-400/20 hover:bg-teal-400/10 hover:text-teal-300"
  }`
          }
        >
          {({ isActive }) => (
            <FaBox
              className={`text-lg transition-all duration-300 
                // ${
                  isActive
                    ? "scale-110 text-[#5EEAD4]"
                    : "text-slate-400 group-hover:scale-110 group-hover:text-teal-300"
                }
              `}
            />
          )}{" "}
          ثبت کتگوری
        </NavLink>
        <NavLink
          to="/products/list"
          className={({ isActive }) =>
            `group relative flex items-center gap-3 rounded-xl px-4 py-3
  text-sm font-semibold transition-all duration-300
  ${
    isActive
      ? "border border-teal-400/40 bg-gradient-to-l from-[#087F70] via-[#075B55] to-[#064044] text-white shadow-[0_0_15px_rgba(20,184,166,0.25)]"
      : "border border-transparent text-slate-300 hover:border-teal-400/20 hover:bg-teal-400/10 hover:text-teal-300"
  }`
          }
        >
          {({ isActive }) => (
            <FaBox
              className={`text-lg transition-all duration-300 
                // ${
                  isActive
                    ? "scale-110 text-[#5EEAD4]"
                    : "text-slate-400 group-hover:scale-110 group-hover:text-teal-300"
                }
              `}
            />
          )}{" "}
          لیست محصولات
        </NavLink>
        <NavLink
          to="/products/categories"
          className={({ isActive }) =>
            `group relative flex items-center gap-3 rounded-xl px-4 py-3
  text-sm font-semibold transition-all duration-300
  ${
    isActive
      ? "border border-teal-400/40 bg-gradient-to-l from-[#087F70] via-[#075B55] to-[#064044] text-white shadow-[0_0_15px_rgba(20,184,166,0.25)]"
      : "border border-transparent text-slate-300 hover:border-teal-400/20 hover:bg-teal-400/10 hover:text-teal-300"
  }`
          }
        >
          {({ isActive }) => (
            <FaBox
              className={`text-lg transition-all duration-300 
                // ${
                  isActive
                    ? "scale-110 text-[#5EEAD4]"
                    : "text-slate-400 group-hover:scale-110 group-hover:text-teal-300"
                }
              `}
            />
          )}{" "}
          کتگوری محصولات
        </NavLink>
      </nav>
    </header>
  );
}
