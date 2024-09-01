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
  
  // VER COMO HACER FUNCIONAR ESTO
    
  // useEffect(() => {
    
  //   fetch('http://localhost:4000/users/max-wpm',{
  //     method: "GET",
      
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setUsers(data);
  //     console.log(data);
  //   })
  //   .catch(error => {console.error('Error al obtener los usuarios de la tabla:', error);});
  // }, []);

  // return (
  //   <div className="flex justify-center items-center min-h-screen bg-white">
  //     <div className="w-full max-w-4xl p-6">
  //       <LeaderBoard users={users}/>{
  //         users.map((user, index) => (
  //           <li key={index}>
  //             {user.nickname}: {user.max_wpm} 
  //           </li>
  //         ))
  //       }
  //       <ul>
  //         {users.map((user, index) => (
  //           <li key={index}>
  //             {user.nickname}: {user.max_wpm} 
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );

}

export default LeaderBoardPage;
