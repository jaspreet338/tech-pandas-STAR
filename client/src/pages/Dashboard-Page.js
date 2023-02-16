import { useEffect, useState } from "react";


export function Dashboard() {
	const [token, setToken] = useState(null);
    const [name, setName] = useState("");

	return (
		<div>
			<h1>Hello {name}</h1>
		</div>
	);
}

export default Dashboard;
