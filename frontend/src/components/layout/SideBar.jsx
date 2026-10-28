export default function SideBar(){
    return (
        <header className="sticky right-0 top-0 bottom-0 w-72 bg-white/5 h-screen shadow-md shadow-gray-500" dir="rtl">
            <nav className="flex flex-col w-full h-screen gap-2 text-white">
                <a href="#">صفحه اصلی </a>
                <a href="#">محصولات</a>
                <a href="#">گدام ها</a>
                <a href="#">بانک ها</a>
                <a href="#">مشتریان</a>
                <a href="#">مصارف متفرقه</a>
                <a href="#">عواید متفرقه</a>
                <a href="#">بدیهی ها</a>
                <a href="#">گزارش ماهانه</a>
                <a href="#">گزارش سلانه</a>
                <a href="#">مدیریت</a>
            </nav>
        </header>
    )
}