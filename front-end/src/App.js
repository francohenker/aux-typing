import React, { useState } from 'react';
import './index.css'; 
import LeaderBoard from './LeaderBoard';

function App() {
  const handleChallengeClick = (challengeNumber) => {
    console.log(`Desafío ${challengeNumber} clickeado`);
  };

  // Estado para almacenar la lista de usuarios y sus puntajes
  const [users, setUsers] = useState([
    { name: 'Usuario1', score: 95 },
    { name: 'Usuario2', score: 88 },
    { name: 'Usuario3', score: 76 },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Sección de desafíos de mecanografía */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-black">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Desafíos de mecanografía</h2>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(10).keys()].map(i => (
              <div
                key={i}
                onClick={() => handleChallengeClick(i + 1)}
                className="bg-orange-100 p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
              >
                <span className="text-xl font-semibold">{`Desafío ${i + 1}`}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de inicio de sesión / registro */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-black">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Iniciar sesión / Registrarse</h2>
          <div className="flex flex-col space-y-4">
            <button className="bg-orange-500 font-semibold text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600 focus:outline-none">
              Iniciar sesión
            </button>
            <button className="bg-orange-200 font-semibold text-white px-4 py-2 rounded-md border border-black hover:bg-orange-300 focus:outline-none">
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* Componente LeaderBoard */}
      <div className="w-full max-w-4xl mt-6 font-semibold">
        <LeaderBoard users={users} />
      </div>
    </div>
  );
}

export default App;
