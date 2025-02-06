import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const ProductTable = () => {
  const [products, setProducts] = useState([
    { image: "💰", name: "Personal Loan", category: "Personal Loan", type: "VARIABLE", value: "5%", label: "Popular", status: true },
    { image: "🏠", name: "Home Loan", category: "Home Loan", type: "VARIABLE", value: "0.7%", label: "", status: true },
    { image: "🏢", name: "Business Loan", category: "Business Loan", type: "VARIABLE", value: "2%", label: "", status: true },
    { image: "💳", name: "Credit Card", category: "Credit Card", type: "FIXED", value: "₹500", label: "", status: true },
    { image: "🅰️", name: "ABCD App", category: "Application", type: "FIXED", value: "₹50", label: "Earn more", status: true },
    { image: "🅱️", name: "ABCD App Test", category: "Application", type: "VARIABLE", value: "5%", label: "ABCD", status: false },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const toggleStatus = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = !updatedProducts[index].status;
    setProducts(updatedProducts);
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
  };

  const handleSave = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.name === updatedProduct.name ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setIsEditing(false);
    setCurrentProduct(null);
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Products</h2>
        <div>
          <button className="bg-red-600 text-white px-4 py-2 rounded mr-2">Refresh</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded">+ Add Product</button>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Commission Type</th>
            <th className="border p-2">Commission Value</th>
            <th className="border p-2">Label Tag</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2 text-2xl">{product.image}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">{product.type}</td>
              <td className="border p-2">{product.value}</td>
              <td className="border p-2">{product.label}</td>
              <td className="border p-2">
                <button
                  className={`px-4 py-1 rounded ${product.status ? "bg-red-600 text-white" : "bg-gray-400 text-black"}`}
                  onClick={() => toggleStatus(index)}
                >
                  {product.status ? "Active" : "Inactive"}
                </button>
              </td>
              <td className="border p-2">
                <FaEdit
                  className="text-blue-600 cursor-pointer inline-block"
                  onClick={() => handleEditClick(product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && currentProduct && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold mb-2">Edit Product</h3>
          <input
            type="text"
            value={currentProduct.name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
            className="p-2 mb-2 border"
            placeholder="Product Name"
          />
          <input
            type="text"
            value={currentProduct.value}
            onChange={(e) => setCurrentProduct({ ...currentProduct, value: e.target.value })}
            className="p-2 mb-2 border"
            placeholder="Commission Value"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => handleSave(currentProduct)}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
