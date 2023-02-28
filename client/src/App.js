import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/dashboard/:name" element={<Dashboard />} />
		<Route path="/register/:name" element={<RegisterForm />} />
	</Routes>
);

export default App;
