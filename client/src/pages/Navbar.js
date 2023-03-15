import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/cyf_brand.png";
import "./Component/Dashboard.css";
// import Cookies from "js-cookie";


function CustomNavbar() {
	const navigate = useNavigate();
    // const myCookieValue = Cookies.get("myCookie");

	// console.log(myCookieValue);

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
			<navbar className="navbar">
				{/* <Container> */}
					<img className="logo" src={logo} alt="Logo" />;
					{/* <Nav className="justify-content-end" style={{ width: "100%", color: "white" }}> */}
						<button className="logout" onClick={logout} >
							Log out
						</button>
				{/* </Container> */}
			</navbar>
		</>
	);
}

export default CustomNavbar;
