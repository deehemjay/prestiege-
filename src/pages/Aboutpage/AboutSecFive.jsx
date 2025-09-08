import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import star from "../../images/star.png";
import img1 from "../../images/mop.png";
import img2 from "../../images/sec5man.png";
import img3 from "../../images/kitchen.png";
import img4 from "../../images/kitchenhover.png";
import BrownButton from "../../components/BrownButton";

const AboutSecFive = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Container className="pt-5 mt-5">
        <Row className="d-flex align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src={star} alt="" className="img-fluid abt-sec5" />
              <p className="fs-4 fw-medium">HOW WE WORK</p>
            </div>
            <p className="fs-1 fw-semibold">Our Working Process</p>
          </Col>
          <Col md={6}>
            <p className="w-75 ms-md-auto me-xs-auto" style={{ fontSize: "14px" }}>
              We offer a wide range of services including cleaning carpet
              cleaning and window cleaning.
            </p>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col md={4} className="abt-sec5">
            <img src={img1} alt="" className="img-fluid abt-sec5-img p-3 mx-auto d-block" />
            <div className="text-center pt-3">
              <p className="fw-semibold fs-5">Choose a cleaning plan</p>
              <p className="fw-light">
                Whether you need a one-time deep clean or regular maintenance,
                we offer flexible plans tailored to your schedule and space.
                Pick what works best for you—simple, fast, and hassle-free.
              </p>
            </div>
            <p className="abt-sec5-float fs-4">1</p>
          </Col>
          <Col md={4} className="abt-sec5">
            <img src={img2} alt="" className="img-fluid abt-sec5-img p-3 mx-auto d-block" />
            <div className="text-center pt-3">
              <p className="fw-semibold fs-5">We Clean</p>
              <p className="fw-light">
                Our team gets to work using eco-friendly products and proven
                techniques to leave every surface spotless, sanitized, and
                fresh.
              </p>
            </div>
            <p className="abt-sec5-float fs-4">2</p>
          </Col>
          <Col md={4} className="abt-sec5">
            <img
              src={isHovered ? img4 : img3}
              alt="hover effect"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ transition: "0.3s" }}
              className="img-fluid abt-sec5-img p-3 mx-auto d-block"
            />
            <div className="text-center pt-3">
              <p className="fw-semibold fs-5">Back To Comfort</p>
              <p className="fw-light">
                Our expert cleaning brings peace of mind and a relaxing
                environment—so you can breathe easy and enjoy your space again.
              </p>
            </div>
            <p className="abt-sec5-float fs-4">3</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-center pt-3"><BrownButton text="Book our cleaning" /></div>
      </Container>
    </>
  );
};

export default AboutSecFive;
