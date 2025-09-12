import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import BrownButton from "./BrownButton";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 fs-6 fw-semibold"
              style={{ maxHeight: "100px", gap: "40px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/residentialService">Residental Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/janitorialService">Janitorial Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/supplyService">Supply of Material</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/postConstructionService">Post Construction Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/funmigationService">Funmigation/Pest Control</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/industrialService">Industrial Cleaning</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/project">Project</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <BrownButton text="Login"/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
