import { useEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Obtener el tema guardado en localStorage, si no, por defecto es 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'bumblebee';
  });

  useEffect(() => {
    // Cambia el atributo de clase del body según el tema seleccionado
    document.documentElement.setAttribute('data-theme', theme);
    
    // Guardar el tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'bumblebee' ? 'night' : 'bumblebee'));
  };

  return [theme, toggleTheme];
}

export default useTheme;