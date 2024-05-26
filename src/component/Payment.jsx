import React from "react";
// import Clock from "./Clock"
import Input from "./Input";

const Payment = () => {
  return (
    <>
      
      <div className="Payment">
        
        <div className="middle_payment">
          <div className="Main_Role">
            <p style={{ color: "white" }}>Your Total Bill is :- " " </p>
            <img src="/pics/qr.jpeg" height={"200px"} alt="" id="imgpayment" />
            <div style={{ color: "white", marginTop: "10px" }}>
              {" "}
              Scan And Do payment{" "}
            </div>
            {/* <input
              type="text"
              placeholder=" Enter Your Transition Number"
              style={{
                width: "230px",
                border: "none",
                marginTop: "20px",
                borderRadius: "8px",

              }}
            /> */}
            <Input/>
          </div>
        </div>
      </div>
    </>
  );
};
export { Payment };
