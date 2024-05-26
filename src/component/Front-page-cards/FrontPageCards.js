import React, { Component } from "react";
import FrontPageCard from "./FrontPageCard";
import img1 from "./Pizza.avif";
import img2 from "./Tea.avif";
import img3 from "./Coffee.avif";
import img4 from "./Burgar.avif";
import img5 from "./Pauva.avif";
import img6 from "./Paratha.avif";
import img7 from "./Cakes.avif";
import img8 from "./Ideli.avif";
import img9 from "./Litti.avif";
import img10 from "./Kfcchiken.avif";
import img11 from "./kadhaiPaneer.jpeg";
import img12 from "./Tanduri.jpeg";
import img13 from "./korma.jpeg";
import img14 from "./paneerTikka.jpeg";
import img15 from "./chikencury.jpeg";
import img16 from "./eggbhujiya.jpeg";
import img17 from "./mutoncury.jpeg";
import img18 from "./eggcurry.jpeg";
import img19 from "./lassi.jpeg";
import img20 from "./faluda.jpeg";
import img21 from "./nan.jpeg";
import img22 from "./laccha.jpeg";


class FrontPageCards extends Component {
  render() {
    return (
      <div className="Front_Cards_Main">
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img1}
            btn={"Goto "}
            linksrc={"/delivery"}
            star={4}
            name={"Pizza"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img2}
            linksrc={"/delivery"}
            star={5}
            name={"Tea"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img3}
            linksrc={"/delivery"}
            star={5}
            name={"Coffee"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img4}
            linksrc={"/delivery"}
            star={5}
            name={"Burgar"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img5}
            linksrc={"/delivery"}
            star={5}
            name={"Pauva"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img6}
            linksrc={"/delivery"}
            star={5}
            name={"Paratha"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img7}
            linksrc={"/delivery"}
            star={5}
            name={"Cakes"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img8}
            linksrc={"/delivery"}
            star={5}
            name={"Ideli"}
          />
        </div>{" "}
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img9}
            btn={"Goto "}
            linksrc={"/delivery"}
            star={4}
            name={"Litti-Chokha"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img10}
            linksrc={"/delivery"}
            star={3}
            name={"KFC Chicken"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img11}
            linksrc={"/delivery"}
            star={5}
            name={"Kadhai Paneer"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img12}
            linksrc={"/delivery"}
            star={5}
            name={"Tanduri Roti"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img13}
            linksrc={"/delivery"}
            star={5}
            name={"Korma"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img14}
            linksrc={"/delivery"}
            star={5}
            name={"Paneer Tikka"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img15}
            linksrc={"/delivery"}
            star={5}
            name={"Chichken Curry"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img16}
            linksrc={"/delivery"}
            star={5}
            name={"Egg Bhujiya"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img17}
            btn={"Goto "}
            linksrc={"/delivery"}
            star={4}
            name={"Mutton Curry"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img18}
            linksrc={"/delivery"}
            star={5}
            name={"Egg Curry"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img19}
            linksrc={"/delivery"}
            star={5}
            name={"Lassi"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img20}
            linksrc={"/delivery"}
            star={5}
            name={"Faluda"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img21}
            linksrc={"/delivery"}
            star={5}
            name={"NAN Roti"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img22}
            linksrc={"/delivery"}
            star={3}
            name={"Laccha Paratha"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img7}
            linksrc={"/delivery"}
            star={5}
            name={"Cakes"}
          />
        </div>
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img8}
            linksrc={"/delivery"}
            star={5}
            name={"Ideli"}
          />
        </div>{" "}
        <div className="Front_Cards_body">
          <FrontPageCard
            imgsrc={img1}
            btn={"Goto "}
            linksrc={"/delivery"}
            star={4}
            name={"Pizza"}
          />
        </div>
      </div>
    );
  }
}
export default FrontPageCards;
