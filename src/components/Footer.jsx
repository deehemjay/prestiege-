import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={3}>
            <img src={logo} alt="" />
            <p>
              We take pride in delivering high-quality, reliable, and affordable
              cleaning solutions for homes and businesses. Whether you need a
              deep clean, regular maintenance, or move-in/move-out services, our
              team is here to make your space shine.
            </p>
            <div>
              <FaFacebookSquare style={{color: "#3A65F2", fontSize: "28px", margin: "0 5px 0 0"}} />
              <FaLinkedin style={{color: "#3A65F2", fontSize: "28px", margin: "0 5px 0 0"}} />
              <FaSquareXTwitter style={{color: "#3A65F2", fontSize: "28px", margin: "0 5px 0 0"}} />
              <FaWhatsappSquare style={{color: "#3A65F2", fontSize: "28px", margin: "0 5px 0 0"}} />
              <FaGooglePlusSquare style={{color: "#3A65F2", fontSize: "28px", margin: "0 5px 0 0"}} />
            </div>
                  </Col>
                  <Col md={3}>
                      <ul className="list-unstyled">
                          <li className="mb-2 fs-5 fw-bold">SERVICES</li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Industrial Cleaning</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Deep Cleaning</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Residential Cleaning</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Janitorial Cleaning</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Supply Materials</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Post Construction</Link></li>
                      </ul>
                  </Col>
                  <Col md={3}>
                      <ul className="list-unstyled">
                          <li className="mb-2 fs-5 fw-bold">OUR LINKS</li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Home</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>About</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Privacy Policy</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Portfolio</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>FAQ</Link></li>
                          <li className="mb-2"><GiStarShuriken style={{color: "#3A65F2", margin: "0 5px 0 0"}} /><Link as={Link} to="#" className="text-decoration-none ft-link" style={{fontSize: "18px"}}>Book Online</Link></li>
                      </ul>
                  </Col>
                  <Col md={3}>
                      <p className="mb-2 fs-5 fw-bold">GET IN TOUCH</p>
                      <div className="icons d-flex gap-2">
                          <IoLocationSharp style={{fontSize: "30px", color: "#3A65F2"}} />
                          <p style={{fontSize: "18px"}}>3rd Floor, 186A Igbosere Road Lagos,Nigeria. </p>
                      </div>
                      <div className="icons d-flex gap-2">
                          <BsFillTelephoneFill style={{fontSize: "20px", color: "#3A65F2"}} />
                          <p style={{fontSize: "18px"}}>234-80-32792064</p>
                      </div>
                      <div className="icons d-flex gap-2">
                         <IoIosMail style={{fontSize: "25px", color: "#3A65F2"}} />
                          <p style={{fontSize: "18px"}}>prestige@prestige-hygiene.com</p>
                      </div>
                  </Col>
              </Row>
              <div className="underfooter pt-3 text-center mt-5" style={{borderTop: "1px solid #3A65F2"}}>
                  <p><BsCCircle />2025 Prestige-hygiene. All rights reserved.</p>
              </div>
      </Container>
    </>
  );
};

export default Footer;
