import React from 'react';

function LeaderBoard({ users }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-black">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Tabla de líderes</h2>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center bg-orange-100 p-4 rounded-lg shadow-sm border border-black">
            <span className="text-xl font-semibold">{user.name}</span>
            <span className="text-xl font-semibold">{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaderBoard;
