import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <div id="Front-Page-Navbar">
        <div className="Logo">
          <Link to={"/home"}>
            <img src={"/pics/logo.png"} alt="Pic Not Found!" height={75} />{" "}
          </Link>
        </div>
        <div>
          {isAuthenticated && (
            <p
              style={{
                marginTop: "-85px",
                position: "absolute",
                marginLeft: "80%",
                color: "white",
              }}
            >
              {" "}
              Hey...
              {user.name}
            </p>
          )}
        </div>
        <div className="login-button">
          <div className="Login-btn1">
            {isAuthenticated ? (
              <button
                className="Login"
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </button>
            ) : (
              <button className="Login" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}

          </div>
        </div>
      </div>
    </>
  );
};
export { LoginButton };
