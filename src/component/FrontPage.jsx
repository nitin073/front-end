import React from "react";
import { LoginButton } from "../component/Navbar";
import FrontPageMain from "./Front-page-cards/FrontPageMain";
import { Middle1 } from "../component/Middle";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import ThemedExample from "./ChatBot/ThemedExample";
const FrontPage = () => {
    const { isAuthenticated} = useAuth0();
  return (
    <>
      <LoginButton />
      <Middle1 />
      <FrontPageMain />
      <div className="Cart__Btn">
        {isAuthenticated ? (
          <ThemedExample />
        ) : (
          <div> </div>
        )}
      </div>
      {/* <ThemedExample /> */}
      <Footer />
    </>
  );
};
export { FrontPage };
