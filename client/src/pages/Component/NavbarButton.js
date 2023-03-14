import React from "react";
import Nav from "react-bootstrap/Nav";

const linkStyle = {
    fontSize: "1.2rem",
    padding: "0.5rem",
    border: "1px solid #fff",
    margin: "0 0.5rem",
    fontWeight: "bold", // add fontWeight to make text bolder
};

const NavbarButton = ({ name, link, clicked }) => (
    (clicked ? (
        <Nav.Link onClick={clicked} style={linkStyle}>
            {name}
        </Nav.Link>
    ) : (
        <Nav.Link href={link} style={linkStyle}>
            {name}
        </Nav.Link>
    ))
);

export default NavbarButton;