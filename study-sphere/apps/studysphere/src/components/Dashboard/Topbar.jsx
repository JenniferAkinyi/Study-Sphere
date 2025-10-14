import React, { useContext } from "react";
import { MdOutlineMenu, MdNotificationsNone } from "react-icons/md";
import Logo from "../../assets/logo.png";
import Avatar from "../Authentication/Avatar";
import { SidebarContext } from "../../context/SidebarContext";
import { useUser } from "../../context/userContext"

const Topbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const { userData } = useUser()
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

        <Avatar 
          username={userData?.username || "Guest User"}
          profileImage={userData?.profileImage}
          size={32}
        />
        {/* TODO: Add a dropdown menu that opens to settings */}
      </div>
    </header>
  );
};

export default Topbar;
