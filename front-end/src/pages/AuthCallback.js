import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambia aquí

const AuthCallback = () => {
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authToken = params.get('authToken');
    const googleRefreshToken = params.get('googleRefreshToken');

    if (authToken) {
      // Almacena los tokens en localStorage
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('googleRefreshToken', googleRefreshToken);
      navigate('/'); // Redirige a la página principal
    } else {
      // Manejar error o redirigir a una página diferente
      navigate('/'); // Redirigir a la página de inicio de sesión si no hay token
    }
  }, [navigate]);

  return <div>Loading...</div>; // Puedes mostrar un loader mientras se procesa
};

export default AuthCallback;
