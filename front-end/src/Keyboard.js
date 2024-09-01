import React from 'react';
import './Keyboard.css'; // Estilos para el teclado

const keyLayout = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

function Keyboard({ typedChar }) {
  return (
    <div className="keyboard">
      {keyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <span 
              key={key} 
              className={`keyboard-key ${key === typedChar ? 'highlight' : ''}`}
            >
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
