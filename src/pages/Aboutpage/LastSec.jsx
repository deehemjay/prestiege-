import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star from "../../images/star.png";
import img1 from "../../images/firstteamman.png";
import img2 from "../../images/team-woman.png";
import img3 from "../../images/secondteamman.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LastSec = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <div className="d-flex align-items-center gap-3">
          <img src={star} alt="" />
          <p className="fs-4 fw-semibold">MEET OUR TEAM</p>
        </div>
        <p className="fs-1 fw-bold">The Experts Behind Your Sparkling Space</p>
        <Row>
          <Col md={4} className="last-sec">
            <img src={img1} alt="" className="last-sec-img p-3 img-fluid" />
            <div className="text  bg-white shadow-sm">
              <p className="fw-bold">Tony Williams</p>
              <p className="fw-semibold">Manager</p>
              <div className="icons d-none">
                <FaFacebookSquare
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaLinkedin
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaSquareXTwitter
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaWhatsappSquare
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col md={4} className="last-sec sp">
            <img src={img2} alt="" className="last-sec-img p-3 img-fluid" />
            <div className="text bg-white shadow-sm">
              <p className="fw-bold">Mary Jones</p>
              <p className="fw-semibold">Secretary</p>
              <div className="icons d-none">
                <FaFacebookSquare
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaLinkedin
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaSquareXTwitter
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaWhatsappSquare
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col md={4} className="last-sec sp">
            <img src={img3} alt="" className="last-sec-img  p-3 img-fluid" />
            <div className="text bg-white shadow-sm">
              <p className="fw-bold">John James</p>
              <p className="fw-semibold">Supervisor</p>
              <div className="icons d-none">
                <FaFacebookSquare
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaLinkedin
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaSquareXTwitter
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
                <FaWhatsappSquare
                  style={{
                    color: "#3A65F2",
                    fontSize: "21px",
                    margin: "0 5px 0 0",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LastSec;
