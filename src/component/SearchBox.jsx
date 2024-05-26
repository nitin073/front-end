import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={Data.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              placeholder: "  Search",
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Data = [
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/9/18438909/8ac67f799c14cd3b586e18e48eaa00f7_o2_featured_v2.jpg?output-format=webp",
    name: "Pizza",
    discrip: "Best Pizza",
    rating: "4",
    price: "$21 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/chains/3/112843/acc19ec8e3df68375b57566d1fac324d_o2_featured_v2.jpg?output-format=webp",
    name: "Tea",
    discrip: "The best Tea ",
    rating: "4",
    price: "$21 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/chains/7/18922587/6fc70195c3b028b3e612f2266d87aa70_o2_featured_v2.jpg?output-format=webp",
    name: "Pauva",
    discrip: "our best pauva",
    rating: "4",
    price: "$50 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/chains/6/19171726/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg?output-format=webp",
    name: "Coffee",
    discrip: "Best Pizza",
    rating: "4",
    price: "$21 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/chains/7/110397/2011193460b6f9638a7d7c7942492b5f_o2_featured_v2.jpg?output-format=webp",
    name: "Cakes",
    discrip: "Best cakes",
    rating: "3",
    price: "$2 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
    name: "Burgir",
    discrip: "Best Pizza",
    rating: "4",
    price: "$21 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/chains/4/112594/d670855d8fea82204dbcb0921f933053_o2_featured_v2.jpg",
    name: "Snacks",
    discrip: "Best Pizza",
    rating: "4",
    price: "$21 for one",
  },

  {
    img: "https://b.zmtcdn.com/data/pictures/2/18621282/65edd74923436367453d351b1984395e_o2_featured_v2.jpg",
    name: "Paratha",
    discrip: "Best Pizza",
    rating: "4",
    price: "$21 for one",
  },
];
