import React, { useState } from "react";

import {
  FaBoxOpen,
  FaTags,
  FaWarehouse,
  FaMoneyBillWave,
  FaHashtag,
  FaCalendarAlt,
  FaPlus,
  FaSave,
} from "react-icons/fa";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    ProductName: "",
    CategoryID: "",
    Price: "",
    Quantity: "",
    ExpiryDate: "",
  });

  const [CategoryID, setCategoryID] = useState([]);
  const [warehouseID, setWarehouseID] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // Reusable Input Style
  const inputStyle = `
    w-full
    h-12
    rounded-xl
    border border-teal-500/20
    bg-[#032B2D]/80
    px-4
    text-right
    text-sm
    text-teal-50
    placeholder:text-slate-500
    outline-none
    transition-all duration-300
    hover:border-teal-400/40
    focus:border-teal-400
    focus:bg-[#064044]
    focus:ring-2
    focus:ring-teal-400/10
    focus:shadow-[0_0_15px_rgba(20,184,166,0.12)]
  `;

  // Reusable Label Style
  const labelStyle = `
    mb-2
    flex items-center gap-2
    text-sm font-semibold
    text-slate-200
  `;

  // Reusable Field Component
  const FormField = ({ label, icon: Icon, children }) => (
    <div className="group">
      <label className={labelStyle}>
        <Icon className="text-teal-400 text-base" />
        {label}
      </label>

      {children}
    </div>
  );

  return (
    <div
      dir="rtl"
      className="w-full p-3 sm:p-5"
    >
      {/* Main Form Container */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-6xl
          overflow-hidden
          rounded-2xl
          border border-teal-400/20
          bg-gradient-to-br
          from-[#073D3A]
          via-[#032B2D]
          to-[#021F24]
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >

        {/* Decorative Background */}
        <div
          className="
            pointer-events-none
            absolute -top-32 -left-32
            h-72 w-72
            rounded-full
            bg-teal-400/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-32 -right-32
            h-72 w-72
            rounded-full
            bg-emerald-400/10
            blur-[100px]
          "
        />

        {/* Form Header */}
        <div
          className="
            relative
            border-b border-teal-400/15
            px-6 py-7
            sm:px-8
          "
        >
          <div className="flex items-center gap-4">

            {/* Header Icon */}
            <div
              className="
                flex h-14 w-14
                shrink-0
                items-center justify-center
                rounded-2xl
                border border-teal-400/30
                bg-gradient-to-br
                from-teal-400/20
                to-emerald-500/5
                shadow-[0_0_20px_rgba(20,184,166,0.10)]
              "
            >
              <FaBoxOpen className="text-2xl text-teal-300" />
            </div>

            {/* Header Text */}
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                ثبت محصول جدید
              </h2>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                اطلاعات محصول جدید را در سیستم دواخانه ثبت کنید.
              </p>
            </div>

          </div>

          {/* Header Badge */}
          <div
            className="
              absolute left-6 top-8
              hidden sm:flex
              items-center gap-2
              rounded-full
              border border-teal-400/20
              bg-teal-400/5
              px-3 py-2
              text-xs text-teal-300
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            محصول جدید
          </div>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          className="relative space-y-7 p-6 sm:p-8"
        >

          {/* Section Title */}
          <div className="flex items-center gap-2">
            <FaPlus className="text-teal-400" />

            <h3 className="text-sm font-bold text-teal-100">
              مشخصات و اطلاعات محصول
            </h3>

            <div className="h-px flex-1 bg-gradient-to-l from-teal-400/30 to-transparent" />
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">

            {/* Product Name */}
            <FormField
              label="نام محصول"
              icon={FaBoxOpen}
            >
              <input
                type="text"
                name="ProductName"
                value={formData.ProductName}
                onChange={handleChange}
                className={inputStyle}
                placeholder="مثلاً: واکسین حیوانی"
                required
              />
            </FormField>

            {/* Category */}
            <FormField
              label="کتگوری محصول"
              icon={FaTags}
            >
              <select
                name="CategoryID"
                value={formData.CategoryID}
                onChange={handleChange}
                required
                className={inputStyle}
              >
                <option value="" className="bg-[#032B2D]">
                  انتخاب کتگوری...
                </option>

                {CategoryID.map((c) => (
                  <option
                    key={c.CategoryID}
                    value={c.CategoryID}
                    className="bg-[#032B2D]"
                  >
                    ({c.CategoryID} -- ID) {c.CategoryName}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Warehouse */}
            <FormField
              label="انتخاب گدام"
              icon={FaWarehouse}
            >
              <select
                name="warehouseID"
                value={formData.warehouseID}
                onChange={handleChange}
                required
                className={inputStyle}
              >
                <option value="" className="bg-[#032B2D]">
                  انتخاب گدام...
                </option>

                {warehouseID.map((c) => (
                  <option
                    key={c.WarehouseID}
                    value={c.WarehouseID}
                    className="bg-[#032B2D]"
                  >
                    ({c.WarehouseID} -- ID) {c.WarehouseName}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Price */}
            <FormField
              label="قیمت محصول (افغانی)"
              icon={FaMoneyBillWave}
            >
              <div className="relative">
                <input
                  type="number"
                  name="Price"
                  value={formData.Price}
                  onChange={handleChange}
                  className={`${inputStyle} pl-16`}
                  placeholder="مثلاً: 200"
                  required
                />

                <span
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    rounded-lg
                    bg-teal-400/10
                    px-2 py-1
                    text-xs font-bold
                    text-teal-300
                  "
                >
                  AFN
                </span>
              </div>
            </FormField>

            {/* Quantity */}
            <FormField
              label="تعداد محصول"
              icon={FaHashtag}
            >
              <input
                type="number"
                name="Quantity"
                value={formData.Quantity}
                onChange={handleChange}
                className={inputStyle}
                placeholder="مثلاً: 50"
                required
              />
            </FormField>

            {/* Expiry Date */}
            <FormField
              label="تاریخ انقضا"
              icon={FaCalendarAlt}
            >
              <input
                type="date"
                name="ExpiryDate"
                value={formData.ExpiryDate}
                onChange={handleChange}
                className={inputStyle}
              />
            </FormField>

          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-l from-transparent via-teal-400/20 to-transparent" />

          {/* Form Footer */}
          <div
            className="
              flex flex-col-reverse
              items-center justify-between
              gap-4
              sm:flex-row
            "
          >

            {/* Information */}
            <p className="text-xs text-slate-400">
              <span className="text-teal-400">*</span>
              فیلدهای علامت‌گذاری‌شده الزامی هستند.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                group
                flex w-full sm:w-auto
                min-w-48
                items-center justify-center
                gap-3
                rounded-xl
                border border-emerald-300/20
                bg-gradient-to-l
                from-[#059669]
                via-[#0D9488]
                to-[#0F766E]
                px-7 py-3.5
                text-sm font-bold
                text-white
                shadow-[0_5px_20px_rgba(16,185,129,0.15)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_5px_25px_rgba(16,185,129,0.30)]
                active:scale-95
              "
            >
              <FaSave className="text-lg transition-transform duration-300 group-hover:scale-110" />

              ثبت محصول

            </button>

          </div>

        </form>
      </div>
    </div>
  );
}