import React, { useEffect, useState } from "react";
import {
  FaBox,
  FaPlus,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const navigate = useNavigate();

  // دریافت محصولات
  useEffect(() => {
    // فعلاً چون API در کد ارائه‌شده مشخص نیست،
    // لودر بعد از یک ثانیه متوقف می‌شود.
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // جستجوی محصولات
  const filteredProducts = products.filter((product) =>
    [
      product.ProductName,
      product.CategoryName,
      product.WarehouseName,
    ].some((value) =>
      String(value ?? "").toLowerCase().includes(search.toLowerCase())
    )
  );

  // ویرایش محصول
  const handleEdit = (product) => {
    setEditId(product._id);
    setEditData({ ...product });
  };

  // تغییر اطلاعات محصول
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  // لغو ویرایش
  const handleCancel = () => {
    setEditId(null);
    setEditData({});
  };

  // ذخیره محصول
  const handleSave = () => {
    setProducts((prev) =>
      prev.map((product) =>
        product._id === editId ? { ...product, ...editData } : product
      )
    );

    setEditId(null);
    setEditData({});
  };

  // حذف محصول
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟"
    );

    if (confirmDelete) {
      setProducts((prev) =>
        prev.filter((product) => product._id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-[#073D3A] via-[#032B2D] to-[#021F24] p-4 text-white sm:p-6">

      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-teal-400/20 bg-[#032B2D]/80 p-5 shadow-lg shadow-black/20 sm:flex-row sm:items-center">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
            <FaBox className="text-2xl" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-teal-300 sm:text-2xl">
              لیست محصولات
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              مدیریت و مشاهده تمام محصولات
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/products")}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:scale-105 hover:shadow-teal-400/30"
        >
          <FaPlus />
          ثبت محصول جدید
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-teal-400/20 bg-[#032B2D]/70 p-4 sm:flex-row sm:items-center">

        <div className="relative flex-1">
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-400" />

          <input
            type="text"
            placeholder="جستجوی نام محصول، دسته‌بندی یا انبار..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-teal-400/20 bg-[#021F24]/80 py-3 pr-11 pl-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/10"
          />
        </div>

        <div className="flex gap-2">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-teal-400/20 bg-[#021F24]/80 px-4 py-3 text-sm text-teal-300 transition hover:bg-teal-400/10 sm:flex-none"
          >
            <FaFilter />
            فیلتر
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-teal-400/20 bg-[#021F24]/80 px-4 py-3 text-sm text-teal-300 transition hover:bg-teal-400/10 sm:flex-none"
          >
            <FaSortAmountDown />
            مرتب‌سازی
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-2xl border border-teal-400/20 bg-[#032B2D]/70 shadow-xl">

        <div className="border-b border-teal-400/10 p-5">
          <h3 className="font-bold text-teal-300">
            محصولات ثبت‌شده
          </h3>
        </div>

        {loading ? (

          /* Attractive Loader */
          <div className="flex min-h-[350px] flex-col items-center justify-center gap-6 p-8">

            <div className="relative flex h-24 w-24 items-center justify-center">

              <div className="absolute inset-0 animate-spin rounded-full border-4 border-teal-400/10 border-t-teal-400" />

              <div className="absolute inset-3 animate-spin rounded-full border-4 border-emerald-400/10 border-b-emerald-400 [animation-direction:reverse] [animation-duration:1.5s]" />

              <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-xl border border-teal-400/30 bg-gradient-to-br from-[#087F70] to-[#032B2D] shadow-[0_0_25px_rgba(45,212,191,0.25)]">
                <FaBox className="text-2xl text-teal-200" />
              </div>

            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-teal-300">
                در حال بارگذاری محصولات
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                لطفاً چند لحظه صبر کنید...
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400 [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400 [animation-delay:300ms]" />
            </div>

          </div>

        ) : filteredProducts.length === 0 ? (

          /* Empty State */
          <div className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">

            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-teal-400/20 bg-teal-400/10">
              <FaBox className="text-3xl text-teal-400" />
            </div>

            <h3 className="text-lg font-bold text-teal-300">
              محصولی پیدا نشد
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              هنوز محصولی ثبت نشده است یا نتیجه‌ای برای جستجوی شما وجود ندارد.
            </p>

          </div>

        ) : (

          /* Table */
          <div className="w-full overflow-x-auto">

            <table className="w-full min-w-[750px] text-right text-sm">

              <thead className="bg-[#021F24]/80 text-teal-300">
                <tr>
                  <th className="whitespace-nowrap p-4">شماره</th>
                  <th className="whitespace-nowrap p-4">نام محصول</th>
                  <th className="whitespace-nowrap p-4">دسته‌بندی</th>
                  <th className="whitespace-nowrap p-4">انبار</th>
                  <th className="whitespace-nowrap p-4">قیمت</th>
                  <th className="whitespace-nowrap p-4">موجودی</th>
                  <th className="whitespace-nowrap p-4 text-center">عملیات</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr
                    key={product._id}
                    className="border-t border-teal-400/10 transition hover:bg-teal-400/5"
                  >

                    <td className="p-4 text-slate-400">
                      {index + 1}
                    </td>

                    <td className="p-4 font-semibold text-white">
                      {editId === product._id ? (
                        <input
                          name="ProductName"
                          value={editData.ProductName || ""}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-teal-400/30 bg-[#021F24] p-2 text-white outline-none"
                        />
                      ) : (
                        product.ProductName
                      )}
                    </td>

                    <td className="p-4 text-slate-300">
                      {product.CategoryName || "-"}
                    </td>

                    <td className="p-4 text-slate-300">
                      {product.WarehouseName || "-"}
                    </td>

                    <td className="p-4 text-emerald-300">
                      {editId === product._id ? (
                        <input
                          name="Price"
                          type="number"
                          value={editData.Price || ""}
                          onChange={handleChange}
                          className="w-24 rounded-lg border border-teal-400/30 bg-[#021F24] p-2 text-white outline-none"
                        />
                      ) : (
                        product.Price
                      )}
                    </td>

                    <td className="p-4 text-slate-300">
                      {editId === product._id ? (
                        <input
                          name="Quantity"
                          type="number"
                          value={editData.Quantity || ""}
                          onChange={handleChange}
                          className="w-20 rounded-lg border border-teal-400/30 bg-[#021F24] p-2 text-white outline-none"
                        />
                      ) : (
                        product.Quantity
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">

                        {editId === product._id ? (
                          <>
                            <button
                              onClick={handleSave}
                              title="ذخیره"
                              className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 transition hover:bg-emerald-500/20"
                            >
                              <FaSave />
                            </button>

                            <button
                              onClick={handleCancel}
                              title="لغو"
                              className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20"
                            >
                              <FaTimes />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEdit(product)}
                              title="ویرایش"
                              className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition hover:bg-blue-500/20"
                            >
                              <FaEdit />
                            </button>

                            <button
                              onClick={() => handleDelete(product._id)}
                              title="حذف"
                              className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20"
                            >
                              <FaTrash />
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
  );
}