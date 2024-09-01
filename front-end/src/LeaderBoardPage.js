import React, { useState, useEffect } from 'react';
import LeaderBoard from './LeaderBoard';

function LeaderBoardPage() {
  // estado para almacenar la lista de usuarios y sus puntajes
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { name: 'Usuario1', score: 95 },
      { name: 'Usuario2', score: 88 },
      { name: 'Usuario3', score: 76 },
    ]);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl p-6">
        <LeaderBoard users={users} />
      </div>
    </div>
  );
}

export default LeaderBoardPage;
