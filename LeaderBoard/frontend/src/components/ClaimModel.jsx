import React from "react";

const ClaimModel = ({ user, onClose, onClaimSuccess }) => {
  
    const handleClaim = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${user._id}/claim`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) throw new Error("Claim failed");

    const data = await res.json();

    const updatedUser = {
      ...user,
      points: data.totalPoints,
      history: [...(user.history || []), { points: data.points, claimedAt: new Date().toISOString() }],
    };

    onClaimSuccess(updatedUser);
    onClose();
  } catch (err) {
    console.error("Claim error:", err);
  }
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 text-center">
        <h2 className="text-xl mb-4 font-bold">
          Claim Points for {user.userName}
        </h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleClaim}
        >
          Claim Points
        </button>
        <button
          className="mt-4 block mx-auto text-sm text-gray-500 underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ClaimModel;
