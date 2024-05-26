import React from "react";
import { useState } from "react";
import NavCard from "./Navbar_For_Card";
import Amazon from "./Amazon";
import Cart from "./Cart";
const Main = () => {
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
        <NavCard size={cart.length} setshow={setshow} /> <br />
        <br />
        <br />
        <br />
        {show ? (
          <Amazon HandleClick={HandleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={HandleChange} />
        )}
        {warning && (
          <div className="warning">Item is already added to your cart</div>
        )}
      </div>
    </>
  );
};
export default Main;
