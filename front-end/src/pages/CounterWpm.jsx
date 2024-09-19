import React, { useState, useEffect } from 'react';

function CounterWpm({inputText, originalWords = []}) {
  const [wpm, setWpm] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [timePassed, setTimePassed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Calcular WPM cada segundo basado en el número de palabras y el tiempo transcurrido
  useEffect(() => {
    const interval = setInterval(() => {

      setTimePassed((prevTime) => prevTime + 1);

      const wordsTyped = inputText.trim() ? inputText.trim().split(/\s+/) : [];
      const completedWords = wordsTyped.slice(0, originalWords.length);
      const correctWords = completedWords.filter((word, index) => word === originalWords[index]).length;
      // const correctWords = wordsTyped.filter((word, index) => word === originalWords[index]).length;
      // const accuracyRate = wordsTyped.length > 0 ? (correctWords / wordsTyped.length) * 100 : 100;
      const accuracyRate = completedWords.length > 0 ? (correctWords / completedWords.length) * 100 : 100;

      setAccuracy(accuracyRate.toFixed(0));
      const wordsArray = inputText.trim().split(/\s+/); // Dividir palabras por espacios

      const wordCount = wordsArray.filter(Boolean).length; // Contar palabras no vacías
      setWordsTyped(wordCount);

      if (timePassed > 0) {
        setWpm(Math.round((wordCount / timePassed) * 60)); // WPM = palabras / minutos
      }
    }, 200); //tasa de actualizacion

    return () => clearInterval(interval);
  }, [inputText, originalWords]);

  return (
    <div className="">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Your words per minute</h2>
        <p className="text-3xl font-bold mb-2 text-orange-600">{wpm}</p>
        <h2 className="text-xl font-bold mb-2 text-orange-600">Accuracy</h2>
        <p className="text-2xl font-bold mb-2 text-green-600">{accuracy}%</p>
      </div>
    </div>
  );
}

export default CounterWpm;
