import { FaTrophy, FaUserCircle } from "react-icons/fa";

const LeaderBoard = ({ users }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">
        Leaderboard
      </h2>
      <ol className="space-y-4">
        {users.map((user, index) => (
          <li
            key={user._id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-200 to-white rounded-xl border border-indigo-100"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0
                    ? "bg-yellow-400"
                    : index === 1
                    ? "bg-gray-400"
                    : index === 2
                    ? "bg-amber-600"
                    : "bg-indigo-400"
                }`}
              >
                {index + 1}
              </div>
              <span className="font-bold text-black">{user.userName}</span>
            </div>
            <span className="font-bold text-indigo-600">{user.points} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LeaderBoard;
