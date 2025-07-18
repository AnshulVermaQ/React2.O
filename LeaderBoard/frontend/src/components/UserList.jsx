import { useState } from "react";
import axios from "axios";
import { FaUserCircle, FaTrophy, FaPlus } from "react-icons/fa";

const BASE_URL = "http://localhost:3000";

const UserList = ({ users, onSelect }) => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = async () => {
  if (!userName.trim()) {
    setError("Username is required");
    return;
  }

  try {
    const res = await axios.post(`${BASE_URL}/api/users`, { 
      userName 
    });

    if (res.data) {
      window.location.reload();
    }
  } catch (error) {
    setError(error.response?.data?.message || "Failed to add user");
  }
};

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">Users</h2>

      <div className="mb-4">
        <input
          className="w-full border px-2 py-1 rounded mb-2"
          type="text"
          placeholder="Enter username"
          value={userName}
          onChange={(e) => {
            setError("");
            setUserName(e.target.value);
          }}
        />
        <button
          onClick={handleAddUser}
          className="w-full bg-green-600 text-white py-1 rounded hover:bg-green-700 flex items-center justify-center gap-2"
        >
          <FaPlus />
          Add User
        </button>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="space-y-3">
  {users.map((user) => (
    <div
      key={user._id}
      onClick={() => onSelect(user)}
      className="flex items-center justify-between p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition-all cursor-pointer border border-gray-100"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-indigo-300 flex items-center justify-center text-indigo-600 font-semibold">
          {user.userName.charAt(0).toUpperCase()}
        </div>
        <span className="font-medium text-black">{user.userName}</span>
      </div>
      <span className="font-semibold text-indigo-600">{user.points} pts</span>
    </div>
  ))}
</div>
    </div>
  );
};

export default UserList;
