import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomTextPage.css';
import ThemeChange from './ThemeChange';

function CreateCustomText({ saveCustomText }) {
  const [customText, setCustomText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_ADDRESS + ":4000/phrase/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ phrase: customText }),
    });
    if (response.ok) {
      setCustomText('');
    } else {
      console.log('Error al guardar el texto');
    }

    alert(response.status);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="create-text-container">
      <ThemeChange/>
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Crea tu propio texto</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Escribe tu texto aquí..."
          // className="custom-textarea"
          className='textarea textarea-secondary w-full'
          rows="5"
          cols="40"
        />
        <div className="button-group"> {/* Contenedor para los botones */}
          <button onClick={handleBackClick} className="btn btn-error">Volver</button>
          <button type="submit" className="btn btn-secondary">Guardar texto</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCustomText;
