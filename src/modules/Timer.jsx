import { useEffect, useState, useRef } from 'react';

const Timer = ({ isRunning, setScore }) => {
  const [seconds, setSeconds] = useState(0);
  const result = useRef(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        result.current = seconds + 1
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, seconds, setScore]);

  useEffect(() => {
    if (result.current > 0 && isRunning == false) {
      setScore(result.current);
    }
  }, [result.current]);

  return (
    <div>
      <div>TIME: {seconds}</div>
    </div>
  );
};

export default Timer;
