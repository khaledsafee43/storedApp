import { NavLink } from "react-router-dom";
export default function PageHeader() {
  return (
    <header className="bg-emerald-600 text-white p-4 rounded-lg flex items-center justify-between">
      <nav className="flex gap-4">
        <NavLink to="/products/addProduct" className="bg-gray-600/25 rounded-mg text-center font-bold py-1 px-2">ثبت محصول</NavLink>
        <NavLink to="/products/addcategory">ثبت کتگوری</NavLink>
        <NavLink to="/products/productList">لیست محصولات</NavLink>
        <NavLink to="/products/productCtegoryList">کتگوری محصولات</NavLink>
      </nav>
    </header>
  );
}
