import React, { useState, useEffect, useRef } from 'react';
import '../styles/TypingTestPage.css';
import CounterWpm from '../components/CounterWpm';

function TypingTestPage() {
  const [words, setWords] = useState([]);
  const [typedWords, setTypedWords] = useState(''); // Estado para la entrada del usuario
  const [wordPointer, setWordPointer] = useState(0); // Puntero para la palabra actual
  const [userInputStream, setUserInputStream] = useState([]); // Mantener el progreso
  const textareaRef = useRef(null);

  useEffect(() => {
    const randomWords = generateRandomWords(50);
    setWords(randomWords);
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const generateRandomWords = (numWords) => {
    const wordList = ['ejemplo', 'palabra', 'teclado', 'mecanografía', 'escribir', 'tiempo', 'reto', 'prueba', 'velocidad', 'español'];
    let randomWords = [];
    for (let i = 0; i < numWords; i++) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      randomWords.push(wordList[randomIndex]);
    }
    return randomWords;
  };

  const handleTyping = (e) => {
    setTypedWords(e.target.value); // Actualiza la entrada del usuario

    // Manejo de la barra espaciadora
    if (e.key === ' ') {
      const typedArray = e.target.value.trim().split(' ');
      const currentWord = typedArray[typedArray.length - 1]; // La palabra que el usuario acaba de escribir

      if (currentWord !== '') {
        if (currentWord === words[wordPointer]) {
          setUserInputStream([...userInputStream, { word: currentWord, status: 'correct' }]); // Marca como correcta
        } else {
          setUserInputStream([...userInputStream, { word: currentWord, status: 'incorrect' }]); // Marca como incorrecta
        }
        setWordPointer(wordPointer + 1); // Avanza al siguiente wordPointer
        setTypedWords(''); // Limpia el campo después de la barra espaciadora
      }
    }
  };

  const handleKeyDown = (e) => {
    // Evitar que el "Enter" agregue un salto de línea
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const renderWords = () => {
    return words.map((word, index) => {
      let className = '';

      // Si la palabra ya fue procesada, mostrar su estado (correcta/incorrecta)
      if (userInputStream[index]) {
        className = userInputStream[index].status === 'correct' ? 'correct-word' : 'incorrect-word';
      }

      // Si el usuario está escribiendo la palabra actual
      if (index === wordPointer) {
        const currentTypedWord = typedWords.trim(); // La palabra que el usuario está escribiendo actualmente
        if (word.startsWith(currentTypedWord)) {
          className = 'partial-word'; // Se está escribiendo correctamente
        } else if (currentTypedWord) {
          className = 'incorrect-word'; // Se está escribiendo incorrectamente
        }
      }

      return (
        <span key={index} className={className}>
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className="typing-test-container">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">Test de Tecleo</h2>

      <div className="counter-container">
        <CounterWpm inputText={typedWords} originalWords={words} />
      </div>

      <div className="words-container">
        {renderWords()}
      </div>

      <textarea
        ref={textareaRef}
        className="typing-input"
        placeholder="Escribe aquí..."
        value={typedWords}
        onChange={(e) => setTypedWords(e.target.value)} // Actualiza el estado typedWords
        onKeyDown={handleKeyDown} // Maneja la tecla Enter
        onKeyUp={handleTyping} // Maneja la barra espaciadora
      />

      <div className="keyboard-container">
        <div className="keyboard-row">
          {'qwertyuiop'.split('').map((letter) => (
            <div key={letter} id={letter} className="key">
              {letter}
            </div>
          ))}
        </div>

        <div className="keyboard-row">
          {'asdfghjklñ'.split('').map((letter) => (
            <div key={letter} id={letter} className="key">
              {letter}
            </div>
          ))}
        </div>
        <div className="keyboard-row">
          {'zxcvbnm'.split('').map((letter) => (
            <div key={letter} id={letter} className="key">
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TypingTestPage;
