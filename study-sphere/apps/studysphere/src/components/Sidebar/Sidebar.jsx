import React, { useContext, useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";
import { MdOutlineClose, MdOutlineGridView } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen,openSidebar, closeSidebar } = useContext(SidebarContext);
  
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      !event.target.classList.contains("sidebar-open-btn")
    ) {
      closeSidebar();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside
      ref={navbarRef}
      className={`
        fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <button
        className="p-2 text-gray-700 sidebar-open-btn md:hidden"
        onClick={openSidebar}
      >
        <MdOutlineGridView size={24} />
      </button>

      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <img src={Logo} alt="logo" className="w-auto h-10" />
        {/* Close button only visible on mobile */}
        <button
          onClick={closeSidebar}
          className="text-gray-600 hover:text-gray-900 md:hidden"
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      {/* Sidebar Links */}
      <div className="p-4">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <MdOutlineGridView size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
