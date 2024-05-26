import React, { useState } from "react";
import Confetti from "react-confetti";

const Confetti1 = () => {
  const [showConfetti, setShowConfetti] = useState(false);
      const handleDoneClick = () => {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 10000); // Show confetti for 5 seconds
      };

      const handleDoneClick1 = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000); // Show confetti for 5 seconds
  };

  return (
    <div>
      {typeof window !== "undefined" && showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
          <button onClick={() => {
              handleDoneClick();
              handleDoneClick1();
      }}>Done</button>
    </div>
  );
};

export default Confetti1;


