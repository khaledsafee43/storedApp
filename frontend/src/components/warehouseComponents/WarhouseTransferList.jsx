import React, { useMemo, useState } from "react";
import {
  FaExchangeAlt,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaBoxes,
  FaCalendarAlt,
  FaWarehouse,
  FaArrowLeft,
} from "react-icons/fa";

export default function WarehouseTransfersList() {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [fromWarehouseFilter, setFromWarehouseFilter] = useState("");
  const [toWarehouseFilter, setToWarehouseFilter] = useState("");

  // Sort
  const [sortBy, setSortBy] = useState("default");

  // استایل مشترک ورودی‌ها
  const inputStyle = `
    w-full rounded-xl
    border border-teal-400/20
    bg-[#021F24]/80
    py-3 px-4
    text-sm text-white
    outline-none
    placeholder:text-slate-500
    transition-all duration-300
    focus:border-teal-400
    focus:ring-2 focus:ring-teal-400/10
  `;

  // گدام‌های موجود برای فیلتر
  const fromWarehouses = [
    ...new Set(transfers.map((t) => t.FromWarehouse).filter(Boolean)),
  ];

  const toWarehouses = [
    ...new Set(transfers.map((t) => t.ToWarehouse).filter(Boolean)),
  ];

  // جستجو، فیلتر و مرتب‌سازی
  const filteredTransfers = useMemo(() => {
    let result = [...transfers];

    // Search
    if (search.trim()) {
      const value = search.toLowerCase();

      result = result.filter(
        (t) =>
          t.ProductName?.toLowerCase().includes(value) ||
          t.FromWarehouse?.toLowerCase().includes(value) ||
          t.ToWarehouse?.toLowerCase().includes(value) ||
          String(t.TransferID).includes(value)
      );
    }

    // Filter by From Warehouse
    if (fromWarehouseFilter) {
      result = result.filter(
        (t) => t.FromWarehouse === fromWarehouseFilter
      );
    }

    // Filter by To Warehouse
    if (toWarehouseFilter) {
      result = result.filter(
        (t) => t.ToWarehouse === toWarehouseFilter
      );
    }

    // Sort
    switch (sortBy) {
      case "quantity-asc":
        result.sort((a, b) => Number(a.Quantity) - Number(b.Quantity));
        break;

      case "quantity-desc":
        result.sort((a, b) => Number(b.Quantity) - Number(a.Quantity));
        break;

      case "name-asc":
        result.sort((a, b) =>
          (a.ProductName || "").localeCompare(b.ProductName || "")
        );
        break;

      case "name-desc":
        result.sort((a, b) =>
          (b.ProductName || "").localeCompare(a.ProductName || "")
        );
        break;

      case "date-newest":
        result.sort(
          (a, b) =>
            new Date(b.TransferDate) - new Date(a.TransferDate)
        );
        break;

      case "date-oldest":
        result.sort(
          (a, b) =>
            new Date(a.TransferDate) - new Date(b.TransferDate)
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    transfers,
    search,
    fromWarehouseFilter,
    toWarehouseFilter,
    sortBy,
  ]);

  // مجموع تعداد انتقالات
  const totalQuantity = transfers.reduce(
    (total, item) => total + Number(item.Quantity || 0),
    0
  );

  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full overflow-hidden p-3 sm:p-5"
    >
      {/* Background */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br
          from-[#073D3A]
          via-[#032B2D]
          to-[#021F24]
        "
      />

      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute
          -right-32 -top-32
          h-96 w-96 rounded-full
          bg-teal-400/10 blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-32 -left-32
          h-96 w-96 rounded-full
          bg-emerald-400/10 blur-[120px]
        "
      />

      {/* Main Container */}
      <div
        className="
          relative mx-auto max-w-[1400px]
          overflow-hidden
          rounded-2xl
          border border-teal-400/20
          bg-[#032B2D]/75
          p-4 sm:p-6
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
        "
      >
        {/* Top Gradient Line */}
        <div
          className="
            absolute left-0 top-0 h-1 w-full
            bg-gradient-to-l
            from-emerald-400
            via-teal-400
            to-cyan-400
          "
        />

        {/* Header */}
        <div
          className="
            mb-7 flex flex-col
            items-start justify-between
            gap-4 sm:flex-row sm:items-center
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex h-14 w-14 shrink-0
                items-center justify-center
                rounded-2xl
                border border-teal-400/30
                bg-gradient-to-br
                from-teal-400/20
                to-emerald-500/5
                shadow-[0_0_25px_rgba(45,212,191,0.10)]
              "
            >
              <FaExchangeAlt className="text-2xl text-teal-300" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                لیست انتقالات بین گدام‌ها
              </h2>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                مدیریت، مشاهده و بررسی انتقالات محصولات بین گدام‌ها
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Total Transfers */}
          <div
            className="
              flex items-center justify-between
              rounded-2xl
              border border-teal-400/15
              bg-[#021F24]/60
              p-4
            "
          >
            <div>
              <p className="text-xs text-slate-400">
                مجموع انتقالات
              </p>

              <h3 className="mt-2 text-2xl font-bold text-teal-300">
                {transfers.length}
              </h3>
            </div>

            <div
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-xl
                bg-teal-400/10
                text-xl text-teal-300
              "
            >
              <FaExchangeAlt />
            </div>
          </div>

          {/* Total Quantity */}
          <div
            className="
              flex items-center justify-between
              rounded-2xl
              border border-teal-400/15
              bg-[#021F24]/60
              p-4
            "
          >
            <div>
              <p className="text-xs text-slate-400">
                مجموع محصولات انتقالی
              </p>

              <h3 className="mt-2 text-2xl font-bold text-emerald-300">
                {totalQuantity}
              </h3>
            </div>

            <div
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-xl
                bg-emerald-400/10
                text-xl text-emerald-300
              "
            >
              <FaBoxes />
            </div>
          </div>
        </div>

        {/* Search / Filter / Sort */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

          {/* Search */}
          <div
            className="
              flex flex-col justify-center
              rounded-2xl
              border border-teal-400/15
              bg-[#021F24]/60
              p-4
            "
          >
            <label className="mb-2 text-sm font-semibold text-slate-300">
              جستجوی انتقالات
            </label>

            <div className="relative">
              <FaSearch
                className="
                  absolute right-4 top-1/2
                  -translate-y-1/2
                  text-teal-400
                "
              />

              <input
                type="text"
                placeholder="نام محصول یا گدام..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${inputStyle} pr-11`}
              />
            </div>
          </div>

          {/* From Warehouse Filter */}
          <div
            className="
              flex flex-col justify-center
              rounded-2xl
              border border-teal-400/15
              bg-[#021F24]/60
              p-4
            "
          >
            <label
              className="
                mb-2 flex items-center gap-2
                text-sm font-semibold text-slate-300
              "
            >
              <FaFilter className="text-teal-400" />
              فیلتر گدام مبدأ
            </label>

            <select
              value={fromWarehouseFilter}
              onChange={(e) => setFromWarehouseFilter(e.target.value)}
              className={`${inputStyle} cursor-pointer`}
            >
              <option value="" className="bg-[#032B2D]">
                تمام گدام‌ها
              </option>

              {fromWarehouses.map((warehouse, index) => (
                <option
                  key={index}
                  value={warehouse}
                  className="bg-[#032B2D]"
                >
                  {warehouse}
                </option>
              ))}
            </select>
          </div>

          {/* To Warehouse Filter */}
          <div
            className="
              flex flex-col justify-center
              rounded-2xl
              border border-teal-400/15
              bg-[#021F24]/60
              p-4
            "
          >
            <label
              className="
                mb-2 flex items-center gap-2
                text-sm font-semibold text-slate-300
              "
            >
              <FaWarehouse className="text-teal-400" />
              فیلتر گدام مقصد
            </label>

            <select
              value={toWarehouseFilter}
              onChange={(e) => setToWarehouseFilter(e.target.value)}
              className={`${inputStyle} cursor-pointer`}
            >
              <option value="" className="bg-[#032B2D]">
                تمام گدام‌ها
              </option>

              {toWarehouses.map((warehouse, index) => (
                <option
                  key={index}
                  value={warehouse}
                  className="bg-[#032B2D]"
                >
                  {warehouse}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div
            className="
              flex flex-col justify-center
              rounded-2xl
              border border-teal-400/15
              bg-[#021F24]/60
              p-4
            "
          >
            <label
              className="
                mb-2 flex items-center gap-2
                text-sm font-semibold text-slate-300
              "
            >
              <FaSortAmountDown className="text-teal-400" />
              مرتب‌سازی
            </label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`${inputStyle} cursor-pointer`}
            >
              <option value="default" className="bg-[#032B2D]">
                ترتیب پیش‌فرض
              </option>

              <option value="date-newest" className="bg-[#032B2D]">
                جدیدترین تاریخ
              </option>

              <option value="date-oldest" className="bg-[#032B2D]">
                قدیمی‌ترین تاریخ
              </option>

              <option value="quantity-asc" className="bg-[#032B2D]">
                تعداد (صعودی)
              </option>

              <option value="quantity-desc" className="bg-[#032B2D]">
                تعداد (نزولی)
              </option>

              <option value="name-asc" className="bg-[#032B2D]">
                نام محصول (الف تا ی)
              </option>

              <option value="name-desc" className="bg-[#032B2D]">
                نام محصول (ی تا الف)
              </option>
            </select>
          </div>
        </div>

        {/* Table Container */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-teal-400/20
            bg-[#021F24]/60
            shadow-[0_5px_25px_rgba(0,0,0,0.15)]
          "
        >
          {/* Table Header */}
          <div
            className="
              flex flex-col justify-between
              gap-3 border-b border-teal-400/15
              px-4 py-4
              sm:flex-row sm:items-center sm:px-5
            "
          >
            <h3 className="flex items-center gap-2 font-bold text-white">
              <FaExchangeAlt className="text-teal-400" />
              اطلاعات انتقالات
            </h3>

            <span
              className="
                w-fit rounded-lg
                border border-teal-400/20
                bg-teal-400/10
                px-3 py-1.5
                text-xs text-teal-300
              "
            >
              {filteredTransfers.length} انتقال
            </span>
          </div>

          {/* Loading */}
          {loading ? (
            <div
              className="
                flex min-h-[350px]
                flex-col items-center justify-center
                gap-6 p-8
              "
            >
              <div className="relative flex h-24 w-24 items-center justify-center">
                <div
                  className="
                    absolute inset-0 animate-spin
                    rounded-full
                    border-4 border-teal-400/10
                    border-t-teal-400
                    border-r-emerald-400
                  "
                />

                <div
                  className="
                    absolute inset-3 animate-spin
                    rounded-full
                    border-4 border-emerald-400/10
                    border-b-emerald-400
                    [animation-direction:reverse]
                    [animation-duration:1.5s]
                  "
                />

                <div
                  className="
                    flex h-12 w-12 animate-pulse
                    items-center justify-center
                    rounded-xl
                    border border-teal-400/30
                    bg-gradient-to-br
                    from-[#087F70] to-[#032B2D]
                  "
                >
                  <FaExchangeAlt className="text-2xl text-teal-200" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="animate-pulse text-lg font-bold text-teal-300">
                  در حال بارگذاری انتقالات
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  لطفاً چند لحظه صبر کنید...
                </p>
              </div>
            </div>
          ) : filteredTransfers.length === 0 ? (
            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">
              <div
                className="
                  mb-4 flex h-20 w-20
                  items-center justify-center
                  rounded-full
                  border border-teal-400/20
                  bg-teal-400/10
                "
              >
                <FaExchangeAlt className="text-3xl text-teal-400" />
              </div>

              <h3 className="mb-2 font-bold text-slate-300">
                هیچ انتقالی یافت نشد!
              </h3>

              <p className="text-sm text-slate-500">
                هنوز انتقالی ثبت نشده یا نتیجه‌ای برای جستجوی شما وجود ندارد.
              </p>
            </div>
          ) : (
            /* Transfers Table */
            <div className="w-full overflow-x-auto">
              <table
                className="w-full min-w-[950px] border-collapse text-right"
                dir="rtl"
              >
                <thead>
                  <tr
                    className="
                      border-b border-teal-400/20
                      bg-[#064E45]/60
                      text-teal-100
                    "
                  >
                    <th className="px-5 py-4 text-sm font-bold">
                      #
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      نام محصول
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      از گدام
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      به گدام
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      تعداد انتقالی
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      تاریخ انتقال
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTransfers.map((t, index) => (
                    <tr
                      key={t.TransferID}
                      className="
                        border-b border-teal-400/10
                        text-slate-300
                        transition-all duration-200
                        hover:bg-teal-400/[0.06]
                      "
                    >
                      {/* Number */}
                      <td className="px-5 py-5">
                        <span
                          className="
                            inline-flex h-8 min-w-8
                            items-center justify-center
                            rounded-lg
                            border border-teal-400/20
                            bg-teal-400/10
                            px-2
                            text-xs font-bold
                            text-teal-300
                          "
                        >
                          {index + 1}
                        </span>
                      </td>

                      {/* Product Name */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex h-9 w-9
                              items-center justify-center
                              rounded-lg
                              bg-teal-400/10
                              text-teal-300
                            "
                          >
                            <FaBoxes />
                          </div>

                          <span className="font-semibold text-white">
                            {t.ProductName}
                          </span>
                        </div>
                      </td>

                      {/* From Warehouse */}
                      <td className="px-5 py-5">
                        <span className="flex items-center gap-2 text-sm text-slate-400">
                          <FaWarehouse className="text-teal-400" />
                          {t.FromWarehouse}
                        </span>
                      </td>

                      {/* To Warehouse */}
                      <td className="px-5 py-5">
                        <span className="flex items-center gap-2 text-sm text-slate-400">
                          <FaWarehouse className="text-emerald-400" />
                          {t.ToWarehouse}
                        </span>
                      </td>

                      {/* Quantity */}
                      <td className="px-5 py-5">
                        <span
                          className="
                            inline-flex items-center gap-2
                            rounded-lg
                            border border-emerald-400/20
                            bg-emerald-400/10
                            px-3 py-2
                            text-sm font-bold
                            text-emerald-300
                          "
                        >
                          <FaBoxes />
                          {t.Quantity}
                        </span>
                      </td>

                      {/* Transfer Date */}
                      <td className="px-5 py-5">
                        <span className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-400">
                          <FaCalendarAlt className="text-teal-400" />

                          {t.TransferDate
                            ? new Date(t.TransferDate).toLocaleDateString("fa-AF")
                            : "-"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}