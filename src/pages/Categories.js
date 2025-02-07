import { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState(["Loans", "Credit Cards", "Investments"]);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Enter new category"
        className="border p-2 mr-2"
      />
      <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={addCategory}>
        Add Category
      </button>

      <ul className="mt-4">
        {categories.map((category, index) => (
          <li key={index} className="border p-2 my-2 bg-gray-100 rounded">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
