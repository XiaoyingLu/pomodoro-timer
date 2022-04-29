import React, { Fragment, useState, useEffect } from 'react';
import CountDown from './countdown';
import styles from "./customCountdown.module.scss";

const CustomCountDown = ({}) => {
  const [inputTime, setInputTime] = useState({minutes: 0, seconds: 0}); // input time

  const onInputMinutesHandler = (event) => {
    setInputTime(prevTime => ({...prevTime, minutes: Number(event.target.value)}));
  }

  const onInputSecondsHandler = (event) => {
    setInputTime(prevTime => ({...prevTime, seconds: Number(event.target.value)}));
  }

  return (
    <Fragment>
      <div className={`input-group mb-3 ${styles.inputGroup}`}>
        <input type="number" className={`form-control ${styles.formInput}`} placeholder="Minutes" aria-label="Minutes" onBlur={onInputMinutesHandler} />
        <span className="input-group-text"> : </span>
        <input type="number" className={`form-control ${styles.formInput}`} placeholder="Seconds" aria-label="Seconds" onBlur={onInputSecondsHandler} />
      </div>

      <CountDown timer={inputTime.minutes * 60 + inputTime.seconds}/>
    </Fragment>
  );
}

export default CustomCountDown;