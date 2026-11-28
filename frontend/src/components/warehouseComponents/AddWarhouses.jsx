import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaWarehouse,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHashtag,
  FaSave,
  FaTimes,
  FaPlus,
  FaBoxes,
} from "react-icons/fa";

export default function AddWarhouses() {
  const [formData, setFormData] = useState({
    WarehouseID: "",
    WarehouseName: "",
    Location: "",
    CreatedAt: new Date().toISOString().slice(0, 10),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // تغییر اطلاعات فرم
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ثبت گدام
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // درخواست ثبت گدام با Axios را اینجا قرار بده.
  };

  // استایل مشترک Input
  const inputStyle = `
    w-full rounded-xl
    border border-teal-400/20
    bg-[#021F24]/80
    py-3.5 px-4
    text-sm text-white
    outline-none
    placeholder:text-slate-500
    transition-all duration-300
    hover:border-teal-400/40
    focus:border-teal-400
    focus:ring-2 focus:ring-teal-400/10
  `;

  return (
    <div
      dir="rtl"
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden
        p-3 sm:p-6
      "
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

      {/* Main Card */}
      <div
        className="
          relative w-full max-w-2xl
          overflow-hidden
          rounded-3xl
          border border-teal-400/20
          bg-[#032B2D]/80
          shadow-[0_20px_70px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
        "
      >

        {/* Top Gradient Line */}
        <div
          className="
            h-1.5 w-full
            bg-gradient-to-l
            from-emerald-400
            via-teal-400
            to-cyan-400
          "
        />

        {/* Card Header */}
        <div className="border-b border-teal-400/15 p-5 sm:p-7">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-center gap-4">

              {/* Icon */}
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
                  ثبت گدام جدید
                </h2>

                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  اطلاعات گدام جدید را وارد نمایید.
                </p>
              </div>

            </div>

            {/* Badge */}
            <div
              className="
                flex w-fit items-center gap-2
                rounded-xl
                border border-emerald-400/20
                bg-emerald-400/10
                px-4 py-2
                text-xs font-semibold
                text-emerald-300
              "
            >
              <FaPlus />
              گدام جدید
            </div>

          </div>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7">

          {/* Form Description */}
          <div className="mb-6 flex items-center gap-2">

            <FaBoxes className="text-teal-400" />

            <h3 className="text-sm font-bold text-teal-300">
              مشخصات گدام
            </h3>

            <div className="h-px flex-1 bg-teal-400/15" />

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Warehouse ID */}
            <div className="sm:col-span-2">

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaHashtag className="text-teal-400" />
                شناسه گدام
              </label>

              <input
                type="text"
                name="WarehouseID"
                value={formData.WarehouseID}
                readOnly
                placeholder="به صورت خودکار ساخته می‌شود"
                className={`
                  ${inputStyle}
                  cursor-not-allowed
                  bg-[#021F24]/50
                  text-teal-300/70
                `}
              />

              <p className="mt-2 text-xs text-slate-500">
                شناسه گدام توسط سیستم ایجاد خواهد شد.
              </p>

            </div>

            {/* Warehouse Name */}
            <div className="sm:col-span-2">

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaWarehouse className="text-teal-400" />
                نام گدام
                <span className="text-rose-400">*</span>
              </label>

              <input
                type="text"
                name="WarehouseName"
                value={formData.WarehouseName}
                onChange={handleChange}
                required
                placeholder="مثال: گدام مرکزی کابل"
                className={inputStyle}
              />

            </div>

            {/* Location */}
            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaMapMarkerAlt className="text-teal-400" />
                محل گدام
              </label>

              <input
                type="text"
                name="Location"
                value={formData.Location}
                onChange={handleChange}
                placeholder="مثال: ناحیه ۱۰، کابل"
                className={inputStyle}
              />

            </div>

            {/* Created At */}
            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaCalendarAlt className="text-teal-400" />
                تاریخ ایجاد
              </label>

              <input
                type="date"
                name="CreatedAt"
                value={formData.CreatedAt}
                onChange={handleChange}
                readOnly
                className={`
                  ${inputStyle}
                  cursor-not-allowed
                  text-slate-300
                `}
              />

            </div>

          </div>

          {/* Info Box */}
          <div
            className="
              mt-7 flex items-start gap-3
              rounded-xl
              border border-teal-400/15
              bg-teal-400/[0.05]
              p-4
            "
          >

            <div className="mt-0.5 text-teal-400">
              <FaWarehouse />
            </div>

            <p className="text-xs leading-6 text-slate-400">
              لطفاً نام و محل گدام را با دقت وارد کنید.
              اطلاعات گدام پس از ثبت در سیستم قابل مدیریت خواهد بود.
            </p>

          </div>

          {/* Buttons */}
          <div
            className="
              mt-8 flex flex-col-reverse
              gap-3 border-t border-teal-400/15
              pt-6 sm:flex-row sm:justify-between
            "
          >

            {/* Cancel */}
            <button
              type="button"
              onClick={() => navigate("/warehouses")}
              className="
                flex items-center justify-center gap-2
                rounded-xl
                border border-slate-400/20
                bg-slate-500/10
                px-6 py-3
                text-sm font-semibold
                text-slate-300
                transition-all duration-300
                hover:border-rose-400/30
                hover:bg-rose-500/10
                hover:text-rose-300
              "
            >
              <FaTimes />
              انصراف
            </button>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                flex items-center justify-center gap-2
                rounded-xl
                border border-emerald-300/20
                bg-gradient-to-l
                from-[#059669]
                to-[#0F766E]
                px-8 py-3
                text-sm font-bold text-white
                shadow-[0_5px_20px_rgba(16,185,129,0.15)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_5px_25px_rgba(16,185,129,0.3)]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  در حال ذخیره...
                </>
              ) : (
                <>
                  <FaSave />
                  ذخیره گدام
                </>
              )}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}