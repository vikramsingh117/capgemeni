import { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { name: "John Doe", role: "Admin", active: true },
    { name: "Jane Smith", role: "User", active: false },
    { name: "Alice Johnson", role: "User", active: true },
  ]);

  const toggleStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].active = !updatedUsers[index].active;
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.active ? "Active" : "Inactive"}</td>
              <td className="border p-2">
                <button
                  className={`px-4 py-1 rounded ${user.active ? "bg-red-600 text-white" : "bg-gray-400 text-black"}`}
                  onClick={() => toggleStatus(index)}
                >
                  {user.active ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
