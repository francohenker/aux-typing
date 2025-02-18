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
import { useEffect } from 'react';

function App() {
  const handleChallengeClick = (challengeNumber) => {
    console.log(`Desafío ${challengeNumber} clickeado`);
  };

  useEffect(() => {
    document.body.classList.add('bg-base-100'); // Aplica el fondo al <body>
  }, []);

  const buttons = [1, 2, 3, 4, 5];
  const nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

  return (
    <Routes >
      <Route path="/" element={
        <div className=" flex flex-col items-center justify-center min-h-screen" >
          <ThemeChange />
          <div className=''>
            <UserProfile />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mt-6 px-6">
            {/* Sección de desafíos de mecanografía */}
            <div className="p-6 rounded-lg shadow-md border border-black">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">Desafíos de mecanografía</h2>

              {/* Generacion de los 10 botones */}
              {buttons.map((item) => (
                <div className="grid grid-cols-1 gap-4 mt-4">


                  {/* Button 1 */}
                  <div className="flex w-full flex-col lg:flex-row">
                    <div
                      key={1}
                      onClick={() => handleChallengeClick(1)}
                      className=" rounded-lg shadow-sm text-center cursor-pointer hover:bg-orange-200 transition-colors duration-300 w-full"
                    >
                      <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío ` + (nums[item - 1])}</button>
                    </div>

                    <div className="divider lg:divider-horizontal"></div>

                    {/* Button 2 */}
                    <div
                      key={1}
                      onClick={() => handleChallengeClick(1)}
                      className="rounded-lg shadow-sm text-center cursor-pointer hover:bg-orange-200 transition-colors duration-300 w-full"
                    >
                      <button className="btn btn-secondary w-full text-xl font-semibold">{`Desafío ` + (nums[item + 4])}</button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Sección adicional */}
            {/* Botones para Leaderboard y Test de Tecleo */}
            <div className="p-6 rounded-lg shadow-md border border-black">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">Opai</h2>

              <div className="flex flex-col space-y-4">
                <Link to="/typing-test">
                  <button className="btn btn-secondary w-full">
                    Test de Tecleo
                  </button>
                </Link>
                <Link to="/">
                  <button className="btn btn-secondary w-full">
                    Desafíos propios
                  </button>
                </Link>
                <button className="btn btn-secondary w-full" onClick={() => window.location.href = '/Customtext'}>
                  Custom Text
                </button>
                <Link to="/leaderboards">
                  <button className="btn btn-secondary w-full">
                    Leaderboards
                  </button>
                </Link>
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
        </div>
      } />

      {/* Ru</style>tas adicionales */}
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
