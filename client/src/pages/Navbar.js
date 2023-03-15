import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const CustomNavbar = ({ children }) => (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="/">CYF-STARs</Navbar.Brand>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                {children}
            </Nav>
        </Container>
    </Navbar>
);

export default CustomNavbar;