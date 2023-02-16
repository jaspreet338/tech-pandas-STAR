import React from "react";
import Navbar from "./Navbar";
import StarList from "./StarList";
import "./Home.css";


export function Home() {

return (
		<main role="main">
			<div>

				<Navbar />
				<StarList />
			</div>
		</main>
	);
}

export default Home;
