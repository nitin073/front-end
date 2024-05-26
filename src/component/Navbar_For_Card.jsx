import { Link } from "react-router-dom";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
const NavCard = ({ setshow, size }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <div id="NavForCart">
        <Link to={"/home"} className="Logo">
          <img src="/pics/logo.png" alt="" height={75} />
        </Link>

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
      </div>

    </>
  );
};
export default NavCard;
