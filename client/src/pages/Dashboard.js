
 import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import StarList from "./StarList";
import "./Component/Dashboard.css";

const  Dashboard = () => {
	const [user, setUser] = useState({ name:"" });
	useEffect(() => {
		fetch("/api/users")
		.then((res) => res.json())
		.then((data) => setUser(data));
	}, []);
	return (
		<div>
			<Navbar />
			<h1 className="greeting">Hello {user.name} </h1>

			<StarList user={user} />
		</div>
	);
};

export default Dashboard;
