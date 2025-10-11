import React from "react";
import Topbar from "./Topbar";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <Topbar />
      <Sidebar />
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome Back!</h1>
        <p className="mt-2 text-gray-600">Here’s what’s happening today...</p>
      </main>
    </div>
  );
};

export default Dashboard;
