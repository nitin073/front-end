import React, { Component } from "react";
import ShopCard from "./ShopCard";
import img1 from "./motimahal.jpeg";
import img2 from "./alcor.jpeg";
import img3 from "./bluediamond.jpeg";
import img4 from "./dalchini.jpeg";
import img5 from "./oxygen.jpeg";
import img6 from "./banjara.avif";
import img7 from "./novelty.jpeg";
import img8 from "./cruze.avif";
class ShopCards extends Component {
  render() {
    return (
      <div id="Main-All-Shop">

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img1}
            btn={"Goto "}
            linksrc={"/dining/moti-mahal"}
            star={4}
            name={"Moti Mahal"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img8}
            btn={"Goto "}
            linksrc={"/dining/the-cruze"}
            star={4}
            name={"The Cruze"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img2}
            linksrc={"/dining/the-alcor"}
            star={5}
            name={"The Alcor"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img3}
            linksrc={"/dining/blue-diamond"}
            star={5}
            name={"Blue Diamond"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img4}
            linksrc={"/dining/dalchini"}
            star={5}
            name={"The Dalchini"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img5}
            linksrc={"/dining/oxygen"}
            star={5}
            name={"Oxygen"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img6}
            linksrc={"/dining/banjara"}
            star={5}
            name={"Banjara"}
          />
        </div>

        <div className="All-Shop-body">
          <ShopCard
            imgsrc={img7}
            linksrc={"/dining/novelty"}
            star={5}
            name={"Novelty"}
          />
        </div>
      </div>
    );
  }
}
export default ShopCards;
