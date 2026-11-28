import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaWarehouse, FaExchangeAlt, FaBoxes, FaClipboardList } from "react-icons/fa";

export default function PageHeader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navItems = [
    {
      to: "/MedicineWarehouse",
      label: "ثبت گدام",
      icon: FaWarehouse,
      end: true,
    },
    {
      to: "/MedicineWarehouse/addTransfer",
      label: "انتقال بین گدام ها",
      icon: FaExchangeAlt,
    },
    {
      to: "/MedicineWarehouse/warhouses",
      label: "گدام ها",
      icon: FaBoxes,
    },
    {
      to: "/MedicineWarehouse/WarehouseTransfersList",
      label: "لیست انتقالات بین گدام ها",
      icon: FaClipboardList,
    },
  ];

  return (
    <>
      {/* Page Loading Bar */}
      {loading && (
        <div className="fixed top-0 left-0 z-[100] h-[3px] w-full overflow-hidden bg-teal-400/10">
          <div
            className="
              h-full w-[35%]
              rounded-full
              bg-gradient-to-r
              from-emerald-400
              via-teal-300
              to-cyan-300
              shadow-[0_0_15px_rgba(45,212,191,0.9)]
              animate-page-loader
            "
          />
        </div>
      )}

      <header
        className="
          sticky top-0 z-20
          w-full
          rounded-xl md:rounded-2xl
          border-b border-teal-400/30
          bg-gradient-to-l
          from-[#064E45]
          via-[#032B2D]
          to-[#021F24]
          shadow-[0_4px_25px_rgba(0,214,192,0.12)]
          backdrop-blur-xl
          p-2 sm:p-3 md:px-6
          text-[#F0F9FF]
        "
      >
        <nav
          className="
            grid grid-cols-2 gap-2
            sm:flex sm:flex-wrap
            sm:justify-center
            md:justify-start
            md:gap-3
          "
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `
                  group flex items-center justify-center
                  gap-2 sm:gap-3
                  rounded-lg md:rounded-xl
                  px-2 py-3 sm:px-4
                  text-xs sm:text-sm
                  font-semibold whitespace-nowrap
                  transition-all duration-300
                  ${
                    isActive
                      ? "border border-teal-400/40 bg-gradient-to-l from-[#087F70] via-[#075B55] to-[#064044] text-white shadow-[0_0_15px_rgba(20,184,166,0.25)]"
                      : "border border-transparent text-slate-300 hover:border-teal-400/20 hover:bg-teal-400/10 hover:text-teal-300"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`
                        text-sm sm:text-lg
                        flex-shrink-0
                        transition-all duration-300
                        ${
                          isActive
                            ? "scale-110 text-[#5EEAD4]"
                            : "text-slate-400 group-hover:scale-110 group-hover:text-teal-300"
                        }
                      `}
                    />

                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </>
  );
}
