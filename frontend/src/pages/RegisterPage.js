import React, { useState } from 'react';
import ThemeChange from '../components/ThemeChange';
import UserProfile from '../components/UserProfile';

const RegisterPage = () => {
  const [nickname, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const response = await fetch(process.env.REACT_APP_ADDRESS + ':4000/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, password, admin: false}),
    });
    if (response.status === 201) {
      window.location.href = '/LoginPage';
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-md w-full max-w-sm">
        <ThemeChange/>
        <UserProfile/>
        <h2 className="text-center text-2xl font-bold mb-4 text-orange-600">Registrar</h2>
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
          onClick={handleRegister}
          className="btn btn-secondary btn-block"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
