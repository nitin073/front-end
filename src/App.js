import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Footer.css";
import "./NavForCard.css";
import { FrontPage } from "./component/FrontPage";
import { Dish1 } from "./component/Dish_card";
import { Delivery } from "./component/Delivery_page";
import { Dining } from "./component/Dining";
import { MotiMahal } from "./component/Shops/AllShop";
import FillAddress from "./component/FllAddress";
import { Payment } from "./component/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/filltheadd" element={<FillAddress />} />
          <Route path="/home" element={<FrontPage />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/securePayementgate" element={<Payment/>} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/dining/moti-mahal" element={<MotiMahal />} />
          <Route
            path="*"
            element={
              <>
                <h1>This page is not availabe</h1>
              </>
            }
          />
          <Route path="/about" element={<Dish1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
