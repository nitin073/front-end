import React from "react";
import { FaStar } from "react-icons/fa";
import { FaPersonWalking } from "react-icons/fa6";
const ShopCard = (props) => {
  return (
    <div id="Main_Shop">
      <div id="All-Shop" >
        <div className="All-Shop-header">
          <img src={props.imgsrc} alt="Nope" className="All-Shop-img" />
        </div>
        <div>
          <p className="Shop-Rating">
            {props.star} <FaStar className="Shop-Star" />
          </p>
          <h4 className="Shop-Name">{props.name}</h4>

          <p className="Shop-Discrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            exercitationem!
          </p>

          <button className="Shop-Btn">
            <a href={props.linksrc} style={{ textDecoration: "none" }}>
              {" "}
              Goto
              <FaPersonWalking className="Shop-Walk" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShopCard;
