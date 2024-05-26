import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        display: "block",
        marginLeft: "-35px",
      }}
      onClick={onClick}
    />
  );
}
export default class ShopSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div
        id="Main-Slider"
        style={{ marginTop: "20px", borderTop: "1px solid gray" }}
      >
        {/* <h4>This is Our Main Course </h4> */}
        <Slider {...settings}>
          <div className="The-slider">
            <Link to={"/Shop/Sky180.com"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYmTe4T0nU0wjaM7xOI1J5wLu6NPXCDUZ2w&usqp=CAU"
                alt=""
                className="Slider-Images"
              />
            </Link>
            <p className="Slider-p">Sky 180 </p>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrtqTW1gj4FXBH4wXaUwDMdaot-Nz5z4Neg&usqp=CAU"
              alt=""
              className="Slider-Images"
            />
            <p className="Slider-p">The Oak </p>
          </div>

          <div>
            <img
              src="https://content.jdmagicbox.com/comp/jamshedpur/n5/0657px657.x657.171007192505.j2n5/catalogue/silver-spoon-restaurant-sakchi-jamshedpur-restaurants-wacc05u6sp.jpg"
              alt=""
              className="Slider-Images"
            />
            <p className="Slider-p"> Silver Spoon </p>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPbuOUnGQH3sUENjw_EUgDtr2l3H9ZDOzAJTXWS=w1080-h608-p-no-v0"
              alt=""
              className="Slider-Images"
            />
            <p className="Slider-p">Koh-i-Noor </p>
          </div>

          <div>
            <img
              src="https://content.jdmagicbox.com/comp/jamshedpur/n8/0657px657.x657.181015122823.l9n8/catalogue/junction-restaurant-circuit-house-jamshedpur-restaurants-clwofnmjfw.jpg"
              alt=""
              className="Slider-Images"
            />
            <p className="Slider-p">Junction </p>
          </div>

          <div>
            <img
              src="https://content.jdmagicbox.com/comp/jamshedpur/p6/0657px657.x657.170809191826.k1p6/catalogue/lazzat-a-family-restaurant-sakchi-jamshedpur-banquet-halls-3h99zz1.jpg"
              alt=""
              className="Slider-Images"
            />{" "}
            <p className="Slider-p">Lazzat </p>
          </div>
          <div>
            <img
              src="https://content.jdmagicbox.com/comp/jamshedpur/m9/0657px657.x657.190402120109.q3m9/catalogue/mini-punjab-banquet-and-resturant-mango-jamshedpur-banquet-halls-defekr7lv0.jpg"
              alt=""
              className="Slider-Images"
            />{" "}
            <p className="Slider-p"> Mini Punjab</p>
          </div>

          <div>
            <img
              src="https://content.jdmagicbox.com/comp/jamshedpur/t5/0657px657.x657.190719023808.a7t5/catalogue/fusion-sakchi-jamshedpur-restaurants-un9pyx9jif.jpg"
              alt=""
              className="Slider-Images"
            />
            <p className="Slider-p">Fusion </p>
          </div>

          <div>
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-4b59c52d6e8693ac0c85f64d8057ee2f-lq"
              alt=""
              className="Slider-Images"
            />
            <p className="Slider-p">Sonnet </p>
          </div>
        </Slider>
      </div>
    );
  }
}
