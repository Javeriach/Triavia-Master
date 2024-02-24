import { useEffect, useReducer, useState } from 'react';

function Timer({ dispatchFun }) {
  let [seconds, setSeconds] = useState(5 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      if (seconds === 0) dispatchFun({ type: 'quiz-finished' });
      else setSeconds((ps) => Number(ps) - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [seconds]);

  let minutes = Math.floor(seconds / 60);
  let tempSeconds = Math.floor(seconds % 60);
  return (
    <div className="Timer">
      Timer: 0{minutes}:{tempSeconds < 10 ? '0' + tempSeconds : tempSeconds}
    </div>
  );
}

export default Timer;
