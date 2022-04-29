import React, { Fragment, useState, useEffect } from 'react';
import styles from "./countdown.module.scss";

const CountDown = ({timer}) => {
    const [time, setTime] = useState(timer); // display time
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        console.log(started);
        if (!started) {
            return
        }
      const interval = setInterval(() => {
          if (paused) {
              clearInterval(interval)
              return
          }
          setTime(prevTime => {
              if (prevTime <= 0) {
                  return 0
              }
              return prevTime - 1; 
          })
      }, 1000)
      return () => clearInterval(interval);
    }, [time, started, paused]);

  const formatTime = (time) => {
    const seconds = time % 60 < 10 ? "0" + time % 60 : time % 60;
    const minutes = Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60);
    return minutes + ':' + seconds
  }

  const onStartClickHandler = () => {
    const clockTime = timer;
    console.log(clockTime);
    setStarted(true);
    setPaused(false);
    setTime(clockTime);
  }

  const toggleCountDown = () => {
    setPaused(prevPaused => !prevPaused);
  }

  const resetTimeDisplay = () => {
    setStarted(false);
    setTime(timer);
  }

  return (
    <div className="d-flex flex-column justify-content-between py-2">
      <h1 className={`display-1 mb-5 card-text ${styles.timer}`}>{formatTime(time)}</h1>
      <div className="d-grid gap-3 d-md-block mx-auto p-3">
        <button type="button" className={`btn btn-lg card-link ${styles.startBtn}`} onClick={onStartClickHandler}>START</button>
        <button type="button" className={`btn btn-lg card-link ${styles.pauseBtn}`} onClick={toggleCountDown}>PAUSE / RESUME</button>
        <button type="button" className={`btn btn-lg card-link ${styles.resetBtn}`} onClick={resetTimeDisplay}>RESET</button>
      </div>
      
    </div>
  );
}

export default CountDown;