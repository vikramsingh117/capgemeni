import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Products = () => {
  const initialProducts = [
    { image: "💰", name: "Personal Loan", category: "Personal Loan", type: "VARIABLE", value: "5%", label: "Popular", status: true },
    { image: "🏠", name: "Home Loan", category: "Home Loan", type: "VARIABLE", value: "0.7%", label: "", status: true },
    { image: "🏢", name: "Business Loan", category: "Business Loan", type: "VARIABLE", value: "2%", label: "", status: true },
    { image: "💳", name: "Credit Card", category: "Credit Card", type: "FIXED", value: "₹500", label: "", status: true },
    { image: "🅰️", name: "ABCD App", category: "Application", type: "FIXED", value: "₹50", label: "Earn more", status: true },
    { image: "🅱️", name: "ABCD App Test", category: "Application", type: "VARIABLE", value: "5%", label: "ABCD", status: false },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "🆕", name: "", category: "", type: "FIXED", value: "", label: "", status: true,
  });
  const [message, setMessage] = useState(""); // Success message state

  // Show success message temporarily
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000);
  };

  const toggleStatus = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = !updatedProducts[index].status;
    setProducts(updatedProducts);
    showMessage("Product status updated!");
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setCurrentProduct({ ...product }); // Set current product to edit
  };

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.name === currentProduct.name ? currentProduct : product
    );
    setProducts(updatedProducts);
    setIsEditing(false);
    setCurrentProduct(null);
    showMessage("Product details updated!");
  };

  const handleRefresh = () => {
    setProducts([...initialProducts]);
    showMessage("Product list refreshed!");
  };

  const handleAddProductClick = () => {
    setIsAdding(true);
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ image: "🆕", name: "", category: "", type: "FIXED", value: "", label: "", status: true });
    setIsAdding(false);
    showMessage("Product added successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Products</h2>
        <div>
          <button className="bg-red-600 text-white px-4 py-2 rounded mr-2 hover:bg-red-500" onClick={handleRefresh}>
            Refresh
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500" onClick={handleAddProductClick}>
            + Add Product
          </button>
        </div>
      </div>

      {/* Success Message */}
      {message && (
        <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">
          {message}
        </div>
      )}

      {/* Add Product Form */}
      {isAdding && (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold mb-2">Add Product</h3>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="p-2 mb-2 border"
            placeholder="Product Name"
          />
          <input
            type="text"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="p-2 mb-2 border"
            placeholder="Category"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      )}

      {/* Edit Product Form */}
      {isEditing && (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold mb-2">Edit Product</h3>
          <input
            type="text"
            name="name"
            value={currentProduct.name}
            onChange={handleChange}
            className="p-2 mb-2 border"
            placeholder="Product Name"
          />
          <input
            type="text"
            name="category"
            value={currentProduct.category}
            onChange={handleChange}
            className="p-2 mb-2 border"
            placeholder="Category"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center hover:bg-gray-100 transition">
              <td className="border p-2 text-2xl">{product.image}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">
                <button
                  className={`px-4 py-1 rounded ${product.status ? "bg-green-600 text-white" : "bg-gray-400 text-black"} hover:opacity-80`}
                  onClick={() => toggleStatus(index)}
                >
                  {product.status ? "Active" : "Inactive"}
                </button>
              </td>
              <td className="border p-2">
                <FaEdit className="text-blue-600 cursor-pointer inline-block hover:scale-110 transition-transform" onClick={() => handleEditClick(product)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
