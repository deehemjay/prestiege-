import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img2 from "../images/star.png";

const SectionOne = (props) => {
  const IconTextRow = ({ icon: Icon, text }) => {
    return (
      <Row className="align-items-center mb-2">
        <Col md={1} xs={1}>
          <Icon className="fs-5" style={{ color: "#3A65F2" }} />
        </Col>
        <Col md={11} xs={11}>
          <p className="fw-semibold mb-0">{text}</p>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container className="pt-5 mt-5">
        <Row>
          <Col lg={6} md={12}>
            <img src={props.image} alt="" className="img-fluid" />
          </Col>
          <Col lg={6} md={12} className="pt-5 pt-lg-0">
            <Row>
              <Col md={1} xs={2}>
                <img src={img2} alt="" className="img-fluid" />
              </Col>
              <Col md={11} xs={8}>
                <p className="fs-4">{props.text1}</p>
              </Col>
            </Row>
            <p className="fs-3 fw-bold">{props.text2}</p>
            <p className="pb-2">{props.text3}</p>
            <p>{props.text4}</p>
            <IconTextRow icon={props.icon} text={props.text5} />
            <IconTextRow icon={props.icon} text={props.text6} />
            <IconTextRow icon={props.icon} text={props.text7} />
            <IconTextRow icon={props.icon} text={props.text8} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SectionOne;
