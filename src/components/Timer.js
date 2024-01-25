import React, { useState, useEffect } from 'react';

function Timer(props) {
  const [timer, setTimer] = useState("10");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
      alert("Time's up!");
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);


  return (
    <div>
      <h1>Timer: {timer}</h1>
    </div>
  );
}

export default Timer;