import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/star.png";

const AboutSecFour = () => {
  const [triggerCount, setTriggerCount] = useState(0); // used to restart counters
  const sectionRef = useRef(null);

  // Observe when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Increment trigger each time section enters view
          setTriggerCount((prev) => prev + 1);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const Counter = ({ end, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(0); // reset count every trigger
      let start = 0;
      const step = Math.ceil(end / 100); // smoother animation
      const interval = 20;

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, interval);

      return () => clearInterval(timer);
    }, [end, trigger]); // depend on trigger

    return <span>{count}+</span>;
  };

  const secTwo = [
    { id: 1, text1: <Counter end={5000} trigger={triggerCount} />, text2: "Happy Clients" },
    { id: 2, text1: <Counter end={3000} trigger={triggerCount} />, text2: "Project Done" },
    { id: 3, text1: <Counter end={1000} trigger={triggerCount} />, text2: "Project Done" },
  ];

  return (
    <>
      <div
        ref={sectionRef}
        style={{ backgroundColor: "#A44730", padding: "40px 0 60px 0" }}
        className="mt-5"
      >
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
            {secTwo.map((item) => (
              <Col
                md={4}
                lg={4}
                className="rounded-1 p-3 text-center text-white"
                style={{ backgroundColor: "#3A65F2", width: "300px" }}
                key={item.id}
              >
                <p className="fs-1 fw-bold">{item.text1}</p>
                <p className="" style={{ fontSize: "18px" }}>
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
