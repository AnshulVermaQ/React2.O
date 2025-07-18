import { FaPlus } from "react-icons/fa";

const ClaimHistory = ({ history }) => {
  const safeHistory = Array.isArray(history) ? history : [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">
        Claim History{" "}
      </h2>
      <ul className="space-y-3">
        {safeHistory?.map((entry, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <FaPlus className="text-xs" />
              </div>
              <span className="font-semibold text-green-600">
                +{entry.points} pts
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(entry.claimedAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
