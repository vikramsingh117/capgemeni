import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import Categories from "./pages/Categories";
import UserManagement from "./pages/UserManagement";
import LeadManagement from "./pages/LeadManagement";
import Training from "./pages/Training";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/lead-management" element={<LeadManagement />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
