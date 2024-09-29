import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../styles/index.css';
import LeaderBoardPage from './LeaderBoardPage';
import TypingTestPage from './TypingTestPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AuthCallback from './AuthCallback'; // Importa el nuevo componente
import CustomTextUser from '../components/CustomTextUser';
import UserProfile from '../components/UserProfile';
import ThemeChange from '../components/ThemeChange';


function App() {
  const handleChallengeClick = (challengeNumber) => {
    console.log(`Desafío ${challengeNumber} clickeado`);
  };

  return (
    <Routes >
      <Route path="/" element={


        <div className=" flex flex-col items-center justify-center min-h-screen p-6">

          <div className=''>

            <ThemeChange />
            <UserProfile />


          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Sección de desafíos de mecanografía */}
            <div className="p-6 rounded-lg shadow-md border border-black">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">Desafíos de mecanografía</h2>
              <div className="grid grid-cols-2 gap-4">
                
                  <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 1`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 2`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 3`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 4`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 5`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 6`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 7`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 8`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                    <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 9`}</button>
                    
                  </div>
                                    <div
                    key={1}
                    onClick={() => handleChallengeClick(1)}
                    className="p-4 rounded-lg shadow-sm text-center cursor-pointer border border-black hover:bg-orange-200 transition-colors duration-300"
                  >
                  <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío 10`}</button>
                    
                  </div>

              </div>
            </div>

            {/* Sección de inicio de sesión / registro */}
            <div className="p-6 rounded-lg shadow-md border border-black">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">Iniciar sesión / Registrarse</h2>
              <div className="flex flex-col space-y-4">
                <button className="btn btn-secondary" onClick={() => window.location.href = '/LoginPage'}>
                  Iniciar sesión
                </button>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/RegisterPage'}>
                  Registrarse
                </button>
              </div>
            </div>
          </div>

          {/* Botones para Leaderboard y Test de Tecleo */}
          <div className="w-full max-w-4xl mt-6 flex justify-center space-x-4 font-semibold">
            <Link to="/leaderboards">
              <button className="btn btn-secondary">
                Leaderboards
              </button>
            </Link>
            <Link to="/typing-test">
              <button className="btn btn-secondary">
                Test de Tecleo
              </button>
            </Link>
          </div>
        </div>
      } />

      {/* Rutas adicionales */}
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/leaderboards" element={<LeaderBoardPage />} />
      <Route path="/typing-test" element={<TypingTestPage />} />
      <Route path="/CustomText" element={<CustomTextUser />} />

      {/* Ruta para manejar la redirección después del inicio de sesión con Google */}
      <Route path="/auth/google/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;
