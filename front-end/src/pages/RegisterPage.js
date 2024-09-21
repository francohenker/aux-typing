import React, { useState } from 'react';

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
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Registrar</h2>
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
          onClick={handleRegister}
          className="bg-orange-500 text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600 w-full"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
