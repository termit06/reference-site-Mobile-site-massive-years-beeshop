import React, { useState } from 'react';

const NumberGuesser: React.FC = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);
  const [guess, setGuess] = useState<number | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const makeGuess = () => {
    if (min > max) {
      setGameOver(true);
      return;
    }
    
    const newGuess = Math.floor((min + max) / 2);
    setGuess(newGuess);
    setQuestionCount(prev => prev + 1);
  };

  const handleResponse = (isGreater: boolean) => {
    if (isGreater) {
      
      setMin(guess! + 1); 
    } else {
      
      setMax(guess! - 1); 
    }
    
    makeGuess(); 
  };

  const resetGame = () => {
    setMin(0);
    setMax(100);
    setGuess(null);
    setQuestionCount(0);
    setGameOver(false);
    makeGuess(); 
  };

  return (
    <div>
      <h1>Компьютер угадывает число</h1>
      {gameOver ? (
        <div>
          <h2>Игра окончена!</h2>
          <p>Компьютер задал {questionCount} вопросов.</p>
          <button onClick={resetGame}>Начать заново</button>
        </div>
      ) : (
        <div>
          {guess !== null && (
            <div>
              <h2>Компьютер предполагает: {guess}</h2>
              <button onClick={() => handleResponse(true)}>Больше</button>
              <button onClick={() => handleResponse(false)}>Меньше или равно</button>
            </div>
          )}
          {!guess && (
            <button onClick={makeGuess}>Начать угадывать</button>
          )}
        </div>
      )}
    </div>
  );
};

export default NumberGuesser;