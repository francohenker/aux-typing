import React, { useState, useEffect } from 'react';
import './TypingTestPage.css';

function TypingTestPage() {
  const [words, setWords] = useState([]);
  const [typedWords, setTypedWords] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    const randomWords = generateRandomWords(50);
    setWords(randomWords);
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
    if (!startTime) {
      setStartTime(new Date());
    }
    setTypedWords(e.target.value);

    if (typedWords.trim().split(' ').length === words.length) {
      const endTime = new Date();
      const timeDiff = (endTime - startTime) / 1000 / 60;
      const wordsPerMinute = Math.floor(words.length / timeDiff);
      setWpm(wordsPerMinute);
    }
  };

  const handleKeyPress = (e) => {
    const key = e.key.toLowerCase();
    const keyElement = document.getElementById(key);
    if (keyElement) {
      keyElement.classList.add('highlight');
      setTimeout(() => keyElement.classList.remove('highlight'), 200);
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="typing-test-container">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Test de Tecleo</h2>
      <div className="words-container">
        {words.join(' ')}
      </div>
      <textarea
        className="typing-input"
        placeholder="Escribe aquí..."
        value={typedWords}
        onChange={handleTyping}
      />
      <div className="wpm-display">
        {wpm > 0 && <p>Palabras por minuto: {wpm}</p>}
      </div>
      <div className="keyboard-container">
        {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
          <div key={letter} id={letter} className="key">
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypingTestPage;
