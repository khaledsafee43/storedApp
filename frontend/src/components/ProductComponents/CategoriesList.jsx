import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaLayerGroup,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaTags,
} from "react-icons/fa";

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const navigate = useNavigate();

  // پایان وضعیت بارگذاری
  useEffect(() => {
    // اینجا باید دریافت اطلاعات از API قرار بگیرد.
    setLoading(true);
  }, []);

  // حذف کتگوری
  const handleDelete = async (id) => {
    // کد حذف از API را اینجا قرار بده.
  };

  // شروع ویرایش
  const startEdit = (category) => {
    setEditId(category.CategoryID);
    setEditName(category.CategoryName);
    setEditDesc(category.Description || "");
  };

  // لغو ویرایش
  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
    setEditDesc("");
  };

  // ذخیره ویرایش
  const saveEdit = async () => {
    // کد ذخیره تغییرات در API را اینجا قرار بده.
  };

  // جستجو
  const filteredCategories = categories
    .filter((category) => {
      const matchesSearch =
        category.CategoryName?.toLowerCase().includes(
          search.toLowerCase()
        ) ||
        category.Description?.toLowerCase().includes(
          search.toLowerCase()
        );

      const matchesFilter =
        filter === ""
          ? true
          : filter === "with-description"
          ? Boolean(category.Description?.trim())
          : !category.Description?.trim();

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === "name") {
        return a.CategoryName.localeCompare(b.CategoryName);
      }

      if (sort === "id") {
        return a.CategoryID - b.CategoryID;
      }

      return 0;
    });

  // استایل مشترک ورودی‌ها
  const inputStyle = `
    w-full rounded-xl
    border border-teal-500/20
    bg-[#032B2D]/80
    py-3 px-4
    text-sm text-white
    outline-none
    placeholder:text-slate-500
    transition-all duration-300
    focus:border-teal-400
    focus:ring-2 focus:ring-teal-400/10
  `;

  return (
    <div dir="rtl" className="min-h-screen w-full p-3 sm:p-5">

      {/* Main Container */}
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          border border-teal-400/20
          bg-gradient-to-br
          from-[#073D3A]
          via-[#032B2D]
          to-[#021F24]
          p-4 sm:p-6
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >

        {/* Background Glow */}
        <div
          className="
            pointer-events-none absolute
            -top-32 -left-32
            h-72 w-72 rounded-full
            bg-teal-400/10 blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none absolute
            -bottom-32 -right-32
            h-72 w-72 rounded-full
            bg-emerald-400/10 blur-[100px]
          "
        />

        {/* Header */}
        <div
          className="
            relative mb-7
            flex flex-col
            items-start justify-between
            gap-4
            sm:flex-row sm:items-center
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex h-12 w-12
                shrink-0 items-center justify-center
                rounded-xl
                border border-teal-400/30
                bg-teal-400/10
              "
            >
              <FaLayerGroup className="text-xl text-teal-300" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                لیست کتگوری‌های محصولات
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                مدیریت و بررسی کتگوری‌های دواخانه
              </p>
            </div>

          </div>

          {/* Add Category */}
          <button
            onClick={() => navigate("/products/add-category")}
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
            ثبت کتگوری جدید
          </button>

        </div>

        {/* Search / Filter / Sort */}
        <div
          className="
            relative mb-6
            grid grid-cols-1
            gap-4
            rounded-2xl
            border border-teal-400/15
            bg-[#021F24]/60
            p-4
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {/* Search */}
          <div>

            <label
              className="
                mb-2 block
                text-sm font-semibold
                text-slate-300
              "
            >
              جستجوی کتگوری
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
                placeholder="نام کتگوری یا توضیحات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${inputStyle} pr-11`}
              />

            </div>

          </div>

          {/* Filter */}
          <div>

            <label
              className="
                mb-2 flex items-center gap-2
                text-sm font-semibold
                text-slate-300
              "
            >
              <FaFilter className="text-teal-400" />
              فیلتر کتگوری‌ها
            </label>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={inputStyle}
            >
              <option value="">تمام کتگوری‌ها</option>
              <option value="with-description">
                دارای توضیحات
              </option>
              <option value="without-description">
                بدون توضیحات
              </option>
            </select>

          </div>

          {/* Sort */}
          <div>

            <label
              className="
                mb-2 flex items-center gap-2
                text-sm font-semibold
                text-slate-300
              "
            >
              <FaSortAmountDown className="text-teal-400" />
              مرتب‌سازی
            </label>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={inputStyle}
            >
              <option value="">ترتیب پیش‌فرض</option>
              <option value="name">نام کتگوری</option>
              <option value="id">شناسه کتگوری</option>
            </select>

          </div>

        </div>

        {/* Table Container */}
        <div
          className="
            relative overflow-hidden
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
              gap-3
              border-b border-teal-400/15
              px-4 py-4
              sm:flex-row sm:items-center sm:px-5
            "
          >

            <h3
              className="
                flex items-center gap-2
                font-bold text-white
              "
            >
              <FaTags className="text-teal-400" />
              اطلاعات کتگوری‌ها
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
              {filteredCategories.length} کتگوری
            </span>

          </div>

          {/* Loading */}
          {loading ? (

            <div
              className="
                relative flex min-h-[350px]
                flex-col items-center justify-center
                gap-6 overflow-hidden p-8
              "
            >

              {/* Background Glow */}
              <div
                className="
                  pointer-events-none absolute
                  h-40 w-40 rounded-full
                  bg-teal-400/10 blur-[80px]
                "
              />

              {/* Spinner */}
              <div className="relative flex h-24 w-24 items-center justify-center">

                {/* Outer Ring */}
                <div
                  className="
                    absolute inset-0
                    animate-spin
                    rounded-full
                    border-4 border-teal-400/10
                    border-t-teal-400
                    border-r-emerald-400
                  "
                />

                {/* Inner Ring */}
                <div
                  className="
                    absolute inset-3
                    animate-spin
                    rounded-full
                    border-4 border-emerald-400/10
                    border-b-emerald-400
                    [animation-direction:reverse]
                    [animation-duration:1.5s]
                  "
                />

                {/* Center Icon */}
                <div
                  className="
                    flex h-12 w-12
                    animate-pulse
                    items-center justify-center
                    rounded-xl
                    border border-teal-400/30
                    bg-gradient-to-br
                    from-[#087F70]
                    to-[#032B2D]
                    shadow-[0_0_25px_rgba(45,212,191,0.25)]
                  "
                >
                  <FaLayerGroup className="text-2xl text-teal-200" />
                </div>

              </div>

              {/* Loading Text */}
              <div className="relative text-center">

                <h3 className="animate-pulse text-lg font-bold text-teal-300">
                  در حال بارگذاری کتگوری‌ها
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  لطفاً چند لحظه صبر کنید...
                </p>

              </div>

              {/* Animated Dots */}
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

          ) : filteredCategories.length === 0 ? (

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
                <FaLayerGroup className="text-3xl text-teal-400" />
              </div>

              <h3 className="mb-2 font-bold text-slate-300">
                هیچ کتگوری یافت نشد!
              </h3>

              <p className="text-sm text-slate-500">
                هنوز کتگوری ثبت نشده یا نتیجه‌ای برای جستجوی شما وجود ندارد.
              </p>

            </div>

          ) : (

            /* Categories Table */
            <div className="w-full overflow-x-auto">

              <table className="w-full min-w-[750px] border-collapse text-right">

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
                      نام کتگوری
                    </th>

                    <th className="px-5 py-4 text-sm font-bold">
                      توضیحات
                    </th>

                    <th className="px-5 py-4 text-center text-sm font-bold">
                      عملیات
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredCategories.map((c, index) => (

                    <tr
                      key={c.CategoryID}
                      className="
                        border-b border-teal-400/10
                        text-slate-300
                        transition-all duration-200
                        hover:bg-teal-400/[0.06]
                      "
                    >

                      {/* Category ID */}
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
                          {c.CategoryID}
                        </span>

                      </td>

                      {/* Category Name */}
                      <td className="px-5 py-5">

                        {editId === c.CategoryID ? (

                          <input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
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
                              <FaTags />
                            </div>

                            <span className="font-semibold text-white">
                              {c.CategoryName}
                            </span>

                          </div>

                        )}

                      </td>

                      {/* Description */}
                      <td className="px-5 py-5">

                        {editId === c.CategoryID ? (

                          <input
                            value={editDesc}
                            onChange={(e) => setEditDesc(e.target.value)}
                            className="
                              w-full min-w-48
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

                          <span className="text-sm text-slate-400">
                            {c.Description || "بدون توضیحات"}
                          </span>

                        )}

                      </td>

                      {/* Actions */}
                      <td className="px-5 py-5">

                        <div className="flex justify-center gap-2">

                          {editId === c.CategoryID ? (

                            <>

                              {/* Save */}
                              <button
                                onClick={saveEdit}
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
                                لغو
                              </button>

                            </>

                          ) : (

                            <>

                              {/* Edit */}
                              <button
                                onClick={() => startEdit(c)}
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
                                onClick={() => handleDelete(c.CategoryID)}
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