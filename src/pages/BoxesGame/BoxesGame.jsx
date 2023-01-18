import React, { useState, useEffect } from 'react';
import "./BoxesGame.css";

const BoxesGame= () => {
  const [keyword, setKeyword] = useState('');
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let intervalId;
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
        setKeyword("Hit")
      }, 1000);
    } else {
      clearInterval(intervalId);
      alert(`Game over! Your final score is ${score}`);
    }
    return () => clearInterval(intervalId);
  }, [seconds, score]);

  useEffect(() => {
    if (seconds > 0) {
      const randomBoxIndex = Math.floor(Math.random() * 9);
      const newBoxes = [...boxes];
      newBoxes[randomBoxIndex] = keyword;
      setBoxes(newBoxes);
      setTimeout(() => {
        newBoxes[randomBoxIndex] = '';
        setBoxes(newBoxes);
      }, 1000);
    }
  }, [seconds, keyword]);

  const handleClick = (index) => {
    if (boxes[index] === keyword) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
  };

  return (
    <div className='main mt-5 pt-5'>
   
      <div className='text-uppercase fw-bold pt-5 '>Time remaining: {seconds}</div>
      <div className='text-uppercase fw-bold pt-2 pb-5 '>Score: {score}</div>
     
      <div className='grid-container '>
        {boxes.map((box, index) => (
          <div
          
            key={index}
            className='grid-item'
            onClick={() => handleClick(index)}
          >
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxesGame;
