import React, { useState, useEffect } from "react";
// import { MdOutlineClose } from "react-icons/md";
// import Confetti from "./Confetti";
import Confetti from "react-confetti/";


const Popup = ({ handleClose }) => {


  return (
    <div className="popup">
      <div className="popup-inner">
        <h4
          className="Payment_Successful"
          style={{
            marginTop: "10px",
          }}
        >
          Your Payment Is Succesful Please Wait...
        </h4>
        {/* <MdOutlineClose
          onClick={handleClose}
          style={{ color: "white", fontSize: "33px", cursor: "pointer" }}
          className="close_payment"
        /> */}
      </div>
    </div>
  );
};

const Input = () => {
     const [showConfetti, setShowConfetti] = useState(false);
     const handleDoneClick1 = () => {
       setShowConfetti(true);
       setTimeout(() => {
         setShowConfetti(false);
       }, 10000); // Show confetti for 5 seconds
     };

  const [seconds, setSeconds] = useState(15);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setInputDisabled(true);
    }
  }, [seconds]);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDoneClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          disabled={inputDisabled}
          placeholder=" Enter Your Transition Number"
          style={{
            width: "230px",
            border: "none",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        />
        <h3
          style={{
            color: "red",
            marginTop: "15px",
            paddingTop: "8px",
            marginBottom: "10px",
          }}
        >
          Timer: {seconds}s
        </h3>
      </div>
      <div>
        <div>
          {typeof window !== "undefined" && showConfetti && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          
          <button
            onClick={() => {
              handleDoneClick();
              handleDoneClick1();
            }}
            disabled={inputDisabled}
            className="BTN_PAYMENT_DONE"
            style={{
              backgroundColor: "gray",
              border: "1px solid white",
              color: "white",
              marginTop: "15px",
              marginLeft: "35%",
              marginRight: "35%",
              borderRadius: "5px",
              width: "100px",
            }}
          >
            Done
          </button>
        </div>
        {showPopup && <Popup handleClose={handleClosePopup} />}
        <div></div>
      </div>
    </div>
  );
};

export default Input;
