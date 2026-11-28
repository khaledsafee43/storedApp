// src/RegisterTransfer.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaWarehouse,
  FaBoxes,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHashtag,
  FaSave,
  FaTimes,
  FaBox,
  FaArrowLeft,
  FaTruck,
  FaClipboardCheck,
} from "react-icons/fa";

export default function AddTransfer() {
  const [formData, setFormData] = useState({
    ProductID: "",
    FromWarehouseID: "",
    ToWarehouseID: "",
    Quantity: 0,
    TransferDate: new Date().toISOString().slice(0, 10),
  });

  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  const navigate = useNavigate();

  // تغییر اطلاعات فرم
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ثبت انتقال
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.FromWarehouseID === formData.ToWarehouseID) {
      alert("گدام مبدأ و مقصد نمی‌توانند یکسان باشند ❌");
      return;
    }

    if (Number(formData.Quantity) < 1) {
      alert("تعداد محصولات باید حداقل یک عدد باشد.");
      return;
    }

    setLoading(true);
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
    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

  return (
    <div
      dir="rtl"
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden p-3 sm:p-6
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
          relative w-full max-w-3xl
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

        {/* Header */}
        <div className="border-b border-teal-400/15 p-5 sm:p-7">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

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
                  ثبت انتقال بین گدام‌ها
                </h2>

                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  انتقال محصولات از یک گدام به گدام دیگر
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
              <FaTruck />
              انتقال محصول
            </div>

          </div>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7">

          {/* Section Title */}
          <div className="mb-6 flex items-center gap-2">

            <FaClipboardCheck className="text-teal-400" />

            <h3 className="text-sm font-bold text-teal-300">
              مشخصات انتقال
            </h3>

            <div className="h-px flex-1 bg-teal-400/15" />

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Product */}
            <div className="sm:col-span-2">

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaBox className="text-teal-400" />

                انتخاب محصول

                <span className="text-rose-400">*</span>
              </label>

              <select
                name="ProductID"
                value={formData.ProductID}
                onChange={handleChange}
                required
                disabled={dataLoading}
                className={inputStyle}
              >
                <option value="" className="bg-[#032B2D]">
                  {dataLoading
                    ? "در حال دریافت محصولات..."
                    : "انتخاب محصول"}
                </option>

                {products.map((p) => (
                  <option
                    key={p.ProductID}
                    value={p.ProductID}
                    className="bg-[#032B2D]"
                  >
                    {p.ProductName}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-xs text-slate-500">
                محصولی را که می‌خواهید انتقال دهید انتخاب کنید.
              </p>

            </div>

            {/* From Warehouse */}
            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaWarehouse className="text-teal-400" />

                گدام مبدأ

                <span className="text-rose-400">*</span>
              </label>

              <select
                name="FromWarehouseID"
                value={formData.FromWarehouseID}
                onChange={handleChange}
                required
                disabled={dataLoading}
                className={inputStyle}
              >
                <option value="" className="bg-[#032B2D]">
                  انتخاب گدام مبدأ
                </option>

                {warehouses
                  .filter(
                    (w) =>
                      String(w.WarehouseID) !==
                      String(formData.ToWarehouseID)
                  )
                  .map((w) => (
                    <option
                      key={w.WarehouseID}
                      value={w.WarehouseID}
                      className="bg-[#032B2D]"
                    >
                      {w.WarehouseName}
                    </option>
                  ))}
              </select>

            </div>

            {/* To Warehouse */}
            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaWarehouse className="text-emerald-400" />

                گدام مقصد

                <span className="text-rose-400">*</span>
              </label>

              <select
                name="ToWarehouseID"
                value={formData.ToWarehouseID}
                onChange={handleChange}
                required
                disabled={dataLoading}
                className={inputStyle}
              >
                <option value="" className="bg-[#032B2D]">
                  انتخاب گدام مقصد
                </option>

                {warehouses
                  .filter(
                    (w) =>
                      String(w.WarehouseID) !==
                      String(formData.FromWarehouseID)
                  )
                  .map((w) => (
                    <option
                      key={w.WarehouseID}
                      value={w.WarehouseID}
                      className="bg-[#032B2D]"
                    >
                      {w.WarehouseName}
                    </option>
                  ))}
              </select>

            </div>

            {/* Transfer Direction */}
            <div className="sm:col-span-2">

              <div
                className="
                  flex flex-col items-center
                  justify-between gap-3
                  rounded-xl
                  border border-teal-400/15
                  bg-[#021F24]/60
                  p-4
                  sm:flex-row
                "
              >

                {/* From */}
                <div className="flex flex-1 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                    <FaWarehouse />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      انتقال از
                    </p>

                    <p className="truncate text-sm font-semibold text-white">
                      {warehouses.find(
                        (w) =>
                          String(w.WarehouseID) ===
                          String(formData.FromWarehouseID)
                      )?.WarehouseName || "گدام مبدأ"}
                    </p>
                  </div>

                </div>

                {/* Arrow */}
                <div
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-teal-400/20
                    bg-teal-400/10
                    text-teal-300
                  "
                >
                  <FaArrowLeft />
                </div>

                {/* To */}
                <div className="flex flex-1 items-center gap-3 sm:justify-end">

                  <div className="min-w-0 sm:text-left">
                    <p className="text-xs text-slate-500">
                      انتقال به
                    </p>

                    <p className="truncate text-sm font-semibold text-white">
                      {warehouses.find(
                        (w) =>
                          String(w.WarehouseID) ===
                          String(formData.ToWarehouseID)
                      )?.WarehouseName || "گدام مقصد"}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <FaWarehouse />
                  </div>

                </div>

              </div>

            </div>

            {/* Quantity */}
            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaBoxes className="text-teal-400" />

                تعداد محصولات

                <span className="text-rose-400">*</span>
              </label>

              <input
                type="number"
                name="Quantity"
                value={formData.Quantity}
                onChange={handleChange}
                min="1"
                required
                placeholder="تعداد را وارد کنید"
                className={inputStyle}
              />

            </div>

            {/* Transfer Date */}
            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FaCalendarAlt className="text-teal-400" />

                تاریخ انتقال
              </label>

              <input
                type="date"
                name="TransferDate"
                value={formData.TransferDate}
                onChange={handleChange}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Information Box */}
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
              <FaMapMarkerAlt />
            </div>

            <p className="text-xs leading-6 text-slate-400">
              قبل از ثبت انتقال، گدام مبدأ، گدام مقصد و تعداد محصولات
              را بررسی کنید. گدام مبدأ و مقصد باید متفاوت باشند.
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
              onClick={() => navigate("/transfers")}
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
              disabled={loading || dataLoading}
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
                  در حال ثبت انتقال...
                </>
              ) : (
                <>
                  <FaSave />
                  ثبت انتقال
                </>
              )}

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}