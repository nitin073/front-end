import React from "react";
import Footer from "./Footer";
import FullWidthTextField from "./Main_navbar";
import MainShop from "./Shops/MainShop";
// import ShopSlider from "../component/Shops/ShopSlider";
// import ShopSlider from "./"
const Dining = () => {
  return (
    <>
      <FullWidthTextField />
      {/* <ControlledCarousel/> */}
      <br />
      {/* <ShopSlider /> */}
      <MainShop />
      <Footer />
    </>
  );
};
export { Dining };
