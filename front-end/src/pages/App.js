import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../styles/index.css'; 
import LeaderBoardPage from './LeaderBoardPage';
import TypingTestPage from './TypingTestPage';  
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AuthCallback from './AuthCallback'; 
import { useAuth } from './AuthContext'; 

function App() {
  const { user, login } = useAuth();

  const handleChallengeClick = (challengeNumber) => {
    console.log(`Desafío ${challengeNumber} clickeado`);
  };

  useEffect(() => {
    window.initGoogleClient = () => {
      window.gapi.load('client:auth2', () => {
        window.gapi.auth2.init({
          client_id: '602142041902-j1949mtsfggoakjohvr9r75d1iq90fdu.apps.googleusercontent.com', // nuestro Client ID
        }).then(() => {
          checkLoginStatus();
        }).catch((error) => {
          console.error('Error initializing Google API:', error);
        });
      });
    };

    const checkLoginStatus = () => {
      const auth = window.gapi.auth2.getAuthInstance();
      const isSignedIn = auth.isSignedIn.get();

      if (isSignedIn) {
        const user = auth.currentUser.get();
        console.log('User is signed in:', user.getBasicProfile());
        login({ name: user.getBasicProfile().getName(), token: user.getAuthResponse().id_token }); // guarda la data del user
      } else {
        console.log('User is not signed in');
      }
    };
  }, [login]);

  return (
    <Routes>
      <Route path="/" element={
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
                <Link to="/LoginPage">
                  <button className="bg-orange-500 font-semibold text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600 focus:outline-none">
                    Iniciar sesión
                  </button>
                </Link>
                <Link to="/RegisterPage">
                  <button className="bg-orange-200 font-semibold text-white px-4 py-2 rounded-md border border-black hover:bg-orange-300 focus:outline-none">
                    Registrarse
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Botones para Leaderboard y Test de Tecleo */}
          <div className="w-full max-w-4xl mt-6 flex justify-center space-x-4 font-semibold">
            <Link to="/leaderboards">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600">
                Leaderboards
              </button>
            </Link>
            <Link to="/typing-test">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600">
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
      
      {/* Ruta para manejar la redirección después del inicio de sesión con Google */}
      <Route path="/auth/google/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;
