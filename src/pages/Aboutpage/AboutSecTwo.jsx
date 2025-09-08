import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/star.png";

const AboutSecTwo = () => {
  const secTwo = [
    {
      text1: "Our Mission",
      text2:
        " To provide exceptional cleaning services that create healthier, more comfortable spaces for our clients. We are committed to delivering reliable, eco-friendly, and personalized cleaning solutions with integrity, care, and attention to details.",
    },
    {
      text1: "Our Vision",
      text2:
        "To be the most trusted and preferred cleaning service by delivering exceptional quality, building lasting client relationships, and creating healthier, happier environments—one space at a time.",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#A44730", padding: "40px 0 60px 0" }} className="mt-5">
        <Container fluid>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img src={img} alt="" />
            <p className="fs-4 text-white">OUR CORE VALUES</p>
            <img src={img} alt="" />
          </div>
          <p
            style={{ fontSize: "30px" }}
            className="text-white justify-content-center d-flex"
          >
            The Values Behind Every Clean
          </p>
          <Row className="gap-4 justify-content-center">
            {secTwo.map((item, index) => (
              <Col
                md={6} lg={6}
                className="bg-white rounded-1 p-3"
                style={{ maxHeight: "250px", width: "400px"}}
                key={item.id}
              >
                <p className="fs-4 fw-bold">{item.text1}</p>
                <p style={{ borderTop: "1px solid #A44730" }} className="pt-4">
                  {item.text2}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutSecTwo;
