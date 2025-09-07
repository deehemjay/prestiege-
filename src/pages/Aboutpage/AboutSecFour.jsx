import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/star.png";

const AboutSecFour = () => {
  const secTwo = [
    {
      text1: "5000+",
      text2: "Happy Clients",
    },
    {
      text1: "3000+",
      text2: "Project Done",
    },
    {
      text1: "1000+",
      text2: "Project Done",
    }
  ];

    return (
        <>
             <div style={{ backgroundColor: "#A44730", padding: "40px 0 60px 0"}} className="mt-5">
        <Container  fluid>
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
                md={4} lg={4}
                className="rounded-1 p-3 text-center text-white"
                style={{backgroundColor: "#3A65F2", width: '390px'}}
                key={item.id} 
              >
                <p className="fs-1 fw-bold">{item.text1}</p>
                <p className="" style={{fontSize: "18px"}}>
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

export default AboutSecFour;
