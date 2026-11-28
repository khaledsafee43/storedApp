import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTags, FaAlignLeft, FaSave, FaTimes, FaPlus } from "react-icons/fa";

export default function AddCategory() {
  const [formData, setFormData] = useState({
    CategoryName: "",
    Description: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const inputStyle = `
    w-full
    rounded-xl
    border border-teal-500/20
    bg-[#032B2D]/80
    px-4 py-3
    text-right text-sm
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

  const labelStyle = `
    mb-2
    flex items-center gap-2
    text-sm font-semibold
    text-slate-200
  `;

  return (
    <div dir="rtl" className="w-full p-3 sm:p-5">
      {/* Main Container */}
      <div
        className="
          relative mx-auto w-full max-w-4xl
          overflow-hidden rounded-2xl
          border border-teal-400/20
          bg-gradient-to-br
          from-[#073D3A]
          via-[#032B2D]
          to-[#021F24]
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Decorative Glow */}
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
            relative border-b border-teal-400/15
            px-6 py-7 sm:px-8
          "
        >
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
                shadow-[0_0_20px_rgba(20,184,166,0.10)]
              "
            >
              <FaTags className="text-2xl text-teal-300" />
            </div>

            {/* Title */}
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                ثبت کتگوری جدید
              </h2>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                کتگوری جدید محصولات دواخانه را ایجاد کنید.
              </p>
            </div>
          </div>

          {/* Badge */}
          <div
            className="
              absolute left-6 top-8 hidden sm:flex
              items-center gap-2
              rounded-full
              border border-teal-400/20
              bg-teal-400/5
              px-3 py-2
              text-xs text-teal-300
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            کتگوری جدید
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-7 p-6 sm:p-8">
          {/* Section Title */}
          <div className="flex items-center gap-2">
            <FaPlus className="text-teal-400" />

            <h3 className="text-sm font-bold text-teal-100">مشخصات کتگوری</h3>

            <div className="h-px flex-1 bg-gradient-to-l from-teal-400/30 to-transparent" />
          </div>

          {/* Category Name */}
          <div>
            <label className={labelStyle}>
              <FaTags className="text-teal-400" />
              نام کتگوری
              <span className="text-rose-400">*</span>
            </label>

            <input
              type="text"
              name="CategoryName"
              value={formData.CategoryName}
              onChange={handleChange}
              required
              placeholder="مثلاً: تجهیزات دامپزشکی"
              className={inputStyle}
            />
          </div>

          {/* Description */}
          <div>
            <label className={labelStyle}>
              <FaAlignLeft className="text-teal-400" />
              توضیحات کتگوری
            </label>

            <textarea
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              placeholder="توضیحات مربوط به این کتگوری را وارد کنید..."
              className={`${inputStyle} min-h-36 resize-none leading-7`}
              rows={4}
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-l from-transparent via-teal-400/20 to-transparent" />

          {/* Buttons */}
          <div
            className="
              flex flex-col-reverse
              items-center justify-between
              gap-4 sm:flex-row
            "
          >
            {/* Cancel */}
            <button
              type="button"
              onClick={() => navigate("/categories")}
              className="
                group flex w-full sm:w-auto
                items-center justify-center gap-2
                rounded-xl
                border border-slate-500/20
                bg-slate-500/10
                px-6 py-3
                text-sm font-semibold
                text-slate-300
                transition-all duration-300
                hover:border-rose-400/30
                hover:bg-rose-500/10
                hover:text-rose-300
                active:scale-95
              "
            >
              <FaTimes className="transition-transform group-hover:rotate-90" />
              انصراف
            </button>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                group flex w-full sm:w-auto
                min-w-48
                items-center justify-center gap-3
                rounded-xl
                border border-emerald-300/20
                bg-gradient-to-l
                from-[#059669]
                via-[#0D9488]
                to-[#0F766E]
                px-7 py-3.5
                text-sm font-bold text-white
                shadow-[0_5px_20px_rgba(16,185,129,0.15)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_5px_25px_rgba(16,185,129,0.30)]
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <FaSave className="text-lg transition-transform duration-300 group-hover:scale-110" />

              {loading ? "در حال ذخیره..." : "ثبت کتگوری"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
