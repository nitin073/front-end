import React, { useState } from "react";
import Card from "./Card";
import List from "../../Data";

const Amazon = ({ HandleClick }) => {
  const [search, setSearch] = useState("");
  return (
    <section>
      <div
        style={{
          // border: "2px solid red",
          marginTop: "-180px",
          marginBottom: "50px",
          marginLeft: "400px",
        }}
      >
        <input
          type="text"
          placeholder="Search Here.."
          style={{ height: "40px", width: "370px" }}
          // ---------------------------------------------------------------------inp --------------------
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {List.filter((item) => {
        if (search === "") {
          return item;
        } else if (
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return item;
        }
      }).map((item) => {
        return (
          <div style={{ display: "inline" }}>
            <Card key={item.id} item={item} HandleClick={HandleClick} />
          </div>
        );
      })}
    </section>
  );
};

export default Amazon;
