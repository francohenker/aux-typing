import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authToken = params.get('authToken');
    const googleRefreshToken = params.get('googleRefreshToken');

    if (authToken) {
      // almacena los tokens en localStorage
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('googleRefreshToken', googleRefreshToken);
      navigate('/LoginPage'); // redirige a la página principal
    } else {
      navigate('/'); // redirige a la página de inicio de sesión si no hay token
    }
  }, [navigate]);

  return <div>Cargando...</div>; 
};

export default AuthCallback;
