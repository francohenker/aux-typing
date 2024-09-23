import React, { useState } from 'react';
import '../styles/CustomTextPage.css';
import jwt_decode from 'jsonwebtoken';




function CreateCustomText({ saveCustomText }) {
  const [customText, setCustomText] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // saveCustomText(customText);  // Guardar el texto en la base de datos
    // setCustomText('');  // Limpiar el área de texto después de guardar
    const response = await fetch(process.env.REACT_APP_ADDRESS + ":4000/phrase/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ phrase: customText}),
    })
    if(response.ok){
      setCustomText('');
    }else{
      // alert("No estas logeado")
      // window.location.href = '/LoginPage';
      console.log('Error al guardar el texto');
    }
    
    alert(response.status);
  };


  return (
    <div className="create-text-container">
      <h2 className="text-2xl font-bold mb-4">Crea tu propio texto</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Escribe tu texto aquí..."
          className="custom-textarea"
          rows="5"
          cols="40"
        />
        <button type="submit" className="save-button">Guardar texto</button>
      </form>
    </div>
  );
};
export default CreateCustomText;
