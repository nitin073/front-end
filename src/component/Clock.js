import React, { useState, useEffect } from "react";

const Clock = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <h3 style={{ color: "red" , marginTop:"10px"}}>Timer: {seconds}s</h3>
    </div>
  );
};

export default Clock;
