import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
	const linkStyle = {
		fontSize: "1.2rem",
		padding: "0.5rem",
		border: "1px solid #fff",
		margin: "0 0.5rem",
		fontWeight: "bold", // add fontWeight to make text bolder
	};

	return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="/">CYF-STARs</Navbar.Brand>
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link href="/" style={linkStyle}>
							Home
						</Nav.Link>
						<Nav.Link href="/profile" style={linkStyle}>
							Profile
						</Nav.Link>
						<Nav.Link href="/logout" style={linkStyle}>
							Logout
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default CustomNavbar;
