import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./Component/Dashboard.css";
// import Cookies from "js-cookie";


function CustomNavbar() {
	const navigate = useNavigate();
    // const myCookieValue = Cookies.get("myCookie");

	// console.log(myCookieValue);
	const linkStyle = {
		fontSize: "1.2rem",
		padding: "0.3rem",
		// border: "1px solid #fff",
		margin: "0 0.5rem",
		fontWeight: "bold", // add fontWeight to make text bolder
	};

	function logout() {
		// console.log(id);
		fetch("/api/logout", { method: "POST" })
			.then((res) => res)
			.then((data) => {
				console.log(data);
				return navigate("/");
			})
			.catch((error) => console.error(error));
	}


	return (
		<>
			<Navbar className="navbar">
				<Container>
					<Navbar.Brand href="/">CYF-STARs</Navbar.Brand>
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link href="/about" style={linkStyle}>
							About
						</Nav.Link>
						<Nav.Link className="logout" onClick={logout} style={linkStyle}>
							Log out
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default CustomNavbar;
