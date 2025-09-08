import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/professional.png";
import img2 from "../../images/time.png";
import img3 from "../../images/company.png";
import img4 from "../../images/satisfaction.png";
import img5 from "../../images/choose-pics.png";
import star from "../../images/star.png";

const AboutSecThree = () => {
  return (
    <>
      <Container fluid className="mt-5 pt-5">
        <div className="d-flex align-items-center gap-3">
          <img src={star} alt="" className="img-fluid" />
          <p className="fs-4 fw-medium">WHY CHOOSE US</p>
        </div>
        <Row className="pt-3">
          <Col md={6} className="sec-three">
            <div className="gap-3 item">
              <div>
                <img src={img1} alt="" className="sec-three-img"/>
              </div>
              <div style={{ lineHeight: "1" }}>
                <p className="fs-5 fw-medium">Professional Expertise</p>
                <p className="fw-light">
                  we use non-toxic and eco-friendly cleaning products that are
                  safe for both pets, clients and children.
                </p>
              </div>
            </div>
            <div className="gap-3 item">
              <div>
                <img src={img2} alt="" className="sec-three-img" />
              </div>
              <div style={{ lineHeight: "1" }}>
                <p className="fs-5 fw-medium">Flexible Arrival Time</p>
                <p className="fw-light">
                  We understand that every client has a unique schedule, which
                  is why we offer flexible arrival times to suit your needs.
                </p>
              </div>
            </div>
            <div className="gap-3 item">
              <div>
                <img src={img3} alt="" className="sec-three-img" />
              </div>
              <div style={{ lineHeight: "1" }}>
                <p className="fs-5 fw-medium">Top Rated Company</p>
                <p className="fw-light">
                  we take pride in delivering exceptional results with every
                  visit. Our reputation is built on reliability, attention to
                  detail, and outstanding customer satisfaction.
                </p>
              </div>
            </div>
            <div className="gap-3 item">
              <div>
                <img src={img4} alt="" className="sec-three-img" />
              </div>
              <div style={{ lineHeight: "1" }}>
                <p className="fs-5 fw-medium">Satisfaction Guaranteed</p>
                <p className="fw-light">
                  We stand behind the quality of our work with a 100%
                  satisfaction guarantee. Our goal is to leave every space
                  spotless and every customer smiling.
                </p>
              </div>
            </div>
                  </Col>
                  <Col md={6}>
                      <img src={img5} alt="" className="img-fluid try-sec3" />
                  </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutSecThree;
