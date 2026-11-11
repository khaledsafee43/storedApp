import { useState } from "react";
import SideBar from "./components/layout/SideBar";
import DashboardHeader from "./components/layout/NovBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsList from "./components/ProductComponents/ProductsList";
import AddCategory from "./components/ProductComponents/AddCategory";
import CategoriesList from "./components/ProductComponents/CategoriesList";
import AddProduct from "./components/ProductComponents/AddProduct";

function App() {
  return (
    <>
      <main className="flex min-h-screen" dir="rtl">
        <SideBar />
        <div className="min-w-0 flex-1 h-screen overflow-y-auto glass-scrollbar">
          {" "}
          <DashboardHeader />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />}>
                <Route path="add" element={<AddProduct />} />
                <Route path="list" element={<ProductsList />} />
                <Route path="add-category" element={<AddCategory />} />
                <Route path="categories" element={<CategoriesList />} />
              </Route>
            </Routes>
          </main>
        </div>
      </main>
    </>
  );
}

export default App;
