import { Outlet } from "react-router-dom";
import PageHeader from "../components/warehouseComponents/PageHeader";

export default function WareHouseLayout() {
  return (
    <section className="min-w-0 flex-1 p-4 pt-20 md:p-6">
      <PageHeader />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
