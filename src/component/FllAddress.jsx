import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FullWidthTextField from "./Main_navbar";

const FillAddress = () => {
  // const [form, setForm] = useState("");
  // const handleForm = (e) => {
  //   // console.log(e.target.value, e.target.name);
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //  const respone = await fetch("http://localhost:4000/", {
  //    method: "GET",
  //  });

  //   console.log(respone);
  // };
  return (
    <>
      <form >
        {/* -------------------------------------------------------------------------Nav      */}
        <FullWidthTextField className="Navbar_Add" />
        <div className="Main-Add">
          <div className="Boder_ADD">
            <input
              style={{ width: "60%", marginTop: "40px" }}
              type="text"
              placeholder="Name"
              name="name"
              className="Add_Name"
              required

            />{" "}
            <br />
            <input
              style={{ width: "60%", marginTop: "20px" }}
              type="text"
              placeholder="Full Address"
              className="FullAdd"

              name="fulladdress"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Contact Number"
              style={{ width: "60%", marginTop: "20px" }}
              // onChange={handleForm}
              name="contact"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Pincode"
              style={{ width: "60%", marginTop: "20px" }}
              name="pin"
            />{" "}
            <br />
            <Link to={"/securePayementgate"} className="BTN_ADD_MAIN">
            <button
              type="submit"
              style={{
                border: "none",
                color: "red",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="Btn_Add"
            >
                Payment 
            </button>
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};
export default FillAddress;
