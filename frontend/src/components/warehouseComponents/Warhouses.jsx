// src/WarehouseList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaWarehouse,
  FaSearch,
  FaPlus,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaBoxes,
  FaHashtag,
  FaFilter,
  FaSortAmountDown,
} from "react-icons/fa";

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ویرایش داخل جدول
  const [editingId, setEditingId] = useState(null);

  const [editForm, setEditForm] = useState({
    WarehouseName: "",
    Location: "",
  });

  const navigate = useNavigate();

  // حذف گدام
  const handleDelete = async (id) => {
    if (!window.confirm("آیا از حذف این گدام اطمینان دارید؟")) return;

    // کد حذف API قبلی خودت را اینجا قرار بده.
  };

  // شروع ویرایش
  const startEdit = (warehouse) => {
    setEditingId(warehouse.WarehouseID);

    setEditForm({
      WarehouseName: warehouse.WarehouseName,
      Location: warehouse.Location,
    });
  };

  // ذخیره ویرایش
  const saveEdit = async (id) => {
    // کد ذخیره API قبلی خودت را اینجا قرار بده.
  };

  // لغو ویرایش
  const cancelEdit = () => {
    setEditingId(null);

    setEditForm({
      WarehouseName: "",
      Location: "",
    });
  };

  // جستجوی گدام‌ها
  const filteredWarehouses = warehouses.filter(
    (w) =>
      w.WarehouseName?.toLowerCase().includes(search.toLowerCase()) ||
      w.Location?.toLowerCase().includes(search.toLowerCase())
  );

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
              <FaWarehouse className="text-2xl text-teal-300" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                لیست گدام‌ها
              </h2>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                مدیریت، مشاهده و ویرایش گدام‌های دواخانه
              </p>
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={() => navigate("/MedicineWarehouse")}
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl
              border border-emerald-300/20
              bg-gradient-to-l
              from-[#059669] to-[#0F766E]
              px-5 py-3
              text-sm font-bold text-white
              shadow-[0_5px_20px_rgba(16,185,129,0.15)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_5px_25px_rgba(16,185,129,0.3)]
              sm:w-auto
            "
          >
            <FaPlus />
            ثبت گدام جدید
          </button>
        </div>

        {/* Statistics / Search / Filter / Sort */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

          {/* Warehouse Count */}
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
                مجموع گدام‌ها
              </p>

              <h3 className="mt-2 text-2xl font-bold text-teal-300">
                {warehouses.length}
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
              <FaBoxes />
            </div>
          </div>

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
              جستجوی گدام
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
                placeholder="جستجو بر اساس نام یا موقعیت..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${inputStyle} pr-11`}
              />
            </div>
          </div>

          {/* Filter */}
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
              فیلتر گدام‌ها
            </label>

            <select
              defaultValue=""
              className={`${inputStyle} cursor-pointer`}
            >
              <option value="" className="bg-[#032B2D]">
                تمام گدام‌ها
              </option>

              <option value="with-location" className="bg-[#032B2D]">
                دارای موقعیت
              </option>

              <option value="without-location" className="bg-[#032B2D]">
                بدون موقعیت
              </option>
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
              defaultValue=""
              className={`${inputStyle} cursor-pointer`}
            >
              <option value="" className="bg-[#032B2D]">
                ترتیب پیش‌فرض
              </option>

              <option value="name-asc" className="bg-[#032B2D]">
                نام گدام (الف تا ی)
              </option>

              <option value="name-desc" className="bg-[#032B2D]">
                نام گدام (ی تا الف)
              </option>

              <option value="id-asc" className="bg-[#032B2D]">
                شناسه (صعودی)
              </option>

              <option value="id-desc" className="bg-[#032B2D]">
                شناسه (نزولی)
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
              <FaWarehouse className="text-teal-400" />
              اطلاعات گدام‌ها
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
              {filteredWarehouses.length} گدام
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
                    shadow-[0_0_25px_rgba(45,212,191,0.25)]
                  "
                >
                  <FaWarehouse className="text-2xl text-teal-200" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="animate-pulse text-lg font-bold text-teal-300">
                  در حال بارگذاری گدام‌ها
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  لطفاً چند لحظه صبر کنید...
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400" />

                <span
                  className="
                    h-2 w-2 animate-bounce
                    rounded-full bg-teal-400
                    [animation-delay:150ms]
                  "
                />

                <span
                  className="
                    h-2 w-2 animate-bounce
                    rounded-full bg-teal-400
                    [animation-delay:300ms]
                  "
                />
              </div>
            </div>
          ) : filteredWarehouses.length === 0 ? (
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
                <FaWarehouse className="text-3xl text-teal-400" />
              </div>

              <h3 className="mb-2 font-bold text-slate-300">
                هیچ گدامی یافت نشد!
              </h3>

              <p className="text-sm text-slate-500">
                هنوز گدامی ثبت نشده یا نتیجه‌ای برای جستجوی شما وجود ندارد.
              </p>
            </div>
          ) : (
            /* Warehouses Table */
            <div className="w-full overflow-x-auto">
              <table
                className="w-full min-w-[850px] border-collapse text-right"
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
                      شناسه
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      نام گدام
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      محل گدام
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      تاریخ ایجاد
                    </th>

                    <th className="px-5 py-4 text-center text-sm font-bold">
                      عملیات
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredWarehouses.map((w) => (
                    <tr
                      key={w.WarehouseID}
                      className="
                        border-b border-teal-400/10
                        text-slate-300
                        transition-all duration-200
                        hover:bg-teal-400/[0.06]
                      "
                    >
                      {/* Warehouse ID */}
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
                          {w.WarehouseID}
                        </span>
                      </td>

                      {/* Warehouse Name */}
                      <td className="px-5 py-5">
                        {editingId === w.WarehouseID ? (
                          <input
                            value={editForm.WarehouseName}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                WarehouseName: e.target.value,
                              })
                            }
                            className="
                              w-full min-w-40
                              rounded-lg
                              border border-teal-400/30
                              bg-[#032B2D]
                              px-3 py-2
                              text-sm text-white
                              outline-none
                              focus:border-teal-400
                            "
                          />
                        ) : (
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
                              <FaWarehouse />
                            </div>

                            <span className="font-semibold text-white">
                              {w.WarehouseName}
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Location */}
                      <td className="px-5 py-5">
                        {editingId === w.WarehouseID ? (
                          <input
                            value={editForm.Location}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                Location: e.target.value,
                              })
                            }
                            className="
                              w-full min-w-40
                              rounded-lg
                              border border-teal-400/30
                              bg-[#032B2D]
                              px-3 py-2
                              text-sm text-white
                              outline-none
                              focus:border-teal-400
                            "
                          />
                        ) : (
                          <span className="flex items-center gap-2 text-sm text-slate-400">
                            <FaMapMarkerAlt className="text-teal-400" />
                            {w.Location || "ثبت نشده"}
                          </span>
                        )}
                      </td>

                      {/* Created At */}
                      <td className="px-5 py-5">
                        <span className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-400">
                          <FaCalendarAlt className="text-teal-400" />

                          {w.CreatedAt
                            ? new Date(w.CreatedAt).toLocaleDateString("fa-AF")
                            : "-"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {editingId === w.WarehouseID ? (
                            <>
                              {/* Save */}
                              <button
                                onClick={() => saveEdit(w.WarehouseID)}
                                title="ذخیره"
                                className="
                                  flex items-center gap-2
                                  rounded-lg
                                  border border-emerald-400/20
                                  bg-emerald-500/10
                                  px-3 py-2
                                  text-xs font-semibold
                                  text-emerald-300
                                  transition
                                  hover:bg-emerald-500
                                  hover:text-white
                                "
                              >
                                <FaSave />
                                ذخیره
                              </button>

                              {/* Cancel */}
                              <button
                                onClick={cancelEdit}
                                title="انصراف"
                                className="
                                  flex items-center gap-2
                                  rounded-lg
                                  border border-slate-400/20
                                  bg-slate-500/10
                                  px-3 py-2
                                  text-xs font-semibold
                                  text-slate-300
                                  transition
                                  hover:bg-slate-500
                                  hover:text-white
                                "
                              >
                                <FaTimes />
                                انصراف
                              </button>
                            </>
                          ) : (
                            <>
                              {/* Edit */}
                              <button
                                onClick={() => startEdit(w)}
                                title="ویرایش"
                                className="
                                  flex items-center gap-2
                                  rounded-lg
                                  border border-sky-400/20
                                  bg-sky-500/10
                                  px-3 py-2
                                  text-xs font-semibold
                                  text-sky-300
                                  transition
                                  hover:bg-sky-500
                                  hover:text-white
                                "
                              >
                                <FaEdit />
                                ویرایش
                              </button>

                              {/* Delete */}
                              <button
                                onClick={() => handleDelete(w.WarehouseID)}
                                title="حذف"
                                className="
                                  flex items-center gap-2
                                  rounded-lg
                                  border border-rose-400/20
                                  bg-rose-500/10
                                  px-3 py-2
                                  text-xs font-semibold
                                  text-rose-300
                                  transition
                                  hover:bg-rose-500
                                  hover:text-white
                                "
                              >
                                <FaTrash />
                                حذف
                              </button>
                            </>
                          )}
                        </div>
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