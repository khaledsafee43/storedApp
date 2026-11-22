import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    ProductName: "",
    CategoryID: "",
    Price: "", // ✅ اصلاح شد (قبلاً UnitPrice بود)
    Quantity: "",
    ExpiryDate: "", // ✅ اضافه شد
  });
  const [CategoryID, setCategoryID] = useState([]);
  const [warehouseID, setWarehouseID] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [CategoryID, warehouseID] = await Promise.all([
          axios.get("http://localhost:5000/api/productCategories"),
          axios.get("http://localhost:5000/api/warehouses"),
        ]);
        setCategoryID(CategoryID.data);
        setWarehouseID(warehouseID.data);
      } catch (error) {
        console.error("Error fetching customers/products:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ محصول با موفقیت ثبت شد");
        setFormData({
          ProductName: "",
          CategoryID: "",
          Price: "",
          Quantity: "",
          ExpiryDate: "",
          WarehouseID: "",
        });
      } else {
        const data = await response.json();
        alert(`❌ خطا: ${data.error}`);
      }
    } catch (error) {
      console.error("❌ خطا در ارسال فرم:", error);
      alert("خطایی در برقراری ارتباط با سرور رخ داد");
    }
  };

  return (
    <div className="p-4">
      <div className="bg-slate-900/80 shadow shadow-[#38bdf8] p-8 rounded-[8px] text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          📦 ثبت محصول جدید
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full h-full">
          {/* grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block text-white text-right mb-1">
                نام محصول
              </label>
              <input
                type="text"
                name="ProductName"
                value={formData.ProductName}
                onChange={handleChange}
                className="bg-[#111827] text-white rounded-lg border border-gray-700 p-1.5 focus:border-green-400 focus:ring focus:ring-green-400 w-full text-right"
                placeholder="مثال: واکسن حیوانی"
                required
              />
            </div>

            {/* Category ID */}
            <div>
              <label className="block text-white text-right mb-1">
                آی دی کتگوری
              </label>
              <select
                name="CategoryID"
                value={formData.CategoryID}
                onChange={handleChange}
                required
                className="bg-[#111827] text-white rounded-lg border border-gray-700 p-1.5 focus:border-green-400 focus:ring focus:ring-green-400 w-full text-right"
              >
                <option value="">انتخاب کتگوری...</option>
                {CategoryID.map((c) => (
                  <option key={c.CategoryID} value={c.CategoryID}>
                    ({c.CategoryID} ------ID) {c.CategoryName}
                  </option>
                ))}
              </select>
            </div>

            {/* warehouse  ID*/}
            <div>
              <label className="block text-white text-right mb-1">
                {" "}
                آیدی گدام
              </label>
              <select
                name="warehouseID"
                value={formData.warehouseID}
                onChange={handleChange}
                required
                className="bg-[#111827] text-white rounded-lg border border-gray-700 p-1.5 focus:border-green-400 focus:ring focus:ring-green-400 w-full text-right"
              >
                <option value="">انتخاب گدام...</option>
                {warehouseID.map((c) => (
                  <option key={c.WarehouseID} value={c.WarehouseID}>
                    ({c.WarehouseID} ------ID) {c.WarehouseName}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-white text-right mb-1">
                قیمت (افغانی)
              </label>
              <input
                type="number"
                name="Price"
                value={formData.Price}
                onChange={handleChange}
                className="bg-[#111827] text-white rounded-lg border border-gray-700 p-1.5 focus:border-green-400 focus:ring focus:ring-green-400 w-full text-right"
                placeholder="مثال: 200"
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-white text-right mb-1">تعداد</label>
              <input
                type="number"
                name="Quantity"
                value={formData.Quantity}
                onChange={handleChange}
                className="bg-[#111827] text-white rounded-lg border border-gray-700 p-1.5 focus:border-green-400 focus:ring focus:ring-green-400 w-full text-right"
                placeholder="مثال: 50"
                required
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-white text-right mb-1">
                تاریخ انقضا
              </label>
              <input
                type="date"
                name="ExpiryDate"
                value={formData.ExpiryDate}
                onChange={handleChange}
                className="bg-[#111827] text-white rounded-lg border border-gray-700 p-1.5 focus:border-green-400 focus:ring focus:ring-green-400 w-full text-right"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 rounded-xl shadow-lg transition"
          >
            ثبت محصول
          </button>
        </form>
      </div>
    </div>
  );
}
