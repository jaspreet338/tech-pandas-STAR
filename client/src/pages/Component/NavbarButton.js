import React from "react";



const NavbarButton = ({ name, link, clicked }) =>
	clicked ? (
		<button onClick={clicked} className="logout">
			{name}
		</button>
	) : (
		<button href={link} className="logout">
			{name}
		</button>
	);

export default NavbarButton;