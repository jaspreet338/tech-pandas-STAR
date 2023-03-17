import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarSingleStar.css";


	return (
		<>
			<navbar className="navbar">
					<img className="logo" src={logo} alt="Logo" />;
						<button  onClick={logout} >
							{ children }
						</button>
			</navbar>
		</>
	);


export default CustomNavbar;