import { useState } from "react";
import SideBar from "./components/layout/SideBar";
import DashboardHeader from "./components/layout/NovBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

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
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
            </Routes>
          </main>
        </div>
      </main>
    </>
  );
}

export default App;
