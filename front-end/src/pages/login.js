
// import React, { useState } from 'react';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Usuario:', username);
//     console.log('Contraseña:', password);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4 text-orange-600">Iniciar Sesión</h2>
//         <input
//           type="text"
//           placeholder="Usuario"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full mb-3 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-4 p-2 border border-gray-300 rounded"
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-orange-500 text-white px-4 py-2 rounded-md border border-black hover:bg-orange-600 w-full"
//         >
//           Iniciar sesión
//         </button>
//       </div>
//     </div>
//   );
// }
// export default LoginPage;

// LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
