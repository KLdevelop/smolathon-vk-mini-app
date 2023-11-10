import { useState, useEffect } from 'react';
import './Timer.scss'

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdown);
          //  какие-то действия по истечении времени
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000); 
    return () => clearInterval(countdown); 
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      <p className="timer_value"> {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
};
