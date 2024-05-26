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
        // marginRight: "60px",
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
export default class SimpleSlider extends Component {
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
      <div id="Main-Slider" style={{backgroundColor:"whitesmoke"}}>
        {/* <h4>This is Our Main Course </h4> */}
        <Slider {...settings}>
          <div className="The-slider">
            <Link to={"/delivery"}>
              <img
                src="https://b.zmtcdn.com/data/dish_photos/7c2/2a848c7f13a0fa520cd1bd34c4d1a7c2.jpg"
                alt=""
                className="Slider-Images"
              />
            </Link>
            <p>Pizza </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/5/20129295/f42a6557cba2514327b3515d22601c1b_o2_featured_v2.jpg"
              alt=""
              className="Slider-Images"
              style={{}}
            />
            <p>Momos </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/9/20222729/1e4be0b5e0f970aef41328752d9c4bc1_o2_featured_v2.jpg"
              alt=""
              className="Slider-Images"
            />
            <p> Biryani </p>
          </div>
          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/dish_photos/0b4/96681dd6af23c45cb93abe0cf20380b4.jpg?output-format=webp"
              alt=""
              className="Slider-Images"
            />
            <p>Dosa </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/4/3401084/a4ce76f2773b8721f1d851cdaa3f2f45_o2_featured_v2.jpg"
              alt=""
              className="Slider-Images"
            />
            <p>Cakes </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/8/19274718/71ed3ffa6a600ed56413d1239a32eabe_o2_featured_v2.jpg?output-format=webp"
              alt=""
              className="Slider-Images"
            />{" "}
            <p>Bargar </p>
          </div>
          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/dish_photos/5c5/ddebb5fc9a6e779f98d5c05f126a55c5.jpg?output-format=webp"
              alt=""
              className="Slider-Images"
            />{" "}
            <p> Chicken</p>
          </div>
          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/dish_photos/6d7/19adfe45e70ad564b0af49bbb08606d7.jpg?output-format=webp"
              alt=""
              className="Slider-Images"
            />{" "}
            <p>samosa </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/dish_photos/ab2/38d31369bf620542fa8edf7feb112ab2.jpg"
              alt=""
              className="Slider-Images"
            />
            <p>Rice </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/6/112976/34d5f38cc3bba83d1ac7c27b087c45a0_o2_featured_v2.jpg?output-format=webp"
              alt=""
              className="Slider-Images"
            />
            <p>Paratha </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/8/19144718/08121a5a32f8c3c3dd900c2892f1990f_o2_featured_v2.jpg"
              alt=""
              className="Slider-Images"
            />
            <p>ICE CREAM </p>
          </div>

          <div className="The-slider">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/7/3400177/22ebd227dec12d2eae482ee3bf31a0b9_o2_featured_v2.jpg"
              alt=""
              className="Slider-Images"
            />
            <p>Barfi </p>
          </div>
          
        </Slider>
      </div>
    );
  }
}
