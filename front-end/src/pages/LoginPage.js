import React, { useState } from 'react';

const LoginPage = () => {
  const [nickname, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:4000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, password }),
    });
    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
      window.location.href = '/';
    } else {
      alert('Login failed');
      console.error('Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={nickname}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-orange-500 text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600 w-full"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
