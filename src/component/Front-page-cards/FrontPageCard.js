import React from "react";
import { FaStar } from "react-icons/fa";
const FrontPageCard = (props) => {
  return (
    <div id="Front-Page-Main">
      <div className="Front-Page-All-Id">
        <div id="Front-Page-Main-Div">
          <a
            href={props.linksrc}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="Front-Page-Image">
              <img src={props.imgsrc} alt="Nope" className="Front-Page-Img" />
            </div>

            <div>
              <p className="Front-Page-Rating">
                {props.star}{" "}
                <FaStar
                  style={{
                    marginTop: "-15px",
                    fontSize: "10px",
                    marginLeft: "-5px",
                  }}
                />
              </p>
              <h4 className="Front-Page-Food-Name">{props.name}</h4>

              <p className="Front-Page-Dicrip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                exercitationem!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default FrontPageCard;
