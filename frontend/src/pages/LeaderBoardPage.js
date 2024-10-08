import React, { useState, useEffect } from 'react';
import LeaderBoard from '../components/LeaderBoard';
import ThemeChange from '../components/ThemeChange';
function LeaderBoardPage() {
  // estado para almacenar la lista de usuarios y sus puntajes
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch(process.env.REACT_APP_ADDRESS + ':4000/users/max-wpm',{})
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      console.log(data);
    })
    .catch(error => {
      console.error('Error al obtener los usuarios de la tabla:', error);});
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl p-6">
        <LeaderBoard users={users}/>
        <ThemeChange/>
      </div>
    </div>


);

}

export default LeaderBoardPage;
