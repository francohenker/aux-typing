import React, { useState } from 'react';


const RegisterPage = () => {
  const [nickname, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //VER DONDE SE PUEDE MODIFICAR EL HECHO DE QUE UN USUARIO PUEDA CONVERTIRSE EN ADMINISTRADOR DEL SISTEMA
  const [admin, setAdmin] = useState(false);

  const handleRegister = async () => {
    const response = await fetch('http://localhost:4000/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, password, admin }),
    });
    if(response.status === 201){
        window.location.href = '/LoginPage'
    }else{
        alert('Registration failed');
    }
  };

  return (
    <div>
      <input value={nickname} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
