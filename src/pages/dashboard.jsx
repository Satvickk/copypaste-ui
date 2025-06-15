import { Outlet } from "react-router-dom";
import { Header } from "../components/home";
import { Sidebar } from "../components/dashboard";

const Dashboard = () => {
  return (
<main className="h-screen grid grid-rows-[auto_1fr]">
  <Header />
  <section className="grid sm:grid-cols-12 overflow-hidden lg:max-w-7xl w-full mx-auto ">
    <div className="col-span-2 overflow-y-scroll">
      <Sidebar />
    </div>
    <div className="col-span-10 overflow-y-scroll">
      <Outlet />
    </div>
  </section>
</main>
  );
};

export default Dashboard;
