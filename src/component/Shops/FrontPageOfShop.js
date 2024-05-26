import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from "react";
import Footer from "../Footer";
import { useState } from "react";
import NavBarforShop from "./NavBarforShop";
// import ControlledCarousel from "./ImageSlider";
// import ControlledCarousel from "./ShopSlider"; --------------------------- SLider
import Amazon from "./Amazon";
import Cart from "./Cart";
const FrontPageofShop = () => {
  const [show, setshow] = useState([]);

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const HandleClick = (item) => {
    let Ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) Ispresent = true;
    });
    if (Ispresent) {
      // return;
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };
  const HandleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <div>
        <NavBarforShop size={cart.length} setshow={setshow} />
        <br />
        {/* -------------------------------------------------------------------------------Moti mahal SLider Yaha haii  */}
        {/* <ControlledCarousel />  */}
      {/* <ControlledCarousel/> */}
        <br />
        <br />
        <br />
        <br /><br />
        {show ? (
          <Amazon HandleClick={HandleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={HandleChange} />
        )}
        {warning && (
          <div className="warning">Item is already added to your cart</div>
        )}
      </div>
      <br /> <br />
      <Footer />
    </>
  );
};
export default FrontPageofShop;
