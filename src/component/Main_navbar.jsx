import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function FullWidthTextField() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [SetSearchTerm] = useState("");
  return (
    <div id="Main-Nav-Bar">
      <div className="Logo1">
        <Link to={"/home"}>
          {" "}
          <img src={"/pics/logo.png"} alt="Pic Not Found!" height={75} />
        </Link>
      </div>

      <Box
        sx={{
          width: 950,
        }}
      >
        <div className="Navbar-Search">
          <div className="Template-container"></div>
        </div>
      </Box>

      <div className="Right-side-login">
        {isAuthenticated ? (
          <div
            style={{
              marginTop: "43px",
            }}
          >
            Hey... "{user.name}"
          </div>
        ) : (
          <button
            className="Login_Main_User"
            style={{ marginLeft: "20px", marginTop: "45px" }}
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </div>
      <div className="All-data-contanier"></div>
    </div>
  );
}
