
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import StarList from "./StarList";
import { useParams } from "react-router-dom";


const  Dashboard = () => {
    const { name } = useParams();
	return (
		<div>
			<Navbar />
			<h1>Hello {name}</h1>

			<StarList />
		</div>
	);
};

export default Dashboard;
