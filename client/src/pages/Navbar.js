import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./cyf_brand.png";
import "./NavbarSingleStar.css";


const CustomNavbar = ({ children }) => (
    <Navbar className="nav" variant="dark" >
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="" style={{ width: "148px", marginLeft: "78px" }} />
            </Navbar.Brand>
            <Nav className="justify-content-end" id="dashboardBtn" style={{ width: "100%" }}>
                {children}
            </Nav>
        </Container>
    </Navbar>
);

export default CustomNavbar;