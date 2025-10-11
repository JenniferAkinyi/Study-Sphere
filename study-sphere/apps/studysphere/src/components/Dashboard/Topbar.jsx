import React, { useContext } from "react";
import { MdOutlineMenu, MdNotificationsNone } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { SidebarContext } from "../../context/SidebarContext";

const Topbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <MdOutlineMenu size={24} className="text-gray-700 cursor-pointer" onClick={toggleSidebar}/>
        <img src={Logo} alt="logo" className="w-auto h-10" />
        <p className="text-2xl font-semibold">Study Sphere</p>
      </div>
      <div className="flex items-center gap-5">
        <button className="relative text-gray-600 hover:text-gray-900">
          <MdNotificationsNone size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 border border-gray-300 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Topbar;
