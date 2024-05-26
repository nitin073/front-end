import React from "react";
import { RiEmotionHappyFill } from "react-icons/ri";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/"
            style={{ textDecoration: "none" }}
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>

          <a href="https://twitter.com/?lang=en" className="me-4 text-reset">
            {" "}
            <MDBIcon color="secondary" fab icon="twitter" />{" "}
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=raj490099@gmail.com"
            className="me-4 text-reset"
          >
            {" "}
            <MDBIcon color="secondary" fab icon="google" />{" "}
          </a>

          <a
            href="https://www.instagram.com/nupursingh_6299/"
            className="me-4 text-reset"
          >
            {" "}
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>

          <a
            href="https://www.linkedin.com/in/nitin073/"
            className="me-4 text-reset"
          >
            {" "}
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="https://github.com/nitin073" className="me-4 text-reset">
            {" "}
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Food Corner
              </h6>
              <p>
                The Food Corner is Most expensive Restaurent in Jamshedpur
                Jharkhand, Thanks For Visiting Our Restaurent{" "}
                <RiEmotionHappyFill />
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About </h6>
              <p>
                <Link to={"./home"} className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link className="text-reset">Contact us</Link>
              </p>
              <p>
                <Link className="text-reset">About us</Link>
              </p>
              {/* <p>
                <Link className="text-reset">Chakra Ui</Link>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help Center</h6>
              <p>
                <Link className="text-reset">Email</Link>
              </p>
              <p>
                <Link className="text-reset">Report</Link>
              </p>
              <p>
                <Link className="text-reset">Payment Problem</Link>
              </p>
              <p>
                <Link to={"/admin-page"} className="text-reset">Our Team </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Jamshedpur, Jharkhand 831012
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                help.food.corner@email.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                6202894946
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 91
                6299456104
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link to={"./"} className="text-reset fw-bold">
          foodcorner.github.io
        </Link>
      </div>
    </MDBFooter>
  );
}
