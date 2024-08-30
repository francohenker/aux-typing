import React from 'react';

const LeaderBoard = ({ users }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-black w-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">LeaderBoard</h2>
      <ul className="divide-y divide-gray-200">
        {users.map((user, index) => (
          <li key={index} className="py-2 flex justify-between">
            <span>{user.name}</span>
            <span>{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
