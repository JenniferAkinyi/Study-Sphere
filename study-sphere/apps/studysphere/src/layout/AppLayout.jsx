import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Dashboard/Topbar";

const AppLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Topbar />
      <Sidebar />

      <main className="max-w-2xl p-6 mx-auto mt-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
