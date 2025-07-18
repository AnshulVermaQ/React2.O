import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import LeaderBoard from "./components/LeaderBoard";
import ClaimHistory from "./components/ClaimHistory";
import ClaimModel from "./components/ClaimModel.jsx";

const BASE_URL = "http://localhost:3000";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/api/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSelectUser = async (user) => {
    setSelectedUser(user);
    setShowModal(true);

    try {
      const res = await fetch(`${BASE_URL}/api/users/${user._id}/history`);
      if (!res.ok) throw new Error("Failed to fetch history");
      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error("History fetch error:", err);
    }
  };

  const updateUserPoints = (updatedUser) => {
    setUsers((prev) =>
      prev
        .map((u) => (u._id === updatedUser._id ? updatedUser : u))
        .sort((a, b) => b.points - a.points)
    );

    if (selectedUser && updatedUser._id === selectedUser._id) {
      setSelectedUser(updatedUser);
      setHistory(updatedUser.history);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4 overflow-auto">
          <UserList users={users} onSelect={handleSelectUser} />
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-4 overflow-auto">
          <LeaderBoard users={users} />
        </div>

        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4 overflow-auto">
          <ClaimHistory history={history} />
        </div>
      </div>

      {showModal && selectedUser && (
        <ClaimModel
          user={selectedUser}
          onClose={() => setShowModal(false)}
          onClaimSuccess={updateUserPoints}
        />
      )}
    </div>
  );
};

export default App;
