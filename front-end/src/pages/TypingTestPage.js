import React, { useState, useEffect, useRef } from 'react';
import '../styles/TypingTestPage.css';
import CounterWpm from './CounterWpm';

function TypingTestPage() {
  const [words, setWords] = useState([]);
  const [typedWords, setTypedWords] = useState('');
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
    setTypedWords(e.target.value);
  };

  const handleKeyPress = (e) => {
    let key = e.key.toLowerCase();

    // Evitar que el "Enter" agregue un salto de línea
    if (key === 'enter') {
      e.preventDefault(); // Evita el salto de línea
      setTypedWords(''); // Opcional: Limpiar el área de texto tras presionar Enter
      return;
    }

    // Normaliza las tildes
    const normalizedKeyMap = {
      'á': 'a',
      'é': 'e',
      'í': 'i',
      'ó': 'o',
      'ú': 'u'
    };
    key = normalizedKeyMap[key] || key;

    const keyElement = document.getElementById(key);
    if (keyElement) {
      keyElement.classList.add('highlight');
      setTimeout(() => keyElement.classList.remove('highlight'), 100); // Menos delay
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const renderWords = () => {
    const typedArray = typedWords.trim().split(' ');

    return words.map((word, index) => {
      const currentTypedWord = typedArray[index] || '';

      // Compara la palabra escrita con la generada y establece el color.
      let className = '';
      if (currentTypedWord === word) {
        className = 'correct-word'; // Verde
      } else if (currentTypedWord && word.startsWith(currentTypedWord)) {
        className = 'partial-word'; // Aún escribiéndola bien
      } else if (currentTypedWord) {
        className = 'incorrect-word'; // Rojo
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
        onChange={handleTyping} // Actualiza el estado typedWords
        onKeyPress={handleKeyPress} // Maneja la tecla Enter
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
