import React, { useState } from 'react';
import ThemeChange from '../components/ThemeChange';
import UserProfile from '../components/UserProfile';

const LoginPage = () => {
  const [nickname, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    try {
    const response = await fetch(process.env.REACT_APP_ADDRESS + ':4000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, password }),
    });
    
      const data = await response.json();
        localStorage.setItem('token', data.access_token);
        window.location.href = '/';
    }
    catch (error) {
      alert('Login failed, please try again', error);
    }
  };

    const handleGoogleLogin = () => {
      // Redirigir a la ruta de autenticación de Google en el backend
      window.open(process.env.REACT_APP_ADDRESS + ':4000/auth/google', '_self');
      // alert('COMING SOON');
    };
    const register = () => {
      window.location.href = '/RegisterPage';
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="p-6 rounded-lg shadow-md w-full max-w-sm">
          <ThemeChange />
          <UserProfile />
          <h2 className="text-center text-2xl font-bold mb-4 text-orange-600">Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={nickname}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-transparent input input-bordered input-warning w-full max-w mb-2 text-center"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent input input-bordered input-warning w-full max-w mb-2 text-center"
          />
          <button
            onClick={handleLogin}
            className="btn btn-secondary btn-block"
          >
            Iniciar sesión
          </button>
          <div className="mt-4 text-center">
            <span className="block mb-2">O</span>
            <button
              onClick={handleGoogleLogin}
              className='btn btn-secondary btn-block'
            >
              Iniciar sesión con Google
            </button>
            <p className="text-center mt-8">¿No tienes cuenta? Registrate!</p>
            <button
              onClick={register}
              className="bg-transparent input input-bordered input-warning w-full max-w mb-4 text-center"
              >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default LoginPage;
