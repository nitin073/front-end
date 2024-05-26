import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase";
import { Link } from "react-router-dom";

const auth = getAuth(app);


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const singnupUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success")
    );
  };
  return (
    <>
      <div className="Signup-full">
        <div className="Signup-Main">
          <h3 className="Name-Signup">Signup</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="Signup"
            required
            placeholder="   Email"
          />{" "}
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="   Password"
            className="Signup"
          />
          <br />
          <button className="Signup-btn" onClick={() => singnupUser()}>
            Create Account{" "}
          </button>
          <div className="Account">
            Already have an account?
            <Link to={"/Login"} style={{ textDecoration: "none" }}>
              <span className="Signup-login"> Login </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export { SignUp };
