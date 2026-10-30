import { useState } from "react";
import {
  FaUser,
  FaBell,
  FaGear,
  FaMagnifyingGlass,
  FaCalendarDays,
  FaChevronDown,
  FaCheckDouble,
  FaRightFromBracket,
  FaXmark,
} from "react-icons/fa6";

export default function DashboardHeader({ onSearch }) {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "موجودی یک محصول کم شده است",
      time: "۵ دقیقه قبل",
      read: false,
    },
    {
      id: 2,
      title: "یک محصول جدید ثبت شد",
      time: "۲۰ دقیقه قبل",
      read: false,
    },
    {
      id: 3,
      title: "گزارش فروش آماده است",
      time: "یک ساعت قبل",
      read: true,
    },
  ]);

  const today = new Intl.DateTimeFormat("fa-AF-u-ca-persian", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim() && onSearch) {
      onSearch(search.trim());
    }
  }

  function markAllRead() {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }

  function markAsRead(id) {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }

  return (
    <header
      dir="rtl"
      className="sticky z-30 w-full border-b border-teal-500/20 bg-[#032B2D]/95 px-4 py-3 shadow-lg backdrop-blur-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">

        {/* تاریخ */}
        <div className="hidden items-center gap-2 text-sm text-slate-300 lg:flex">
          <FaCalendarDays className="text-teal-400" />

          <span>امروز: {today}</span>
        </div>

        {/* جستجو */}
        <form
          onSubmit={handleSearch}
          className="order-3 flex w-full items-center rounded-xl border border-teal-500/40 bg-[#064044]/70 px-3 transition focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-400/20 sm:order-2 sm:w-auto sm:flex-1 sm:max-w-md"
        >
          <FaMagnifyingGlass className="shrink-0 text-teal-300" />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی محصولات، مشتریان و ..."
            aria-label="جستجو"
            className="w-full min-w-0 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="پاک کردن جستجو"
              className="text-slate-400 hover:text-white"
            >
              <FaXmark />
            </button>
          )}
        </form>

        {/* پروفایل و اعلان‌ها */}
        <div className="order-2 flex items-center gap-3 sm:order-3">

          {/* اعلان‌ها */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              aria-label="اعلان‌ها"
              aria-expanded={showNotifications}
              className="relative rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-teal-300"
            >
              <FaBell className="text-xl" />

              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-xs text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute left-0 top-12 z-50 w-72 max-w-[90vw] overflow-hidden rounded-xl border border-teal-500/20 bg-[#063638] shadow-2xl sm:w-80">
                <div className="flex items-center justify-between border-b border-white/10 p-3">
                  <h3 className="font-bold text-white">
                    اعلان‌ها
                  </h3>

                  <button
                    type="button"
                    onClick={markAllRead}
                    className="flex items-center gap-1 text-xs text-teal-300 hover:text-white"
                  >
                    <FaCheckDouble />
                    خواندن همه
                  </button>
                </div>

                <div className="max-h-72 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <button
                        key={notification.id}
                        type="button"
                        onClick={() => markAsRead(notification.id)}
                        className={`w-full border-b border-white/5 p-3 text-right transition hover:bg-white/5 ${
                          notification.read ? "opacity-60" : ""
                        }`}
                      >
                        <p className="text-sm text-white">
                          {notification.title}
                        </p>

                        <p className="mt-1 text-xs text-teal-300">
                          {notification.time}
                        </p>
                      </button>
                    ))
                  ) : (
                    <p className="p-5 text-center text-sm text-slate-400">
                      اعلانی وجود ندارد.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* تنظیمات */}
          <button
            type="button"
            aria-label="تنظیمات"
            onClick={() => {
              setShowProfile(false);
              setShowNotifications(false);
            }}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-teal-300"
          >
            <FaGear className="text-xl" />
          </button>

          {/* پروفایل مدیر */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              aria-expanded={showProfile}
              className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-white/10"
            >
              <FaUser className="text-3xl text-teal-300" />

              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-white">
                  مدیر سیستم
                </p>

                <p className="text-xs text-slate-400">
                  خوش آمدید
                </p>
              </div>

              <FaChevronDown className="hidden text-xs text-slate-400 sm:block" />
            </button>

            {showProfile && (
              <div className="absolute left-0 top-12 z-50 w-48 overflow-hidden rounded-xl border border-teal-500/20 bg-[#063638] shadow-2xl">
                <div className="border-b border-white/10 p-3">
                  <p className="font-semibold text-white">
                    مدیر سیستم
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    حساب مدیریت
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowProfile(false)}
                  className="flex w-full items-center gap-3 p-3 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <FaGear className="text-teal-300" />
                  تنظیمات حساب
                </button>

                <button
                  type="button"
                  onClick={() => setShowProfile(false)}
                  className="flex w-full items-center gap-3 p-3 text-sm text-rose-400 transition hover:bg-rose-500/10"
                >
                  <FaRightFromBracket />
                  خروج از حساب
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}