import React from "react";
import { FaStar } from "react-icons/fa";
const Card = ({ item, HandleClick }) => {
  const {
    name,
    discrip1,
    discrip2,
    discrip3,
    discrip4,
    discrip,
    price,
    img,
    rating,
  } = item;

  return (
    <div id="Cards-Main">
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="" className="cards-img" />
        </div>

        <div className="details">
          <p className="Details-Name">{name}</p>
          <p className="Details-Discrip">{discrip}</p>
          <p className="Details-Discrip">{discrip1}</p>
          <p className="Details-Discrip">{discrip2}</p>
          <p className="Details-Discrip">{discrip3}</p>
          <p className="Details-Discrip">{discrip4}</p>
          <p className="Details-Rating">
            {rating} <FaStar className="Shop-Star" />
          </p>
          <p className="Details-Price"> The Price is {price}</p>

          <button onClick={() => HandleClick(item)}> Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
