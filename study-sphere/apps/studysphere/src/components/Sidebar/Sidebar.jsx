import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { MdOutlineClose, MdOutlineGridView } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="sidebar-top">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <button>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div>
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink to="/" className="menu-link" activeclassname="active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
