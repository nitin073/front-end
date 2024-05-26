import { Link } from "react-router-dom";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { MdLocalDining } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import SimpleSlider from "./Slider";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["The Food Corner", "Purity is our Priority"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="App">
      <span
        style={{
          color: "tomato",
          filter: "brightness(800%)",
          fontFamily: "revert-layer",
          fontSize: "60px",
        }}
      >
        {text}
      </span>
      <Cursor cursorColor="red" />
    </div>
  );
};

const Middle1 = () => {
  return (
    <>
      <div className="Delevery-main">
        <div className="Delivery">
          <span className="Delivery-text">
            <Link
              to={"/Delivery"}
              style={{ color: "antiquewhite", textDecoration: "none" }}
            >
              <div id="delivery-Text">
                <div className="Dl">
                  Delivery
                  <CiDeliveryTruck
                    className="Delivery-icons"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </div>
            </Link>
          </span>
        </div>
      </div>

      <div className="Dining">
        <span className="Dining-text">
          <Link
            to={"/Dining"}
            style={{ color: "antiquewhite", textDecoration: "none" }}
          >
            <div className="Din">
              Dining
              <MdLocalDining className="Dining-icons" />
            </div>
          </Link>
        </span>
      </div>

      <div className="Background-Page">
        <div className="foodcorner">
          <h2>
            {" "}
            <MyComponent />
          </h2>
          The Best Restaurant in Jamshedpur
        </div>
        <div className="middle1">
          {/* <span className="Best-dis"> Our Best Desis</span> */}
          <SimpleSlider />
        </div>
      </div>
    </>
  );
};
export { Middle1 };
