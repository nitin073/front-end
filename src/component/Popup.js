import React, { useState } from "react";

const Popup = ({ handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h4 className="Payment_Successful">
          Your Payment Is Succesful Please Wait...
        </h4>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

const Timer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDoneClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button onClick={handleDoneClick}>Done</button>
      {showPopup && <Popup handleClose={handleClosePopup} />}
    </div>
  );
};

export default Timer;
