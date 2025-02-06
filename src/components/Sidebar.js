import { useState } from "react";
import { FaHome, FaBoxOpen, FaUser, FaChartBar, FaBookOpen, FaCaretDown, FaCaretUp } from "react-icons/fa";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isProductManagementOpen, setIsProductManagementOpen] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item);
    // Close Product Management menu when another item is clicked
    if (item !== "Product Management") {
      setIsProductManagementOpen(false);
    }
  };

  const toggleProductManagement = () => {
    setIsProductManagementOpen(!isProductManagementOpen);
  };

  return (
    <div className="w-64 h-screen bg-red-700 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        {/* Dashboard */}
        <li
          className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Dashboard" ? "bg-red-600" : "hover:bg-red-600"}`}
          onClick={() => handleClick("Dashboard")}
        >
          <FaHome />
          <span>Dashboard</span>
        </li>

        {/* Product Management (with subfolders) */}
        <li
          className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Product Management" ? "bg-red-600" : "hover:bg-red-600"}`}
          onClick={toggleProductManagement}
        >
          <FaBoxOpen />
          <span>Product Management</span>
          {isProductManagementOpen ? <FaCaretUp /> : <FaCaretDown />}
        </li>
        {isProductManagementOpen && (
          <ul className="space-y-2 pl-6">
            <li
              className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Product" ? "bg-red-600" : "hover:bg-red-600"}`}
              onClick={() => handleClick("Product")}
            >
              <span>Product</span>
            </li>
            <li
              className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Create Product" ? "bg-red-600" : "hover:bg-red-600"}`}
              onClick={() => handleClick("Create Product")}
            >
              <span>Create Product</span>
            </li>
            <li
              className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Categories" ? "bg-red-600" : "hover:bg-red-600"}`}
              onClick={() => handleClick("Categories")}
            >
              <span>Categories</span>
            </li>
          </ul>
        )}

        {/* Other items */}
        <li
          className={`flex items-center space-x-2 p-2 rounded ${activeItem === "User Management" ? "bg-red-600" : "hover:bg-red-600"}`}
          onClick={() => handleClick("User Management")}
        >
          <FaUser />
          <span>User Management</span>
        </li>
        <li
          className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Lead Management" ? "bg-red-600" : "hover:bg-red-600"}`}
          onClick={() => handleClick("Lead Management")}
        >
          <FaChartBar />
          <span>Lead Management</span>
        </li>
        <li
          className={`flex items-center space-x-2 p-2 rounded ${activeItem === "Training" ? "bg-red-600" : "hover:bg-red-600"}`}
          onClick={() => handleClick("Training")}
        >
          <FaBookOpen />
          <span>Training</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
