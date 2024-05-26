import { Link } from "react-router-dom";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Welcome To Moti Mahal"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="App">
      <span
        style={{
          color: "black",
          filter: "brightness(800%)",
          fontFamily: "revert-layer",
          fontSize: "20px",
        }}
      >
        {text}
      </span>
      <Cursor cursorColor="red" />
    </div>
  );
};
const NavBarforShop = ({ setshow, size }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
      <div id="NavForCart">
        <Link to={"/home"} className="Logo">
          <img src="/pics/logo.png" alt="" height={75} />
        </Link>
        <div
          style={{
            marginTop: "-50px",
            position: "absolute",
            marginLeft: "120px",
          }}
        >
          <MyComponent />
        </div>

        <div id="cart" onClick={() => setshow(false)}>
          <FaCartPlus />
          <sup className="CartNumber">{size}</sup>
        </div>

        {isAuthenticated ? (
          <div className="Cart-UserName">Hey... "{user.name}"</div>
        ) : (
          <button
            className="Login_Main_User"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}

        {/* <div className="Cart-UserName">Hey, This is User Name ):</div> */}
      </div>
    </>
  );
};
export default NavBarforShop;
