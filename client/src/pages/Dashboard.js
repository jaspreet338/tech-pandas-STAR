import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import StarList from "./StarList";
const  Dashboard = () => {
	const [name, setName] = useState("");
    useEffect(() => setName("Someone"), []);
	return (
		<div>
			<h1>Hello {name}</h1>
			<Navbar />
			<StarList />
		</div>
	);
};

export default Dashboard;
