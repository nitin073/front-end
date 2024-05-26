import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "./Firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const singinUser = () => {
    // if (!value.email || !value.password) {
      
    // }
    signInWithEmailAndPassword(auth, email, password).then((value) =>
      navigate("/protected")).catch((err) => console.log((err))
    );
  };
  return (
    <>
      <div className="Login-Full">
        <div id="Login">
          <h3>Login Page </h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="inp-login"
            placeholder="Enter Your Email "
          />{" "}
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="inp-login"
            placeholder="Enter Your Password"
          />{" "}
          <br />
          <button type="button" className="inp-login" onClick={()=> singinUser()}>
            Login
          </button>
          <p>
            I Don`t Have An Account!{" "}
            <Link to={"/Signup"} style={{ textDecoration: "none" }}>
              {" "}
              <span style={{ color: "tomato" }}>Sign up </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export { Login };
