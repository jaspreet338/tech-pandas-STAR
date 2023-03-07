import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/dashboard" element={<Dashboard />} />
		<Route path="/register" element={<RegisterForm />} />
		<Route path="/star/:id" element={<SingleStarPage />} />
	</Routes>
);

export default App;
