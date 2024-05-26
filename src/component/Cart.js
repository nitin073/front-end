import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div id="Main_cart">
      <article>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} className="cart_images" alt="img Nope" />
              <p className="Cart_Name">{item.name}</p>
              <div className="Cart_Disc">
                <p className="Cart_Discrip">{item.discrip}</p>
                <p className="Cart_Discrip">{item.discrip1}</p>
                <p className="Cart_Discrip">{item.discrip2}</p>
                <p className="Cart_Discrip">{item.discrip3}</p>
                <p className="Cart_Discrip">{item.discrip4}</p>
              </div>
            </div>

            <div className="Cart_Btn_A_R">
              <button
                onClick={() => handleChange(item, +1)}
                className="Cart_Add"
              >
                {" "}
                +{" "}
              </button>
              <button className="Cart_Count">{item.amount}</button>
              <button
                onClick={() => handleChange(item, -1)}
                className="Cart_Remove1"
              >
                {" "}
                -{" "}
              </button>
            </div>

            <div>
              <span className="Cart_Price"> The Price is </span>
              <span className="Cart_price">{item.price}</span>
            </div>
            <div className="Cart_Remove">
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}

        <div className="Cart_Total">
          <span className="Cart_Prices">Total Price of your Cart Rs :- </span>
          <span
            style={{
              fontSize: "19px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            {price}
          </span>
          <br />

          <div className="Cart__Btn">
            {isAuthenticated ? (
              <Link to={"/Filltheadd"}>
                <button className="Cart_Payment"> Payment </button>{" "}
              </Link>
            ) : (
              <button
                className="Login_Main_User"
                style={{ marginTop: "3px" }}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
export default Cart;
