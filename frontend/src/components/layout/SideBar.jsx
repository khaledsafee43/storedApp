import { NavLink } from "react-router-dom";

export default function SideBar() {

return (

<header className="sticky right-0 top-0 bottom-0 z-10 w-72 bg-white/5 p-2  shadow-inner max-h-screen overflow-hidden shadow-gray-500" dir="ltr">

<h1 className="mb-5 shrink-0 rounded-xl border-b border-white/20 px-3 py-6 text-center text-2xl font-bold text-white"> دواخانه حیوانات </h1>

<nav className="flex flex-col w-full gap-2 text-right text-white overflow-x-auto">

<NavLink

 to="/"

className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"
>

صفحه اصلی{" "}

</NavLink>
<NavLink

 to="/products"

 className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"
>

 محصولات
</NavLink>

<NavLink

 to="/MedicineWarehouse"

className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"
>

 گدام ها

</NavLink>

<NavLink
 to="/MedicineBank"

 className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"
>

 بانک ها

</NavLink>

<NavLink

 to="/Employeement"

 className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     کارمندان

    </NavLink>

    <NavLink

     to="/customer_accounts"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     مشتریان

     </NavLink>

    <NavLink

     to="/miscellaneous_expenses"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     مصارف متفرقه

    </NavLink>

    <NavLink

     to="/miscellaneous_income"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     عواید متفرقه

    </NavLink>

    <NavLink

     to="/obvious"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     بدیهی ها

    </NavLink>

    <NavLink

     to="/monthly_report"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     گزارش ماهانه

    </NavLink>

    <NavLink

     to="/annual_report"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     گزارش سلانه

    </NavLink>

    <NavLink

     to="/management"

     className="p-1.5 rounded-md font-semibold text-xl hover:bg-white hover:text-black"

    >

     مدیریت

    </NavLink>

   </nav>

  </header>

 );

}