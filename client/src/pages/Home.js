import React from "react";
import Navbar from "./Navbar";
import StarList from "./StarList";
import RegisterForm from "./RegisterForm";
import "./Registration.css";
import "./Home.css";


export function Home() {

return (

			<div>

				<Navbar />
				<StarList />
				<RegisterForm />

			</div>
	);
}

export default Home;
