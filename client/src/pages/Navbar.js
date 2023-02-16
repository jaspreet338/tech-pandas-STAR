import React from "react";

 function Navbar() {
  return (
		<div className="header">
			<h3>CYF-STARs</h3>
			<div className="nav">
				<a href="/#">Home</a>
				<a href="/#">Profile</a>
				<button className="btn-out">Logout</button>
			</div>
		</div>

	);
}
export default Navbar;
