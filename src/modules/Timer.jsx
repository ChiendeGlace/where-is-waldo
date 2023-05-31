import { useEffect } from 'react';

function Timer({seconds, isRunning, setSeconds}) {

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <div>TIME: {seconds}</div>
    </div>
  );
}

export default Timer;