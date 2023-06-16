import { useEffect, useState } from 'react';

const Timer = ({ isRunning, setScore }) => {
  const [seconds, setSeconds] = useState(0);
  let intervalId;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalId);
      setScore(seconds);
    }
  }, [isRunning, setScore, seconds]);

  return (
    <div>
      <div>TIME: {seconds}</div>
    </div>
  );
};

export default Timer;
