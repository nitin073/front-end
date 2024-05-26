import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function ControlledCarousel() {
  return (
    <div>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="d-block w-100"
            alt="..."
            style={{ height: "500px", width: "400px" }}
          />
          <MDBCarouselCaption>
            <h5>Welcome To Moti Mahal </h5>
            <p>The Top Rated Restaurent in Jamshedpur</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="d-block w-100"
            alt="..."
            style={{ height: "500px", width: "500px" }}
          />

          <MDBCarouselCaption>
            <h5>Our Kitchen is Always Clear </h5>
            <p>Because Our Purity is Your Prioirity</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="d-block w-100"
            alt="..."
            style={{ height: "500px", width: "500px" }}
          />
          <MDBCarouselCaption>
            <h5>Our Bar is Most Expensive</h5>
            <p>Drink and Chill With Friends</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
