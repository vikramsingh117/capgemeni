import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBoxOpen, FaUser, FaChartBar, FaBookOpen, FaCaretDown, FaCaretUp } from "react-icons/fa";

const Sidebar = () => {
  const [isProductManagementOpen, setIsProductManagementOpen] = useState(false);
  const location = useLocation();

  const toggleProductManagement = () => {
    setIsProductManagementOpen(!isProductManagementOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-red-700 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li className={`p-2 rounded flex items-center space-x-2 transition ${isActive("/") ? "bg-red-900 border-l-4 border-white" : "hover:bg-red-600"}`}>
          <Link to="/" className="flex items-center space-x-2 w-full">
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="p-2 rounded hover:bg-red-600 cursor-pointer flex items-center justify-between" onClick={toggleProductManagement}>
          <div className="flex items-center space-x-2">
            <FaBoxOpen />
            <span>Product Management</span>
          </div>
          {isProductManagementOpen ? <FaCaretUp /> : <FaCaretDown />}
        </li>

        <ul className={`pl-6 overflow-hidden transition-all ${isProductManagementOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          <li className={`p-2 rounded transition ${isActive("/products") ? "bg-red-900 border-l-4 border-white" : "hover:bg-red-600"}`}>
            <Link to="/products">Products</Link>
          </li>
          <li className={`p-2 rounded transition ${isActive("/categories") ? "bg-red-900 border-l-4 border-white" : "hover:bg-red-600"}`}>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>

        <li className={`p-2 rounded flex items-center space-x-2 transition ${isActive("/user-management") ? "bg-red-900 border-l-4 border-white" : "hover:bg-red-600"}`}>
          <Link to="/user-management" className="flex items-center space-x-2 w-full">
            <FaUser />
            <span>User Management</span>
          </Link>
        </li>


        <li className={`p-2 rounded flex items-center space-x-2 transition ${isActive("/training") ? "bg-red-900 border-l-4 border-white" : "hover:bg-red-600"}`}>
          <Link to="/training" className="flex items-center space-x-2 w-full">
            <FaBookOpen />
            <span>Training</span>
          </Link>
        </li>

        <li className={`p-2 rounded flex items-center space-x-2 transition ${isActive("/lead-management") ? "bg-red-900 border-l-4 border-white" : "hover:bg-red-600"}`}>
          <Link to="/lead-management" className="flex items-center space-x-2 w-full">
            <FaChartBar />
            <span>Lead Management</span>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
