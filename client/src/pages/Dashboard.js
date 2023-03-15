import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import StarList from "./StarList";

const  Dashboard = () => {
    const [user, setUser] = useState({ name:"", role:"" });
    useEffect(() => {
        fetch("/api/users")
        .then((res) => res.json())
        .then((data) => setUser(data));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Hello {user.name} ({user.role})</h1>

            <StarList user={user} />
        </div>
    );
};

export default Dashboard;
