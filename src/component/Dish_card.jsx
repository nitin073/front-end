import React from "react";
const data = [
  {
    name: "Paneer",
    img: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
    name: "Rolls",
    img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    name: "Paneer",
    img: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
    name: "Rolls",
    img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    name: "Cakes",
    img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    name: "Chicken",
    img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    name: "Burgir",
    img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    name: "Biryani",
    img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
];

const Dish1 = () => {
  return (
    <div className="All-data-dish"  >
      <>
        {data.map((d) => (
          <div className="all-data">
            <div>
              <img src={d.img} alt="" className="dish-img" />
            </div>

            <div>
              <p className="dish-name">{d.name}</p>
              <p>{d.age}</p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
export { Dish1 };
